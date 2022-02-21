import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../../store/comments";

const PhraseComments = ({phraseId}) => {
    const dispatch = useDispatch();
    console.log(phraseId)



    useEffect(() => {
        dispatch(getAllComments());
      }, [dispatch]);


    const user = useSelector((state) => state.session.user);



    const comments = useSelector((state) => {
        // console.log(state.comments, "HELLLOOOOO")
       const commentArray = Object.values(state.comments);
       console.log(commentArray)
       console.log(commentArray.content)
       const onlyPhraseComments = commentArray.filter(comment=> comment.phrase_id == phraseId)
       console.log(onlyPhraseComments)

       if(onlyPhraseComments){
         return onlyPhraseComments
       }
      });
      console.log(comments)


      return (
        <div className="commentsContainer">

            <h1 className="commentsHeader">All comments</h1>

          {comments?.map((comment) => {
            return (
                <h1>{comment.content}</h1>
            );
          })}

        </div>
      );


}


export default PhraseComments
