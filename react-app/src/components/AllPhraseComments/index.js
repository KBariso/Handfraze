import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../../store/comments";
import EditComment from "../EditComment";
import './AllPhraseComments.css'


const PhraseComments = ({phraseId, hideForm}) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllComments());
      }, [dispatch]);


    const user = useSelector((state) => state.session.user);


    const [edit, setEdit] = useState(false);


    const comments = useSelector((state) => {

       const commentArray = Object.values(state.comments);

       const onlyPhraseComments = commentArray.filter(comment=> comment.phrase_id == phraseId)


       if(onlyPhraseComments){

         return onlyPhraseComments
       }
      });


    let sessionLinks;

    if (comments.length === 0) {
      sessionLinks = (
        <>
        </>
      )
    } else {
      sessionLinks = (
        <div className="commentsContainer">

            <h2 className="commentsHeader">All comments</h2>
            {/* {!edit && <button onClick={() => setEdit(!edit)}>Edit Comment</button>} */}


          <div className="AllPhraseCommentsContainer">
            {comments?.map((comment) => {
              return (
               <EditComment hideForm={() => setEdit(false)} phraseProp={comment} />
              );
            })}
          </div>
        </div>
      )
    }



      return (
        <>{sessionLinks}</>
      );


}


export default PhraseComments
