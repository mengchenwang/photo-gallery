import fetchMock from 'fetch-mock'
import { fetchPhotos, SET_PHOTOS } from './photos.action'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import getConfig from '../config/config'
import { fromJS } from 'immutable'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const config = getConfig()

describe('store initialisation', () => {
    let store

    beforeEach(() => {
        fetchMock.reset()
        fetchMock.restore()
        store = mockStore({ photos: [] })
    })

    it('should fetch photos and trigger SET_PHOTOS action', () => {
        const fetchBody = [{title: 'photo1'}, {title: 'photo2'}]
        fetchMock.getOnce(config.photoAPIUrl, { body: fetchBody, headers: { 'content-type': 'application/json' } })

        const expectedActions = [
            { type: SET_PHOTOS, photos: fromJS(fetchBody) }
        ]

        return store.dispatch(fetchPhotos()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('should throw an exception if there is an error fetching data', () => {
        fetchMock.getOnce(config.photoAPIUrl, { status: 404 })
        return store.dispatch(fetchPhotos()).catch((e) => {
            expect(e.message).toEqual("Not Found")
        })
    })
})