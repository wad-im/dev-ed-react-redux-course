import axios from 'axios'
import {gamesDetailURL, gamesScreenshotURL} from '../api'

export const loadDetail = (id) => async (dispatch)=>{
    
    dispatch({
        type: "LOADING_DETAIL"
    })
    const detailData = await axios.get(gamesDetailURL(id))
    const screenshotData = await axios.get(gamesScreenshotURL(id))

    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screen: screenshotData.data
        },
    })
}



