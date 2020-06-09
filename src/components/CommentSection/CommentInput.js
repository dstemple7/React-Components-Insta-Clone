// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  
  const changeHandler = e => {
    props.changeComment(e.target.value)
  }

  const submitHandler = e => {
    props.submitComment()
    e.preventDefault()
  }
  
  return (
    <form className="comment-form" onSubmit={submitHandler}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={changeHandler}
      />
    </form>
  );
};

export default CommentInput;
