import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createPhrase } from "../../store/phrases";
import { getAllCategories } from "../../store/categories";


const CreateNewPhrase = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user.id)
    const userId = user;
    console.log(userId)

    const categoriesObj = useSelector(state => state.categories)
    console.log(categoriesObj)
    const categories = Object.values(categoriesObj)
    console.log(categories)

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [media, setMedia] = useState("");
    // const [category, setCategory] = useState([])
    const [errors, setErrors] = useState([]);


    const updateTitle = (e) => setTitle(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateMedia = (e) => setMedia(e.target.value)
    // const updateCategory = (e) => setCategory(e.target.value)




    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return;

        const payload = {
            user_id:userId,
            description,
            media_url:media,
            title,
            category_id: 1
        };
        let createdPhrase = await dispatch(createPhrase(payload))
          if (createdPhrase) {
            history.push("/")
          }
      };

    return (
        <>
        <h1>CREATE FORM</h1>
            <form onSubmit={handleSubmit}>
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
                    onChange={updateTitle}
                />
                <textarea
                    className='newTextArea'
                    placeholder="Description"
                    type="text"
                    value={description}
                    onChange={updateDescription}
                />
                <input
                    className='newProjectsinputLogin'
                    placeholder="Media"
                    type="text"
                    value={media}
                    onChange={updateMedia}
                />
                {/* <select >
                    <option value="A">{categories[0].title}</option>
                    <option value="B">{categories[1].title}</option>
                    <option value="C">{categories[2].title}</option>
                    <option value="C">{categories[3].title}</option>
                    <option value="C">{categories[4].title}</option>
                </select> */}

                <button type="submit">Submit</button>
            </form>

        </>
    )


}


export default CreateNewPhrase
