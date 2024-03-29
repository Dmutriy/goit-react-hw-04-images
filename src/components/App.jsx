import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages, needValues } from './Services/pixabayAPI';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURLs] = useState('');
  const [tags, setTags] = useState('');
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const renderGallery = async () => {
      setIsLoading(true);

      try {
        const { hits, totalHits } = await fetchImages(searchQuery, page);

        if (totalHits === 0) {
          toast.warn(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        const newImages = needValues(hits);

        setImages(images => [...images, ...newImages]);
        setTotalHits(totalHits);
      } catch (error) {
        // setError(error);
        toast.error('Oops... Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    renderGallery();
  }, [page, searchQuery]);

  const onFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(page => page + 1);
  };

  const openModal = (largeImageURL, tags) => {
    toggleModal();
    setLargeImageURLs(largeImageURL);
    setTags(tags);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const allImages = images.length !== totalHits;

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />
      <ToastContainer autoClose={4000} />
      <ImageGallery images={images} onOpenModal={openModal} />
      {isLoading && <Loader />}

      {!isLoading && allImages && <ButtonLoadMore onClick={onLoadMore} />}
      {showModal && (
        <Modal
          onModalClick={toggleModal}
          largeImage={largeImageURL}
          alt={tags}
        />
      )}
    </>
  );
}
