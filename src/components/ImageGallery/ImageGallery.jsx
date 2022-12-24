import PropTypes from 'prop-types';
import { GalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onOpenModal }) => (
  <GalleryList>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <GalleryItem
        key={id}
        url={webformatURL}
        largeImageURL={largeImageURL}
        tag={tags}
        openModal={onOpenModal}
      />
    ))}
  </GalleryList>
);

ImageGallery.prototypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
