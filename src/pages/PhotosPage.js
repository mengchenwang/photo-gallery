import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchPhotos } from '../actions/photos.action'
import { fromJS } from 'immutable'
import PhotoGallery from './components/PhotoGallery'

class PhotosPage extends PureComponent {
    componentDidMount() {
        this.props.fetchPhotos()
    }

    render() {
        return (
            <div className="photos-page">
                <PhotoGallery photos={this.props.photos.toJS()} />
            </div>
        )
    }
}

PhotosPage.defaultProps = {
    photos: fromJS([])
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPhotos: () => dispatch(fetchPhotos())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotosPage)