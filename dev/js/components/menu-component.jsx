import React from 'react';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux'
import {Col, Row} from "pui-react-grids";
import * as menuLabelCss from '../../scss/menu-label.css'
import SmallScreenMenu from './menu-small-screen'
import ReactResizeDetector from 'react-resize-detector';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {resizeWindowUpdate} from '../actions/resize-window-state-action'




var divStyle = {
    backgroundColor: '#333333',
    top: '0px',
    position: 'fixed',
    zIndex: '100',
    width: '105%',
    height: '100px'
};

const style = {
    'maxWidth': '100%',
    'cursor': 'pointer',
    'maxHeight': '90px',
    'margin': "5px"
};

const menuModeChangeValue = 1270;

const ss = {
    whiteSpace: 'nowrap'
}


const sss = {
    textAlign: "right"
}

const MenuComponent = ({resizeWindowUpdate, windowWidth}) => (
    <Row style={divStyle}>
        <ReactResizeDetector handleWidth handleHeight onResize={() => resizeWindowUpdate(window.innerWidth)} />
        <Col md={1}/>
        <Col md={4} style={ss}>
            <img className="entryImage" src="Tennis-Logo-scale.png" alt="Unable to load image" style={style}/>
        </Col>
        {
            windowWidth > menuModeChangeValue ? <div>
                <Col md={4}/>
                <Col md={1}>
                    <br/>
                    <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("News")}>News</font>
                </Col>
                <Col md={3}>
                    <br/>
                    <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Reservation")}>Reservation</font>
                </Col>
                <Col md={3}>
                    <br/>
                    <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Tennis School")}>Tennis School</font>
                </Col>
                <Col md={2}>
                    <br/>
                    <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Gallery")}>Gallery</font>
                </Col>
                <Col md={2}>
                    <br/>
                    <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Contact")}>Contact</font>
                </Col>
                <Col md={3}>
                    <br/>
                    <font className="menu-labels" style={menuLabelCss} onClick={() => console.log(window.innerWidth)}>Prices</font>
                </Col>
            </div> :
                <Col md={3} style={sss}>
                        <SmallScreenMenu/>
                    </Col>
        }
    </Row>
);


const style3 = {
    color: 'grey',
    fontWeight: 'bold',
    cursor: 'pointer'
};


const descriptionStyle = {
    fontFamily: 'Courier New',
    color: '#939393',
    padding: '6px',
    borderRadius: '6px',
     fontWeight: 'bold',
    fontSize: '20px',
    cursor: 'pointer'
};

function mapStateToProps(state) {
    return {
        windowWidth:state.windowWidth
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({resizeWindowUpdate: resizeWindowUpdate}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MenuComponent);