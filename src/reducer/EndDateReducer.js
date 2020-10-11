const END_DATE = 'END_DATE'

export const endDateAction = data => ({
    type: END_DATE,
    data: data
})

const EndDateReducer = (state='', action) => {
    switch (action.type){
        case END_DATE :
            return {data: action.data}
        default :
            return state
    }
};

export default EndDateReducer;