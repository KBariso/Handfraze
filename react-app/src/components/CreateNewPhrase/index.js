import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createPhrase } from "../../store/phrases";
import { getAllCategories } from "../../store/categories";
import logo from './images/CREATE.png'
import logo1 from './images/Title.PNG'
import logo2 from './images/Description.PNG'
import logo3 from './images/Media.PNG'
import logo4 from './images/Category.PNG'
import './CreateNewPhrase.css'

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
    } else if (!media.length) {
      setMedia("https://play-lh.googleusercontent.com/4UPSnZVYh4pEeD85XXUAi3Lhdfuw54rGD2kcy--BA8t86Zuua1NpLQxUeVS7QzUZ91g");
    } else {

      setErrors([]);

    let createdPhrase = await dispatch(createPhrase(payload))
    // console.log(createPhrase)
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
    <div className="CreateLogoContainer">
      <img className="CreateLogo" src={logo}/>
      <h1 className="CreateAPhraseHeader">Create a Phrase</h1>
    </div>
    <div className="AllInputsContainer">

      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="PhraseInputsContainer">
          {errors.length > 0 && (
            <ul className="errors">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          <div className="CreateTitleContainer">
          <img className="TitleLogo" src={logo1}/>
            <input className="CreateTitle"
              placeholder="Title"
              type="text"
              value={title}
              onChange={updateTitle}
            />
          </div>
          <div className="CreateDescriptionContainer">
          <img className="DescriptionLogo" src={logo2}/>
            <textarea className="CreateDescription"
              placeholder="Description"
              type="text"
              value={description}
              onChange={updateDescription}
            />
          </div>
                <div className="SubmitCreateContainer">
                    <button className="SubmitCreate" type="submit">Submit</button>
                </div>


            </div>
          <div className="CreateCategoriesContainer">

          <div className="CreateMediaContainer">
          <img className="MediaLogo" src={logo3}/>
            <input className="CreateMedia"
              placeholder="Media"
              type="text"
              value={media}
              onChange={updateMedia}
            />
          </div>
          <img className="CategoryLogo" src={logo4}/>
            {categoriesObj &&
              <select onChange={updateCategory} >
                 <option value="none" selected disabled hidden>Select Category</option>
                  {categories.map((category) => {
                      return <option value={category.id}>{category.title}</option>
                  })}
              </select>
            }
          </div>


      </form>
    </div>
    </>
  );
};

export default CreateNewPhrase;
