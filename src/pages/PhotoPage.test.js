import React from 'react'
import { mount } from 'enzyme'
import store from '../store/store'
import { Provider } from 'react-redux'
import PhotosPage from './PhotosPage'
import fetchMock from 'fetch-mock'
import { fromJS } from 'immutable'
import getPhotosFixture from '../fixtures/get_photos.json'
import getConfig from '../config/config'

const config = getConfig()

function getPhotos() {
    return getPhotosFixture
}

describe('PhotosPage', () => {
    beforeEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('should get photos from the store', (done) => {
        const fetchBody = getPhotos()
        fetchMock.getOnce(config.photoAPIUrl, { body: fetchBody, headers: { 'content-type': 'application/json' } })
        const wrapper = mount(<Provider store={store}><PhotosPage /></Provider>).find('PhotosPage')
        setTimeout(() => {
            expect(wrapper.instance().props.photos).toEqual(fromJS(fetchBody))
            done()
        })
    })
})