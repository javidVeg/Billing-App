import axios from 'axios'

const API_URL = '/api/posts'

//! Create new goal

const createPost = async (postData, token) => {
    const config = {
        header: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, postData, config)

    return response.data
}

//! Get user posts
const getPost = async (token) => {
    const config = {
        header: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const postService = {
    createPost,
    getPost
}

export default postService;