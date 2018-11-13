import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PhotoTile from './PhotoTile'
import PhotoModal from './PhotoModal'

export default class PhotoGallery extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            modalPhoto: {}
        }
    }

    photoClickHandler = (photo) => {
        this.setState({
            showModal: true,
            modalPhoto: photo
        })
    }

    modalClickHandler = () => {
        this.setState({
            showModal: false,
            modalPhoto: {}
        })
    }

    render() {
        return (
            <div className="photo-gallery">
                <h1>Photo Gallery</h1>
                {this.state.showModal && 
                    <PhotoModal 
                        photo={this.state.modalPhoto} 
                        onClick={this.modalClickHandler} />}
                {this.props.photos.map((photo, index) => 
                    <PhotoTile 
                        photo={photo}
                        onClick={this.photoClickHandler}
                        key={index} />)}
            </div>
        )
    }
}

PhotoGallery.defaultProps = {
    photos: []
}

PhotoGallery.propTypes = {
    photos: PropTypes.array.isRequired
}