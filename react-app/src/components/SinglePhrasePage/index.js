import { getOnePhrase } from "../../store/phrases"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

const SinglePhrasePage = () => {
    const dispatch = useDispatch();
    const {phraseId} = useParams();
    console.log(phraseId)

    const phraseObj = useSelector(state => state.phrases)
    console.log(phraseObj)

    // const phrase = Object.values(phraseObj)
    // console.log(phrase, "fdsjkgfbdsgrs")

    useEffect(() => {
        dispatch(getOnePhrase(phraseId));
    }, [dispatch, phraseId]);


    return (
        <>
            <h1>{phraseObj.title}</h1>
            <h1>{phraseObj.description}</h1>
            <iframe width="640" height="480" src={phraseObj.media_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    )




}

export default SinglePhrasePage
