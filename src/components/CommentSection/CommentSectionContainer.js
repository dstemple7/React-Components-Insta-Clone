// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, commentsSubmit] = useState(props.comments)
  const [newComment] = useState('')
  const addComments = () => {
    commentsSubmit ([...comments, {username: 'dstemple7', text: newComment}])
  }
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
      comments.map (commentNew =>{
        return(
          <Comment comment={commentNew} />
        )  
      })
      }
      <CommentInput submitComment={addComments}/>
    </div>
  );
};

export default CommentSection;