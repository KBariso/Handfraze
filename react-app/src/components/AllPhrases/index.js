import { getAllPhrases } from "../../store/phrases"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const AllPhrases = () => {
    const dispatch = useDispatch();
    const phraseObj = useSelector((state) => state.phrases)
    // console.log(phraseObj, "I AM THE PHRASE OBJ")

    const phrase = Object.values(phraseObj)
    // console.log(phrase)

    useEffect(() => {
        dispatch(getAllPhrases());
    }, [dispatch]);



    return (
        <>
            <div>
                {phrase.map((phrase) => {
                 return (
                     <Link to={`/phrases/${phrase.id}`}>
                         <div>
                            <h1>{phrase.title}</h1>
                            {/* <h3>{phrase.description}</h3> */}
                            {/* <iframe width="320" height="240" src={phrase.media_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                         </div>
                     </Link>

                 )
                })}
            </div>
            {/* <div>
                {phrase.map((phrase) => {
                return <h3>{phrase.description}</h3>
                })}
            </div> */}
        </>
    )




}

export default AllPhrases
