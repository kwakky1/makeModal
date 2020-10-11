const END_MINUTE = 'END_MINUTE'

export const endMinuteAction = data => ({
    type: END_MINUTE,
    data: data
})

const EndMinuteReducer = (state='', action) => {
    switch (action.type){
        case END_MINUTE :
            return {data: action.data}
        default :
            return state
    }
};

export default EndMinuteReducer;