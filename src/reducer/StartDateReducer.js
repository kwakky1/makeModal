const START_DATE = 'START_DATE'

export const startDateAction = data => ({
    type: START_DATE,
    data: data
})

const StartDateReducer = (state='', action) => {
    switch (action.type){
        case START_DATE :
            return {data: action.data}
        default :
            return state
    }
};

export default StartDateReducer;