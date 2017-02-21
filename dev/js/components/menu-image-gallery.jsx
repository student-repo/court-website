import React from 'react';
import * as galleryCss from '../../scss/galleryCss.css'
import ImageGallery from './image-gallery';
import {Col, Row} from "pui-react-grids";
import {connect} from 'react-redux';

const images = [
    {
        original: `./images/tennis-banner-3.jpg`,
        description: 'Custom class for slides & thumbnails'
    },
    {
        original: `./images/tennis-ball-resize2.jpg`,
        description: 'Render custom slides within the gallery',
    },
    {
        original: `./images/tennis-racket3.jpg`,
    }
];

// const getImages = (news) => {
//     var images = [];
//     news.forEach((e) => {
//         var singleImage = {
//             original: e.Image,
//             description: e.Description
//         }
//         images.push(singleImage);
//     });
//     return images
// };

const MenuImageGallery = () => {
    return (

        <Row className='app' >
            <ImageGallery
                style={galleryCss}
                items={images}
            />
            </Row>
    );
}

export default MenuImageGallery;