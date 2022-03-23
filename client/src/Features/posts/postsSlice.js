import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createComment } from '../../api';
import postService from './postsService';

const initialState = { 
    posts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
      }


//! Creates new post
export const createPost = createAsyncThunk('post/create', async (postData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    console.log(token)
    return await postService.createPost(postData,token)
  } catch (error) {
    const message = 
      (error.response && error.response.data && error.response.data.message) || 
      error.message || 
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }

})

//! Gets posts
export const  getPost = createAsyncThunk('post/getAll', async(_,thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await postService.getPost(token)
  } catch (error) {
    const message = 
      (error.response && error.response.data && error.response.data.message) || 
      error.message || 
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts.push(action.payload)
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = action.payload
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = postsSlice.actions
export default postsSlice.reducer