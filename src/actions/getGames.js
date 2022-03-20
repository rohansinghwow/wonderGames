import {fullAPI} from '../api'
import axios from 'axios'

export const loadGames = () => async(dispatch) => {
    const popularData = await axios.get(fullAPI())
    dispatch(
        {
            type : "GET_GAMES",
            payload: {
                popular: popularData,
            }
        }
    )
}
