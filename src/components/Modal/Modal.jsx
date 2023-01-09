import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalOverlay, OnModal } from './Modal.styled';

export function Modal({ onModalClick, alt, largeImage }) {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClick();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onModalClick]);

  const onBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onModalClick();
    }
  };

  return (
    <ModalOverlay onClick={onBackDropClick}>
      <OnModal>
        <img src={largeImage} alt={alt} />
      </OnModal>
    </ModalOverlay>
  );
}

Modal.prototypes = {
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onModalClick: PropTypes.func.isRequired,
};
