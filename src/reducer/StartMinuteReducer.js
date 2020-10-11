const START_MINUTE = 'START_MINUTE'

export const startMinuteAction = data => ({
    type: START_MINUTE,
    data: data
})

const StartMinuteReducer = (state='', action) => {
    switch (action.type){
        case START_MINUTE :
            return {data: action.data}
        default :
            return state
    }
};

export default StartMinuteReducer;