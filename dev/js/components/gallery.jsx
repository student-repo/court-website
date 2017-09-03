import React, { Component } from 'react';
import {Col, Row} from "pui-react-grids";
import {ClusterMarker} from 'google-map-react'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/communication/location-on';
import {redA700} from 'material-ui/styles/colors';
import GalleryComponent from './gallery-component';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;


const AnyReactComponent = ({ text }) => <div><IconButton tooltip="Tennis Ptasia Court" touch={true} tooltipPosition="top-center" ><MenuIcon color={redA700}/></IconButton></div>;

const newsStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '40px',
    textAlign: 'center',
    maxWidth: '100%',
    color: 'black'
};

const styles = {
    mediumIcon: {
        width: 48,
        height: 48,
    },
    medium: {
        width: 96,
        height: 96
    }
};
const titleStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '25px',
    maxWidth: '100%',
    color: '#696969'
};

const contentStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontSize: '20px',
    maxWidth: '100%',
    color: '#8c8c8c',
};

const THUMBNAIL_IMAGES = [
    { id: '1454991727061-be514eae86f7', caption: 'Photo by Thomas Kelley', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
    { id: '1455717974081-0436a066bb96', caption: 'Photo by Teddy Kelley', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
    { id: '1460899960812-f6ee1ecaf117', caption: 'Photo by Jay Ruzesky', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
    { id: '1456926631375-92c8ce872def', caption: 'Photo by Gwen Weustink', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
    { id: '1452274381522-521513015433', caption: 'Photo by Adam Willoughby-Knox', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
    { id: '1471145653077-54c6f0aae511', caption: 'Photo by Boris Smokrovic', orientation: 'landscape', useForDemo: true  }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
    { id: '1471005197911-88e9d4a7834d', caption: 'Photo by Gaetano Cessati', orientation: 'landscape', useForDemo: true  }, // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
    { id: '1470583190240-bd6bbde8a569', caption: 'Photo by Alan Emery', orientation: 'landscape' ,useForDemo: true }, // https://unsplash.com/photos/emTCWiq2txk (Beetle)
    { id: '1470688090067-6d429c0b2600', caption: 'Photo by Ján Jakub Naništa', orientation: 'landscape' ,useForDemo: true }, // https://unsplash.com/photos/xqjO-lx39B4 (Scottish Highland Cow)
    { id: '1470742292565-de43c4b02b57', caption: 'Photo by Eric Knoll', orientation: 'landscape' , useForDemo: true }, // https://unsplash.com/photos/DmOCkOnx-MQ (Cheetah)
    // https://unsplash.com/photos/NUMlxTPsznM coyote?
];



function makeUnsplashSrc (id) {
    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet (id, size) {
    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail (id, orientation = 'landscape') {
    const dimensions = orientation === 'square'
        ? 'w=300&h=300'
        : 'w=240&h=159';

    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}




const Gallery = ({center, zoom}) => (
    <Row className="gallery">
        <Row style={{textAlign: 'center'}}>
            <br/>
            <font style={newsStyle}>Gallery</font>
            <br/>
            <br/>
        </Row>
        <Row>
        <Col md={1}/>
        <Col md={22} >
            <GalleryComponent images={THUMBNAIL_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
                src: makeUnsplashSrc(id),
                thumbnail: makeUnsplashThumbnail(id, orientation),
                srcset: [
                    makeUnsplashSrcSet(id, 1024),
                    makeUnsplashSrcSet(id, 800),
                    makeUnsplashSrcSet(id, 500),
                    makeUnsplashSrcSet(id, 320),
                ],
                caption,
                orientation,
                useForDemo,
            }))} showThumbnails />
        </Col>
        <Col md={1}/>
            </Row>
    </Row>
);

export default Gallery