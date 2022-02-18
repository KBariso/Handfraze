// import { getAllCategoryPhrases } from "../../store/phrases";
import { getAllCategories } from "../../store/categories";
import { getAllPhrases } from "../../store/phrases";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";


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


    const [selectedPhrase, setSelectedPhrase] = useState(false)
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
            <h1 onClick={(e) => setSelectedPhrase(false)}>Categories </h1>
                <div>
                    {categories.map((category) => {
                        return (
                            <div>
                                {!selectedPhrase && <h1 id={category.id} onClick={(e) => setSelectedPhrase(category.id)}>{category.title}</h1> }
                            </div>
                        )
                    })}
                </div>
                    <div>
                        {phrases.map((phrase) => {
                            if (selectedPhrase === phrase.category_id){
                                return (
                                    <NavLink to={`/phrases/${phrase.id}`} onClick={(e) => setSelectedPhrase(false)}>
                                        <div>
                                           <h1>{phrase.title}</h1>
                                        </div>
                                    </NavLink>
                                )
                            }
                         })
                        }
                    </div>
        </>
    )
}

export default AllCategories;
