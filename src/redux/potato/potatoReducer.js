import { BUY_POTATO } from "./potatoTypes";

const initialState = {
    numOfPotatoes: 30
};

 const potatoReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_POTATO: return {
            ...state,
            numOfPotatoes: state.numOfPotatoes - 1
        };
        default: return state;
    }
}

export default potatoReducer;