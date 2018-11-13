import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class PhotoModal extends PureComponent {

    clickHandler = (e) => {
        e.preventDefault()
        this.props.onClick()
    }

    render() {
        return (
            <div className="photo-modal"
                onClick={this.clickHandler}>
                <div className="full-size-photo">
                    <img
                        src={this.props.photo.url}
                        alt={this.props.photo.title}
                    />
                    <h3 className="photo-title">{this.props.photo.title}</h3>
                </div>
            </div>
        )
    }
}

PhotoModal.defaultProps = {
    photo: "",
    onClick: () => {}
}

PhotoModal.propTypes = {
    photo: PropTypes.object.isRequired,
    onClick: PropTypes.func
}