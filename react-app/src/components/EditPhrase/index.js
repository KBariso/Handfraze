import React, { useEffect,useState } from "react";
import {useSelector,  useDispatch} from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { editOnePhrase } from "../../store/phrases";
import { getOnePhrase } from "../../store/phrases";
import { getAllCategories } from "../../store/categories";
import { deleteOnePhrase } from "../../store/phrases";
import './EditPhrase.css'


const EditPhrase = ({phraseProp, hideForm}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { phraseId } = useParams()


    const categoriesObj = useSelector((state) => state.categories);

    const categories = Object.values(categoriesObj);

    const userCat = categories.filter(category => category !== categoriesObj[phraseProp.category_id])
    const userCatChoice = categories.filter(category => category === categoriesObj[phraseProp.category_id])





    const user = useSelector(state => state.session.user);
    const userId = user?.id


    useEffect(() => {
        dispatch(getAllCategories());
      }, [dispatch]);


      useEffect(() => {

        if (phraseProp) {
            setTitle(phraseProp.title);
            setDescription(phraseProp.description)
            setMedia(phraseProp.media_url)
            setCategory([phraseProp?.category_id])
        }
    }, [phraseProp])



    useEffect(() => {
        dispatch(getOnePhrase(phraseId));
    }, [dispatch, phraseId]);



    const [title, setTitle] = useState(phraseProp.title);
    const [description, setDescription] = useState(phraseProp.description);
    const [media, setMedia] = useState(phraseProp.media_url);
    const [category, setCategory] = useState([phraseProp?.category_id]);
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedPayload = {
            phraseId,
            title,
            description,
            media_url:media,
            category_id: category
        };

        if (!title) {
          setErrors(["Please enter a title"]);
        } else if (title.length < 2) {
          setErrors(["Your title length is too short"]);
        } else if (!description) {
          setErrors(["Please enter a description"]);
        } else if (description.length <= 3) {
          setErrors(["Your description length is too short"]);
        } else if (description.length >= 255) {
          setErrors(["Your description is too long!"]);
        }else if (!category.length) {
          setErrors(["Please select a category"]);
        } else if (!media.length) {
          setErrors(["You have no video!"]);
        } else {
          setErrors([]);

        let updatedPhrase = await dispatch(editOnePhrase(updatedPayload))

        if (!updatedPhrase) {
            dispatch(getOnePhrase(phraseId))
            hideForm();
            // history.push(`/phrases/${phraseId}`)
        }
      }

    }


    const handleDelete = async (e) => {
        e.preventDefault();
        let deletedPhrase = await dispatch(deleteOnePhrase(phraseId))

        if (!deletedPhrase) {
            history.push('/')
            window.location.reload();
            // dispatch(getAllCategories());
        }

    }


    return (
        <>
        <h1>
            EDIT PHRASE
        </h1>
        <form className="form" onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <input className="EditPhraseTitle"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="EditPhraseDescriptionContainer" >
        <textarea className="EditPhraseDescription"
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </div>

        <input className="EditPhraseMedia"
          placeholder="Media"
          type="text"
          value={media}
          onChange={(e) => setMedia(e.target.value)}
        />
        <div className="EditPhraseCategoryContainer">
        {categoriesObj &&
            <select onChange={(e) => setCategory(e.target.value)} >
                {/* <option value={category.id} selected>{categoriesObj[phraseProp.category_id].title }</option> */}
                {userCatChoice?.map((category) => {
                    return <option  value={category.id}>{category.title}</option>
                })}
                {userCat?.map((category) => {
                    return <option value={category.id}>{category.title}</option>
                })}
            </select>
        }
        </div>

        <div className="EditDeletePhraseBttns">
          <button type="submit">Save Changes</button>
          <button onClick={handleDelete}>Delete Phrase</button>
        </div>

      </form>

        </>
    )


}

export default EditPhrase
