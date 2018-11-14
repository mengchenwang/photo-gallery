import React from 'react'
import { shallow } from 'enzyme'
import PhotoModal from './PhotoModal'

describe('PhotoModal', () => {
    let wrapper
    const clickHandlerSpy = jest.fn()
    const photo = {
        url: "url",
        title: "title"
    }
    
    beforeEach(() => {
        clickHandlerSpy.mockReset()
        wrapper = shallow(<PhotoModal photo={photo} onClick={clickHandlerSpy} />)
    })

    it('should render the modal correctly', () => {
        expect(wrapper.find('.photo-title').text()).toEqual(photo.title)
        expect(wrapper.find('img').props().src).toEqual(photo.url)
        expect(wrapper.find('img').props().alt).toEqual(photo.title)
    })

    it('should trigger click event when clicked', () => {
        wrapper.find('.photo-modal').simulate('click', { preventDefault: () => {} })
        expect(clickHandlerSpy).toHaveBeenCalledTimes(1)
    })
})