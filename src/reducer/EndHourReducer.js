const END_HOUR = 'END_HOUR'

export const endHourAction = data => ({
    type: END_HOUR,
    data: data
})

const EndHourReducer = (state=false, action) => {
    switch (action.type){
        case END_HOUR :
            return {data: action.data}
        default :
            return state
    }
};

export default EndHourReducer;