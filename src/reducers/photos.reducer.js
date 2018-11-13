import { SET_PHOTOS } from '../actions/photos.action'
import { fromJS } from 'immutable'

export function photos(state = fromJS([]), action) {
    switch (action.type) {
        case SET_PHOTOS:
            return action.photos
        default:
            return state
    }
}