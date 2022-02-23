import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createNewComment } from "../../store/comments";


const CreateNewComment = () => {
  const dispatch = useDispatch();
  const phrases = useSelector(state => state.phrases.id);
  const user = useSelector((state) => state.session.user?.id)
  const userId= user;

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  const updateContent = (e) => setContent(e.target.value);

  // if (!user) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (errors.length > 0) return;

      const payload = {
        user_id:userId,
        content,
        phrase_id:phrases,
      };

      if (!content) {
        setErrors(["Please provide a comment"]);
      } else if (content.length >= 255) {
        setErrors(["Your comment is too long!"]);
      }
      else {
      setErrors([]);

    let createdComment = await dispatch(createNewComment(payload))
    if (createdComment) {
      setContent("")
    }
  }
  };



  return (
    <div >
     {
      user && <form className="form" onSubmit={handleSubmit}>
        <div>
          {errors.length > 0 && (
            <ul className="errors">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
        <div>
            <textarea
              className="commentInput"
              placeholder="Comment"
              type="text"
              value={content}
              onChange={updateContent}
            />
        </div>
        </div>
          <div>
            <button type="submit">Create Comment</button>
          </div>
      </form>
     }
    </div>
  );
};

export default CreateNewComment;
