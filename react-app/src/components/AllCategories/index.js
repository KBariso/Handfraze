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
    console.log(categoriesObj)
    console.log(phraseProp.category_id, "I AM THE PHRASEPROP")
    const phrases = Object.values(phraseProp)
    console.log(phrases, "I AM THE PHRASES")
    const categories = Object.values(categoriesObj)
    console.log(categories, "I AM THE CATEGORIES")
    // const categoryTitles = categories.filter((category) => category.id === )


    const [selectedPhrase, setSelectedPhrase] = useState(1)
    console.log(selectedPhrase)



    const handleClick = (e) => {
        dispatch(getAllPhrases());


    }


    // useEffect(() => {
    //     dispatch(getAllCategoryPhrases());
    //  }, [dispatch]);

    useEffect(() => {
       dispatch(getAllCategories());
    }, [dispatch]);
    return (
        <>
            <div className="CategoriesandPhrasesContainer">
                <div className="CategoryContainer">
                <h1 className="CategoriesHeader" onClick={(e) => setSelectedPhrase()}>ASL Categories</h1>
                        {categories.map((category) => {
                        return (
                            <div>
                                {<h1 tabindex="1" className="CategoryName" id={category.id} onClick={(e) => setSelectedPhrase(category.id)}>{category.title}</h1> }
                            </div>
                        )
                    })}

                    </div>

                    <div  className="PhrasesContainer">
                        <h1>Phrases Available</h1>
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
        </>
    )
}

export default AllCategories;
