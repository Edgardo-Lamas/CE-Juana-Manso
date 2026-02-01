import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image } from 'lucide-react';
import './PhotoGallery.css';

function PhotoGallery({ images, title }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const thumbnail = images[0];

    const openGallery = (index = 0) => {
        setCurrentIndex(index);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
    };

    return (
        <>
            {/* Thumbnail + Button */}
            <div className="photo-gallery__preview">
                <div className="photo-gallery__thumbnail" onClick={() => openGallery(0)}>
                    <img src={thumbnail} alt={`${title} - Registro fotográfico`} />
                </div>
                <button
                    className="photo-gallery__button"
                    onClick={() => openGallery(0)}
                >
                    <Image size={16} />
                    Ver registro fotográfico ({images.length})
                </button>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="photo-gallery__modal"
                    onClick={closeGallery}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Galería de fotos: ${title}`}
                >
                    <div className="photo-gallery__modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="photo-gallery__close"
                            onClick={closeGallery}
                            aria-label="Cerrar galería"
                        >
                            <X size={24} />
                        </button>

                        <div className="photo-gallery__header">
                            <h3>{title}</h3>
                            <span>{currentIndex + 1} / {images.length}</span>
                        </div>

                        <div className="photo-gallery__main">
                            {images.length > 1 && (
                                <button
                                    className="photo-gallery__nav photo-gallery__nav--prev"
                                    onClick={goToPrevious}
                                    aria-label="Foto anterior"
                                >
                                    <ChevronLeft size={32} />
                                </button>
                            )}

                            <img
                                src={images[currentIndex]}
                                alt={`${title} - Foto ${currentIndex + 1}`}
                                className="photo-gallery__image"
                            />

                            {images.length > 1 && (
                                <button
                                    className="photo-gallery__nav photo-gallery__nav--next"
                                    onClick={goToNext}
                                    aria-label="Foto siguiente"
                                >
                                    <ChevronRight size={32} />
                                </button>
                            )}
                        </div>

                        {/* Thumbnails row */}
                        {images.length > 1 && (
                            <div className="photo-gallery__thumbs">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        className={`photo-gallery__thumb ${index === currentIndex ? 'photo-gallery__thumb--active' : ''}`}
                                        onClick={() => setCurrentIndex(index)}
                                    >
                                        <img src={img} alt={`Miniatura ${index + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default PhotoGallery;
