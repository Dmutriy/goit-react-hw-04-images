import PropTypes from 'prop-types';
import { GalleryCard, GalleryImage } from './ImageGalleryItem.styled';

export const GalleryItem = ({ url, tag, openModal, largeImageURL }) => {
  return (
    <GalleryCard>
      <GalleryImage
        src={url}
        alt={tag}
        onClick={() => openModal(largeImageURL, tag)}
      />
    </GalleryCard>
  );
};

GalleryItem.prototypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
