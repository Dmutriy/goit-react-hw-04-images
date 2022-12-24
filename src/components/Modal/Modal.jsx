import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalOverlay, OnModal } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onModalClick();
    }
  };

  onBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClick();
    }
  };

  render() {
    const { largeImage, alt } = this.props;

    return (
      <ModalOverlay onClick={this.onBackDropClick}>
        <OnModal>
          <img src={largeImage} alt={alt} />
        </OnModal>
      </ModalOverlay>
    );
  }
}

Modal.prototypes = {
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};
