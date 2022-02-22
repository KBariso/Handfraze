import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../../store/comments";
import EditComment from "../EditComment";
import './AllPhraseComments.css'


const PhraseComments = ({phraseId, hideForm}) => {
    const dispatch = useDispatch();
    // console.log(phraseId)



    useEffect(() => {
        dispatch(getAllComments());
      }, [dispatch]);


    const user = useSelector((state) => state.session.user);


    const [edit, setEdit] = useState(false);


    const comments = useSelector((state) => {
        // console.log(state.comments, "HELLLOOOOO")
       const commentArray = Object.values(state.comments);
    //    console.log(commentArray)
    //    console.log(commentArray.content)
       const onlyPhraseComments = commentArray.filter(comment=> comment.phrase_id == phraseId)
    //    console.log(onlyPhraseComments)

       if(onlyPhraseComments){
        //  hideForm()
         return onlyPhraseComments
       }
      });
    //   console.log(comments)

      return (
        <div className="commentsContainer">

            <h1 className="commentsHeader">All comments</h1>
            {/* {!edit && <button onClick={() => setEdit(!edit)}>Edit Comment</button>} */}


          <div className="AllPhraseCommentsContainer">
            {comments?.map((comment) => {
              return (
               <EditComment hideForm={() => setEdit(false)} phraseProp={comment} />
              );
            })}
          </div>

        </div>

      );


}


export default PhraseComments
