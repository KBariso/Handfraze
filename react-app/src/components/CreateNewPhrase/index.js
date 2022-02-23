import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createPhrase } from "../../store/phrases";
import { getAllCategories } from "../../store/categories";

const CreateNewPhrase = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user?.id);
  const userId = user;
//   console.log(userId)

  const categoriesObj = useSelector((state) => state.categories);
  console.log(categoriesObj);
  const categories = Object.values(categoriesObj);
  // console.log(categories[0].id);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [category, setCategory] = useState([]);
  const [errors, setErrors] = useState([]);

    // if (!user) return <Redirect to="/" />;

  const updateTitle = (e) => setTitle(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateMedia = (e) => setMedia(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value)

  // if (!user) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
        user_id:userId,
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
    } else if (!category.length) {
      setErrors(["Please select a category"]);
    } else {
      setErrors([]);

    let createdPhrase = await dispatch(createPhrase(payload))
    setTitle("")
    setDescription("")
    setMedia("")
      if (createdPhrase) {
        history.push(`/`);
      }
    }
  };


  return (
    <>
      <h1>CREATE FORM</h1>
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
          onChange={updateTitle}
        />
        <textarea
          placeholder="Description"
          type="text"
          value={description}
          onChange={updateDescription}
        />
        <input
          placeholder="Media"
          type="text"
          value={media}
          onChange={updateMedia}
        />
        {categoriesObj &&
          <select onChange={updateCategory} >
             <option value="none" selected disabled hidden>Select Category</option>
              {categories.map((category) => {
                  return <option value={category.id}>{category.title}</option>
              })}
          </select>
        }


        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateNewPhrase;
