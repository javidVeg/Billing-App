import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPost } from  '../../Features/posts/postsSlice'

function CommentForm() {

    const [text, setText] = useState('')

    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createPost({text}))
        setText('')

    }
    
  return (
    <section>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor= "text">Comment</label>
                <div>
                <input 
                    type="text" 
                    name="text"
                    id='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                </div>
            </div>
            <div>
                <button type='submit'>Add Comment</button>
            </div>
        </form> 
    </section>
  )
}

export default CommentForm