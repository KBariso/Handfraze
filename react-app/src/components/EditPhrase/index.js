import React, { useEffect,useState } from "react";
import {useSelector,  useDispatch} from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { editOnePhrase } from "../../store/phrases";
import { getOnePhrase } from "../../store/phrases";
import { getAllCategories } from "../../store/categories";
import { deleteOnePhrase } from "../../store/phrases";


const EditPhrase = ({phraseProp, hideForm}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { phraseId } = useParams()
    console.log(phraseId, "I AM THE PHRASEID!!!!!!!!!")
    console.log(phraseProp, "I AM THE PHRASEPROP!!!!")

    const categoriesObj = useSelector((state) => state.categories);
    console.log(categoriesObj[phraseProp.category_id]);
    const categories = Object.values(categoriesObj);

    const userCat = categories.filter(category => category !== categoriesObj[phraseProp.category_id])
    const userCatChoice = categories.filter(category => category === categoriesObj[phraseProp.category_id])
    console.log(userCat)
    console.log(categories)
    console.log(userCatChoice)


    // categoriesObj[phraseProp.category_id].title

    const user = useSelector(state => state.session.user);
    const userId = user?.id

    // const phraseObj = useSelector(state => state.phrases)
    // console.log(phraseObj.category_id)

    useEffect(() => {
        dispatch(getAllCategories());
      }, [dispatch]);


      useEffect(() => {

        if (phraseProp) {
            setTitle(phraseProp.title);
            setDescription(phraseProp.description)
            setMedia(phraseProp.media_url)
            setCategory([categoriesObj[phraseProp.category_id]])
            console.log("NOW HERE")
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

        let updatedPhrase = await dispatch(editOnePhrase(updatedPayload))

        if (!updatedPhrase) {
            dispatch(getOnePhrase(phraseId))
            hideForm();
            // history.push(`/phrases/${phraseId}`)
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
        <input
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Media"
          type="text"
          value={media}
          onChange={(e) => setMedia(e.target.value)}
        />
        {categoriesObj &&
            <select onChange={(e) => setCategory(e.target.value)} >
                {/* <option value={category.id} selected>{categoriesObj[phraseProp.category_id].title }</option> */}
                {userCatChoice?.map((category) => {
                    return <option value={category.id}>{category.title}</option>
                })}
                {userCat?.map((category) => {
                    return <option value={category.id}>{category.title}</option>
                })}
            </select>
        }


        <button type="submit">Save Changes</button>
        <button onClick={handleDelete}>Delete Phrase</button>
      </form>

        </>
    )


}

export default EditPhrase
