import React from 'react';
import image1 from '../assets/IMG_2304.jpg'
import image2 from '../assets/IMG_2635.jpg'
import image3 from '../assets/IMG_2758.jpg'
import image4 from '../assets/IMG_2907.jpg'
import image5 from '../assets/IMG_2961.jpg'
import image6 from '../assets/IMG_2968.jpg'
import image7 from '../assets/IMG_3129.jpg'
import image8 from '../assets/IMG_3132.jpg'
import image9 from '../assets/IMG_3177.jpg'
import image10 from '../assets/IMG_3182.jpg'
import image11 from '../assets/IMG_3216.jpg'
import image12 from '../assets/IMG_8271.jpg'


const images = [
    {
        src: image1,
        alt: 'Image 1'
    },
    {
        src: image2,
        alt: 'Image 2'
    },
    {
        src: image3,
        alt: 'Image 3'
    },
    {
        src: image4,
        alt: 'Image 4'
    }, {
        src: image5,
        alt: 'Image 5'
    }, {
        src: image6,
        alt: 'Image 6'
    }, {
        src: image7,
        alt: 'Image 7'
    }, {
        src: image8,
        alt: 'Image 8'
    }, {
        src: image9,
        alt: 'Image 9'
    }, {
        src: image10,
        alt: 'Image 10'
    }, {
        src: image11,
        alt: 'Image 11'
    }, {
        src: image12,
        alt: 'Image 12'
    },
];

function ImageGallery() {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;
