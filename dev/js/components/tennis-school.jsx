import React from 'react';
import _ from 'underscore'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {tennisSchoolUpload} from '../actions/tenni-school-upload-action'
import {Col, Row} from "pui-react-grids";
import Gallery from './single-image-view';


const DEFAULT_IMAGES = [
    { id: '1470619549108-b85c56fe5be8', caption: 'Photo by Alan Emery', orientation: 'square', useForDemo: true }
];

const newsStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '40px',
    textAlign: 'center',
    maxWidth: '100%',
    color: '#eeeeee'
};

const titleStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '30px',
    maxWidth: '100%',
    color: '#b3b3b3',
};

const dateStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontSize: '10px',
    maxWidth: '100%',
    color: '#e6e6e6',
};

const contentStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontSize: '20px',
    maxWidth: '100%',
    color: '#a6a6a6',
};

const menuStyle = {
    backgroundColor: '#4d4d4d',
}


const TennisSchool = ({socket, tennisSchoolUpload, router, tennisSchool, news}) => {
    socket.on('INITIAL_DATA_TENNIS_SCHOOL', function(data){
        if(_.isUndefined(data.data)){
            console.log("data undefined")
        }
        else{
            tennisSchoolUpload(data.data);
            console.log(data.data)
        }
    });

    return(
        <Row className="tennis-school" style={menuStyle}>
            <Col md={1}/>
            <Col md={22} style={{maxWidth: '70vw', float: 'none', margin: '0 auto'}}>
                <Row style={{textAlign: 'center'}}>
                    <br/>
                    <font style={newsStyle}>Tennis School</font>
                    <br/>
                    <br/>
                </Row>
                {tennisSchool.map(key => {
                    return (
                        <Row key={key.CoachID + Math.random()}>
                            <Row key={key.CoachID + Math.random()}>
                                <Col md={13}>
                                    <Gallery key={Math.random()} images={DEFAULT_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
                                        src: key.Image,
                                        thumbnail: key.Image,
                                        caption,
                                        orientation,
                                        useForDemo,
                                    }))} />
                                </Col>
                                <Col md={9}>
                                    <Row>
                                        <font style={titleStyle} key={key.CoachID + Math.random()}>{key.Name + " " + key.VorName}</font>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <font style={contentStyle} key={key.CoachID + Math.random()}>{key.Description}</font>
                                    </Row>
                                </Col>
                            </Row>
                            <br/>
                            <br/>
                            <br/>
                        </Row>

                    )
                })}
            </Col>
            <Col md={1}/>
        </Row>
    )}

function mapStateToProps(state) {
    return {
        tennisSchool: state.tennisSchool,
        news: state.news
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({tennisSchoolUpload: tennisSchoolUpload}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TennisSchool);