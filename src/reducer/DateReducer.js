const DATE_RESULT = 'DATE_RESULT'

export const dateAction = data => ({
    type: DATE_RESULT,
    data: data
})

const DateReducer = (state=false, action) => {
    switch (action.type){
        case DATE_RESULT :
            return {data: action.data}
        default :
            return state
    }
};

export default DateReducer;