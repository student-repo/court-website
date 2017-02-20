import React from 'react';
import * as galleryCss from '../../scss/galleryCss.css'
import ImageGallery from './image-gallery';
// import ImageGallery from 'react-image-gallery'

const images = [
    {
        original: `https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg`,
        thumbnail: `https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1t.jpg`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: 'Custom class for slides & thumbnails'
    },
    {
        thumbnail: `https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/3v.jpg`,
        original: `https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/3v.jpg`,
        embedUrl: 'https://www.youtube.com/embed/iNJdPyoqt8U?autoplay=1&showinfo=0',
        description: 'Render custom slides within the gallery',
    },
    {
        thumbnail: `https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg`,
        original: `https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg`,
        embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
    }
];

const App1 = () => {
    return (

        <section className='app'>
            <ImageGallery
                style={galleryCss}
                items={images}
            />
        </section>
    );
}

export default App1