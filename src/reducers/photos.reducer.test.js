import { photos as photosReducer } from './photos.reducer'
import { setPhotos } from '../actions/photos.action'
import { fromJS } from 'immutable'

describe('photos reducer', () => {
    let oldState

    beforeEach(() => {
        oldState = fromJS({photos: [{title: 'photo1'}, {title: 'photo2'}]})
    })

    it('should return the old state with unknown action', () => {
        const unknownAction = {
            type: "UNKNOWN_ACTION",
            photos: []
        }
        const newState = photosReducer(oldState, unknownAction)
        expect(newState).toBe(oldState)
    })

    it('should return a new state with SET_PHOTOS action', () => {
        const newPhotos = fromJS({photos: [{title: 'photo1'}]})
        const newState = photosReducer(oldState, setPhotos(newPhotos))
        expect(newState).toEqual(fromJS(newPhotos))
    })
})