import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Comments from '../Components/Comments/Comments'
import CommentForm from '../Components/Comments/CommentForm'
import { getPost, reset } from '../Features/posts/postsSlice'


const MessageBoard = () => {
  const dispatch = useDispatch()

  const { user } =useSelector((state) => state.auth)
  const { posts, isLoading, isError, message } = useSelector((state) => state.posts)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }
    // dispatch(getPost())

    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])
  
  return (
    <>
    <section>
        <h1>
          Welcome {user && user.name}
        </h1>
        <p>
          Comment Form
        </p>
    </section>
      <CommentForm /> 
    </>
   
  )
}

export default MessageBoard