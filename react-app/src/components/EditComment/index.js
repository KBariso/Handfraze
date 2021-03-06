import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editComment } from "../../store/comments";
import { getAllComments } from "../../store/comments";
import { deleteComment } from "../../store/comments";
import './EditComment.css'

const EditComment = ({ phraseProp, hideForm }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { phraseId } = useParams();
  const commentId = phraseProp.id;

  const user = useSelector((state) => state.session.user);
  const userId = user?.id;

  const usersComment = userId === phraseProp.user_id

  const [content, setContent] = useState(phraseProp.content);
  const [errors, setErrors] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPayload = {
      comment_id: commentId,
      content,
    };

    if (!content) {
      setErrors(["Please enter a comment"]);
    } else if (content.length >= 255) {
      setErrors(["Your comment is too long!"]);
    }
       else {
      setErrors([]);

    let updatedComment = await dispatch(editComment(updatedPayload));

    if (updatedComment) {
      dispatch(getAllComments())
      hideForm(setEdit(false))
    }
      }
  };


  const handleDelete = (e) => {
    e.preventDefault();
    const deletedComment = dispatch(deleteComment(phraseProp.id));
    if (deletedComment) {
        hideForm(setEdit(false))
    }


}



  return (
    <>
    <div>
            <p className="SingleCommentContainer"> {phraseProp.content} </p>
            <div className="EditCommentButtonContainer">

              {(usersComment && !edit) && <button className="EditCommentButton" onClick={() => setEdit(!edit)}>Edit Comment</button>}
            </div>


      { edit && <form className="form" onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <div className="EditCommentInput">
          <div>
            <textarea
              className="commentEditInput"
              placeholder="Comment"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Save Changes</button>
        { (usersComment) && <button className='editDeleteButton' onClick={handleDelete}>Delete Comment</button>}
      </form>}
    </div>

    </>
  );
};

export default EditComment;
