// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {

  const commentSubmit = e => {
    props.submitComment()
  }
  
  return (
    <form className="comment-form" onSubmit={commentSubmit}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.comment}
      />
    </form>
  );
};

export default CommentInput;
