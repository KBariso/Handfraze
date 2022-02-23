// import { getAllCategoryPhrases } from "../../store/phrases";
import { getAllCategories } from "../../store/categories";
import { getAllPhrases } from "../../store/phrases";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import './AllCategories.css'


const AllCategories = ({phraseProp}) => {
    const dispatch = useDispatch()
    const categoriesObj = useSelector((state) => state.categories)
    // console.log(categoriesObj)
    console.log(phraseProp, "I AM THE PHRASEPROP")
    const phrases = Object.values(phraseProp)
    // console.log(phrases, "I AM THE PHRASES")
    const categories = Object.values(categoriesObj)
    // console.log(categories, "I AM THE CATEGORIES")
    // const categoryTitles = categories.filter((category) => category.id === )


    const [selectedPhrase, setSelectedPhrase] = useState(1)
    console.log(selectedPhrase)






    // useEffect(() => {
    //     dispatch(getAllCategoryPhrases());
    //  }, [dispatch]);

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
                                            <h3 className="PhraseName">{phrase.title}</h3>
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
