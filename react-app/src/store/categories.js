const GET_ALL_CATEGORIES = "categories/GET_ALL_CATEGORIES"


const allCategories = (category) => ({
    type: GET_ALL_CATEGORIES,
    category
})

export const getAllCategories = () => async (dispatch) => {
    const res = await fetch(`/api/categories`)
    if (res.ok) {
        const category = await res.json();
        dispatch(allCategories(category))
    }
}



const initialState = {};
const categoryReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            action.category.forEach(category => {
                newState[category.id] = category;
            })
            return {...state, ...newState}
        default: {
            return state;
        }
    }
}

export default categoryReducer;
