
const initialState = {
    popularGames : [],
    upcomingGames : [],
    newGames : [],

}

export default function gamesReducer(state=initialState, action){
    switch(action.type){
        case "GET_GAMES":
                return {
                    ...state,
                    popularGames : action.payload.popular
                }
        default:
            return {
                ...state
            }
    }
}