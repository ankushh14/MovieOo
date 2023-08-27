const initialState = {
    theme : "light",
}

const themeReduceer = (state = initialState, action)=>{
    if(action.type === 'change_Theme'){
        return state.theme = action.payload;
    }
    else{
        return state;
    }
}

export default themeReduceer;