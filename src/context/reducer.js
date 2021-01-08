
export default function Reducer (state, action) {
    switch (action.type) {
        case 'new_data':
            return {
                ...state,
                data: [...action.payload]
            }

        case 'url':
            return {
                ...state,
                url: action.payload
            } 

        case 'sort': 
            return sortArray(state, action.payload)

        case 'add':
            return {
                ...state,
                data: [action.payload, ...state.data]
            }
        
        case 'open_card':
            return {
                ...state,
                card: true
            }

        default:
            return state
    }
}


function sortArray(state, el) {
    let newData
    let sort
    if(state.sort === 'desc' || state.sort === '') {
        newData = [...state.data].sort((a, b) => {
            if(a[el] > b[el]){
                return 1
            }
            if(a[el] < b[el]){
                return -1
            }
            return 0
        })
        sort = 'asc'
    }
    if(state.sort === 'asc') {
        newData = [...state.data].sort((a, b) => {
            if(a[el] < b[el]){
                return 1
            }
            if(a[el] > b[el]){
                return -1
            }
            return 0
        })
        sort = 'desc'
    }
    return {
        ...state,
        data: newData,
        sort: sort
    }
}
