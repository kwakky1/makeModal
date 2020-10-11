const START_HOUR = 'START_HOUR'

export const startHourAction = data => ({
    type: START_HOUR,
    data: data
})

const StartHourReducer = (state='', action) => {
    switch (action.type){
        case START_HOUR :
            return {data: action.data}
        default :
            return state
    }
};

export default StartHourReducer;