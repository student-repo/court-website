import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Col, Row} from "pui-react-grids";
import {ClusterMarker} from 'google-map-react'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/communication/location-on';
import {redA700} from 'material-ui/styles/colors';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;


const AnyReactComponent = ({ text }) => <div><IconButton tooltip="Tennis Ptasia Court" touch={true} tooltipPosition="top-center" ><MenuIcon color={redA700}/></IconButton></div>;

const newsStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '35px',
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



const Contact = ({center, zoom}) => (
<Row className="contact">
    <Col md={1}/>
    <Col md={22} style={{maxWidth: '70vw', float: 'none', margin: '0 auto'}}>
        <Row style={{textAlign: 'center'}}>
            <br/>
            <font style={newsStyle}>Contact</font>
            <br/>
            <br/>
        </Row>
        <Row>
    <Col md={14} style={{height: '400px'}}>
        <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}
        >
            <AnyReactComponent
                lat={52.736635}
                lng={15.267718}
                text={'Tennis Ptasia Court'}
            />
        </GoogleMapReact>
    </Col>
            <Col md={1}/>
            <Col md={8}>
                <font style={titleStyle}>Tennis Ptasia Court</font>
                <br/>
                <font style={contentStyle}>ul. Ptasia 8</font>
                <br/>
                <font style={contentStyle}>66-400 Gorzow Wielkopolski</font>
                <br/>
                <font style={contentStyle}>Reservation: </font>
                <br/>
                <font style={contentStyle}>609600523 </font>
                </Col>
            </Row>
        </Col>
    <Col md={1}/>
    <Row>
        <br/>
        <br/>
        <br/>
        <br/>
    </Row>
</Row>
);

export default Contact