import { getOnePhrase } from "../../store/phrases";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import EditPhrase from "../EditPhrase";
import PhraseComments from "../AllPhraseComments";
import CreateNewComment from "../CreateCommentForm";
import { getAllCategories } from "../../store/categories";
import { getAllPhrases } from "../../store/phrases";
import "./SinglePhrasePage.css";

const SinglePhrasePage = () => {
  const dispatch = useDispatch();
  const { phraseId } = useParams();
  console.log(phraseId, "I AM THE PHRASE ID");
  const categoriesObj = useSelector((state) => state.categories)
  const categories = Object.values(categoriesObj)

  const user = useSelector((state) => state.session.user);
  const userId = user?.id;

  const phraseObj = useSelector((state) => state.phrases);
  const phrases = Object.values(phraseObj)
  console.log(phraseObj.phraseId)
  console.log(phrases)
  const [edit, setEdit] = useState(false);


  const usersPhrase = userId == phraseObj.user_id
  console.log(usersPhrase, "I AM THE USERS PHRASE")

  const [selectedPhrase, setSelectedPhrase] = useState(1)

  useEffect(() => {
    dispatch(getOnePhrase(phraseId));
  }, [dispatch, phraseId]);

  useEffect(() => {
    dispatch(getAllCategories());
 }, [dispatch]);

 useEffect(() => {
  dispatch(getAllPhrases());
}, [dispatch]);

  return (
    <>
    <div className="SinglePhraseContainer">
      <div className="PhraseandCommentsContainer">
        <h1 className="PhraseTitle">{phraseObj.title}</h1>
        <iframe
          width="640"
          height="480"
          src={phraseObj.media_url}
          alt="ASL"
          onError={event => {
            event.target.src = "https://play-lh.googleusercontent.com/4UPSnZVYh4pEeD85XXUAi3Lhdfuw54rGD2kcy--BA8t86Zuua1NpLQxUeVS7QzUZ91g"
            event.onerror = null
          }}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="EditPhraseButton">
          { (usersPhrase && !edit) && <button className="EditPhrase" onClick={() => setEdit(!edit)}>Edit Phrase</button>}
        </div>
        <h1 className="PhraseDescription">{phraseObj.description}</h1>
        <div>
        </div>
        <div>
          {edit && (
            <EditPhrase
              key={phraseId.key}
              phraseProp={phraseObj}
              hideForm={() => setEdit(false)}
            />
          )}
        </div>
        <div>
          <PhraseComments phraseId={phraseId} />
        </div>
        <div>
          <CreateNewComment />
        </div>
      </div>
      <div className="CategoriesandPhrasesContainer2">
                <div>

                    <h3 className="CategoriesHeader" onClick={(e) => setSelectedPhrase()}>ASL Categories</h3>
                    <div className="CategoryContainer">
                            {categories.map((category) => {
                            return (
                                <div>
                                    {<button tabIndex="1" className="CategoryName" id={category.id} onClick={(e) => setSelectedPhrase(category.id)} >{category.title}</button> }
                                </div>
                            )
                        })}

                        </div>
                </div>

                    <div>
                        <div>

                        <h3 className="PhrasesHeader">Phrases Available</h3>
                        <div className="PhrasesContainer">

                            {phrases.map((phrase) => {
                                if (selectedPhrase === phrase.category_id){
                                    return (
                                        <NavLink to={`/phrases/${phrase.id}`}>
                                            <div>
                                            <h1 className="PhraseName">{phrase.title}</h1>
                                            </div>

                                        </NavLink>

                                    )
                                }
                            })}
                        </div>
                        </div>

                    </div>
                </div>
        </div>
        </>
  );
};

export default SinglePhrasePage;
