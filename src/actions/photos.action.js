import getConfig from '../config/config'
import { fromJS } from 'immutable'

export const SET_PHOTOS = "SET_PHOTOS"

const config = getConfig()

export function setPhotos(photos) {
    return {
        type: SET_PHOTOS,
        photos
    }
}

export function fetchPhotos() {
    return dispatch => {
        return fetch(config.photoAPIUrl)
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            })
            .then((data) => {
                dispatch(setPhotos(fromJS(data)))
            })
    }
}