import React from 'react'
import { mount } from 'enzyme'
import PhotoGallery from './PhotoGallery'
import getPhotosFixture from '../../fixtures/get_photos.json'

function getPhotos() {
    return getPhotosFixture
}

describe('PhotoGallery', () => {
    let wrapper
    
    beforeEach(() => {
        wrapper = mount(<PhotoGallery photos={getPhotos()} />)
    })

    it('should render the gallery correctly', () => {
        expect(wrapper.find('PhotoTile').length).toEqual(3)
        expect(wrapper.find('PhotoTile').at(0).props().photo.id).toEqual(1)
    })

    it('should render modal when a photo is clicked', () => {
        expect(wrapper.find('PhotoModal').length).toEqual(0)
        wrapper.find('img').at(0).simulate('click')
        expect(wrapper.find('PhotoModal').length).toEqual(1)
        expect(wrapper.find('PhotoModal').props().photo.title).toEqual("title1")
    })

    it('should remove modal when it is clicked', () => {
        wrapper.find('img').at(0).simulate('click')
        wrapper.find('.photo-modal').simulate('click')
        expect(wrapper.find('PhotoModal').length).toEqual(0)
    })

})