import React from 'react'
import { shallow } from 'enzyme'
import PhotoTile from './PhotoTile'

describe('PhotoTile', () => {
    let wrapper
    const clickHandlerSpy = jest.fn()
    const photo = {
        thumbnailUrl: "thumbnailUrl",
        title: "title"
    }
    
    beforeEach(() => {
        clickHandlerSpy.mockReset()
        wrapper = shallow(<PhotoTile photo={photo} onClick={clickHandlerSpy} />)
    })

    it('should render the tile correctly', () => {
        expect(wrapper.find('img').props().src).toEqual(photo.thumbnailUrl)
        expect(wrapper.find('img').props().alt).toEqual(photo.title)
    })

    it('should trigger click event when clicked', () => {
        wrapper.find('.thumbnail').simulate('click', { preventDefault: () => {} })
        expect(clickHandlerSpy).toHaveBeenCalledTimes(1)
    })
})