import React from 'react';
import _ from 'underscore'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {newsUpload} from '../actions/action-new-upload'
import {Col, Row} from "pui-react-grids";
import Gallery from './single-image-view';


const DEFAULT_IMAGES = [
    { id: '12312d12d1d12d1d1', caption: 'Photo by Alan Emery', orientation: 'square', useForDemo: true }
];

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

const titleStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '30px',
    maxWidth: '100%',
    color: '#696969',
};

const dateStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontSize: '15px',
    maxWidth: '100%',
    color: '#b3b3b3',
};

const contentStyle = {
    fontFamily: 'Courier New',
    padding: '6px',
    borderRadius: '6px',
    fontSize: '20px',
    maxWidth: '100%',
    color: '#8c8c8c',
};

const News = ({socket, newsUpload, news, router}) => {
    socket.on('INITIAL_DATA_NEWS', function(data){
        if(_.isUndefined(data.data)){
            console.log("data undefined")
        }
        else{
            newsUpload(data.data);
            console.log(data.data)
        }
    });

    return(
        <Row className="news">
            <Col md={1}/>
            <Col md={22} style={{maxWidth: '70vw', float: 'none', margin: '0 auto'}}>
                <Row style={{textAlign: 'center'}}>
                    <br/>
                    <font style={newsStyle}>News</font>
                </Row>
                {news.map(key => {
                    return (
                        <Row key={key.NewsID + Math.random()}>
                            <Row key={key.NewsID + Math.random()}>
                                <Col md={13}>
                                    <font style={titleStyle} key={key.NewsID + Math.random()}>{key.Title}</font>
                                </Col>
                            </Row>
                            <Row key={key.NewsID + Math.random()}>
                                <Col md={13}>
                                    <font style={dateStyle} key={key.NewsID + Math.random()}>{key.Date}</font>
                                </Col>
                            </Row>
                            <Row key={key.NewsID + Math.random()}>
                                <Col md={13}>
                                    <font style={contentStyle} key={key.NewsID + Math.random()}>{key.Content}</font>
                                </Col>
                                <div>
                                    <Gallery key={Math.random()} images={DEFAULT_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
                                        src: key.Image,
                                        thumbnail: key.Image,
                                        caption,
                                        orientation,
                                        useForDemo,
                                    }))} />
                                </div>
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
        news:state.news,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({newsUpload: newsUpload}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(News);