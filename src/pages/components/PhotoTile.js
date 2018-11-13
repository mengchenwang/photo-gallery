import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class PhotoTile extends PureComponent {

    clickHandler = (e) => {
        e.preventDefault()
        this.props.onClick({
            url: this.props.photo.url,
            title: this.props.photo.title
        })
    }

    render() {
        const photo = this.props.photo
        return (
            <div className="photo-tile">
                <img className="thumbnail"
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    onClick={this.clickHandler}
                />
            </div>
        )
    }
}

PhotoTile.defaultProps = {
    photo: {},
    onClick: () => {}
}

PhotoTile.propTypes = {
    photo: PropTypes.object.isRequired,
    onClick: PropTypes.func
}