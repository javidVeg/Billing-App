import React, { useEffect, useState } from 'react'
import { getComments as getCommentsApi, 
        createComment as createCommentApi, 
        deleteComment as deleteCommentApi, 
        updateComment as updateCommentApi} from '../../api'
import Comment from '../Comments/Comment'
import CommentForm from '../Comments/CommentForm'
import { useDispatch } from 'react-redux'
import { commentPost } from '../../Features/auth/authSlice'
import { createPost } from '../../API/api'

//@ Getting Current User ID from parent
const Comments = ({ 
    currentUserId,
    handleSubmit, 
    submitLabel,
    hasCancelButton = false, 
    initialText = "", 
    handleCancel 
    }) => 
    {

        
    const [postData, setPostData] = useState({ text: '', parentId: ''});
    const [backendComments, setBackendComments] = useState([])
    const [activeComment, setActiveComment] = useState(null)
    //@FORM LOGIC@//
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;
    const onSubmit = event => {
        event.preventDefault()
        handleSubmit(text)
        setText("")
    }
    //@----------@//
    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );
    const dispatch = useDispatch();
    const user = currentUserId;

//@ GET    
    const getReplies = commentId => {
//@ This enalbes replies to be sorted in ascending order
        return backendComments
        .filter((backendComment)=> backendComment.parentId === commentId)
        .sort(
            (a,b) =>
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() 
        );
    }

//@ POST
    const addComment = (text, parentId) => {
        console.log("addComment", text, parentId)
        
        const finalComment = `${user.name}: ${text}`
        console.log(finalComment)
//@ Redux Action
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments])
            setActiveComment(null)
        })
    }

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(postData)

//     if (currentId === 0) {
//       dispatch(createPost({ ...postData, name: user?.result?.name }, history));
//       clear();
//     } else {
//       dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
//       clear();
//     }
//   };

//@ DELETE
//@ This delete finds all but the commentId and then renders the comments without it. 
    const deleteComment = (commentId) => {
        if(window.confirm("Are you sure?")) {
            deleteCommentApi(commentId).then(() => {
                const updateBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updateBackendComments)
            })
        }
    }
   
//@ PUSH
    const updateComment = (text, commentId) => {
        updateCommentApi(text, commentId).then(() => {
            const updateBackendComments = backendComments.map(backendComment => {
                if (backendComment.id === commentId) {
                    return{...backendComment, body: text }
                }
                return backendComment
            });
            setBackendComments(updateBackendComments);
            setActiveComment(null)
        });
    };
//@ to fetch comment data
    useEffect(() => {
// @ returns a promise so .then returns the data to he useState.
        getCommentsApi().then((data) => {
            setBackendComments(data)
        });
    }, [])

  return (
    <div className= "comments">
        <h3 className= "comments-title">
            Comments
        </h3>
{/* //@ Comment Form for writing a Comment */}
        <div className= "comment-form-title">Write Comment</div>
        {/* <CommentForm submitLabel= "Write" handleSubmit={addComment} /> */}
        <form onSubmit={onSubmit}>
        <textarea 
        className="comment-form-textarea" 
        value={text} 
        onChange={(e) => setText(e.target.value)}/>
        <button className="comment-form-button" disabled= {isTextareaDisabled}>{submitLabel}</button>
        {hasCancelButton && (
            <button
                type= "button"
                className = "comment-form-button comment-form-cancel-button"
                onClick={handleCancel}
            > Cancel
            </button>
        )}
        </form>
        <div className= "comments-container">
{/* //@ this is IMPORTANT FOR DISPLAYING values in an object */}
            {rootComments.map((rootComment) => (
                <Comment 
                    key={rootComment.id} 
                    comment = {rootComment} 
                    replies= {getReplies(rootComment.id)}
                    currentUserId= {currentUserId}
                    deleteComment= {deleteComment}
                    updateComment={updateComment}
                    activeComment= {activeComment}
                    setActiveComment= {setActiveComment}
                    // addComment={addComment}
                    />
            ))}
        </div>
    </div>
  )
}

export default Comments