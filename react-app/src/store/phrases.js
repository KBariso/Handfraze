const GET_ALL_PHRASES = "phrases/GET_ALL_PHRASES"
const GET_ONE_PHRASE = "phrases/GET_ONE_PHRASE"


const allPhrases = (phrases) => ({
    type: GET_ALL_PHRASES,
    phrases
})

export const getAllPhrases = () => async (dispatch) => {
    const res = await fetch(`/api/phrases`)
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





const initialState = {};
const phraseReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_PHRASES:
            action.phrases.forEach(phrase => {
                newState[phrase.id] = phrase;
            })
            return {...state, ...newState}
        case GET_ONE_PHRASE:
            return {
                ...state,
                ...action.phrase
            }
        default: {
            return state;
        }
    }
}

export default phraseReducer;
