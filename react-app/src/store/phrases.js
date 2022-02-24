const GET_ALL_PHRASES = "phrases/GET_ALL_PHRASES"
const GET_ONE_PHRASE = "phrases/GET_ONE_PHRASE"
const CREATE_NEW_PHRASE = "phrases/CREATE_NEW_PHRASE"
const EDIT_ONE_PHRASE = "phrases/EDIT_ONE_PHRASE"
const DELETE_ONE_PHRASE = "phrases/DELETE_ONE_PHRASE"

// const GET_CATEGORY_PHRASES = "phrases/GET_CATEGORY_PHRASES"

// const categoryPhrase = (phrases) => ({
//     type:GET_CATEGORY_PHRASES,
//     phrases
// })

// export const getAllCategoryPhrases = () => async (dispatch) => {
//     const res = await fetch(`/api/phrases/`)
//     if (res.ok) {
//         const phrases = await res.json();
//         dispatch(categoryPhrase(phrases))
//     }
// }





const allPhrases = (phrases) => ({
    type: GET_ALL_PHRASES,
    phrases
})

export const getAllPhrases = () => async (dispatch) => {
    const res = await fetch(`/api/phrases/`)
    if (res.ok) {
        const phrases = await res.json();
        dispatch(allPhrases(phrases))
    }
}



const singlePhrase = (phrase) => ({
    type:GET_ONE_PHRASE,
    phrase
})

export const getOnePhrase = (phraseId) => async (dispatch) => {
    const res = await fetch(`/api/phrases/${phraseId}`);
    if(res.ok){
        const phrase = await res.json();
        dispatch(singlePhrase(phrase))
    }
}



const newPhrase = (phrase) => ({
    type: CREATE_NEW_PHRASE,
    phrase
})

export const createPhrase = (phrase) => async (dispatch) => {
    const res = await fetch(`/api/phrases/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(phrase),
    });
    const data = await res.json();
    if (data.errors) {
        return data
    }
    if (res.ok) {
        dispatch(newPhrase(data));
        return data
    }
}

const editPhrase = (phrase) => ({
    type: EDIT_ONE_PHRASE,
    phrase
})

export const editOnePhrase = ({phraseId, title, description, media_url, category_id}) => async (dispatch) => {
    const res = await fetch(`/api/phrases/${phraseId}/edit`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({phraseId, title, description, media_url, category_id})
    })
    if (res.ok) {
        const editedPhrase = await res.json();
        dispatch(editPhrase(editedPhrase));
    }
}

const deletePhrase = (phraseId) => {
    return {
        type: DELETE_ONE_PHRASE,
        phraseId
    }
}

export const deleteOnePhrase = (phraseId) => async (dispatch) => {
    const res = await fetch(`/api/phrases/${phraseId}`, {
        method: "DELETE",
    });
    if (res.ok) {
        dispatch(deletePhrase(phraseId))
    }
}



const initialState = {};
const phraseReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_PHRASES:
            action.phrases.forEach(phrase => {
                newState[phrase.id] = phrase;
            })
            return {...state, ...newState}
        // case GET_CATEGORY_PHRASES:
        //     action.phrases.forEach(phrase => {
        //         newState[phrase.id] = phrase;
        //     })
        //     return {...state, ...newState}
        case GET_ONE_PHRASE:
            return {...state,...action.phrase}
        case CREATE_NEW_PHRASE:
            return {...state, [action.phrase.id]: action.phrase}
        case EDIT_ONE_PHRASE:
            return {...state, [action.phrase.id]: action.phrase}
        case DELETE_ONE_PHRASE:
            newState = {...state};
            delete newState[action.phraseId];
            return {newState};
        default: {
            return state;
        }
    }
}

export default phraseReducer;
