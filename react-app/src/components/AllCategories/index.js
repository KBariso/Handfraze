import { getAllCategories } from "../../store/categories";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './AllCategories.css'


const AllCategories = ({phraseProp}) => {
    const dispatch = useDispatch()
    const categoriesObj = useSelector((state) => state.categories)
    const phrases = Object.values(phraseProp)

    const categories = Object.values(categoriesObj)

    const [selectedPhrase, setSelectedPhrase] = useState(1)



    useEffect(() => {
       dispatch(getAllCategories());
    }, [dispatch]);
    return (
        <>
            <div className="CategoriesandPhrasesContainer">
                <div>

                    <h3 className="CategoriesHeader" onClick={(e) => setSelectedPhrase()}>ASL Categories</h3>
                    <div className="CategoryContainer">
                            {categories.map((category) => {
                            return (
                                <div>
                                    {<button tabIndex="1" className="CategoryName" id={category.id} onClick={(e) => setSelectedPhrase(category.id)}><p>{category.title}</p></button> }
                                </div>
                            )
                        })}

                        </div>
                </div>

                    <div>
                        <div>

                        <h3 className="PhrasesHeader"> Available Phrases</h3>
                        <div className="PhrasesContainer">

                            {phrases.map((phrase) => {
                                if (selectedPhrase === phrase.category_id){
                                    return (
                                        <NavLink className="PhraseNameLink" to={`/phrases/${phrase.id}`}>
                                            <div className="PhraseNameContainer">
                                            <p className="PhraseName">{phrase.title}</p>
                                            </div>
                                        </NavLink>

                                    )
                                }
                            })}
                        </div>
                        </div>

                    </div>
                </div>
        </>
    )
}

export default AllCategories;
