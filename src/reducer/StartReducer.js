const START_RESULT = 'START_RESULT'

export const startAction = data => ({
    type: START_RESULT,
    data: data
})

const StartReducer = (state=false, action) => {
    switch (action.type){
        case START_RESULT :
            return {data: action.data}
        default :
            return state
    }
};

export default StartReducer;