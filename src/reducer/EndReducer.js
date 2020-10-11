const END_RESULT = 'END_RESULT'

export const endAction = data => ({
    type: END_RESULT,
    data: data
})

const EndReducer = (state=false, action) => {
    switch (action.type){
        case END_RESULT :
            return {data: action.data}
        default :
            return state
    }
};

export default EndReducer;