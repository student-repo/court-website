import React from 'react';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux'
import {Col, Row} from "pui-react-grids";
import * as menuLabelCss from '../../scss/menu-label.css'
import SmallScreenMenu from './menu-small-screen'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {resizeWindowUpdate} from '../actions/resize-window-state-action'
import { WindowResizeListener } from 'react-window-resize-listener';
import {Link, withRouter} from "react-router";
import scrollToElement from 'scroll-to-element';

const imageStyle = {
    'maxWidth': '100%',
    'cursor': 'pointer',
    'maxHeight': '90px',
    'margin': "5px"
};

const menuModeChangeValue = 1100;

const menuStyle = {
    backgroundColor: '#333333',
    top: '0px',
    position: 'fixed',
    zIndex: '100',
    width: '105%',
}


const MenuComponent = ({resizeWindowUpdate, windowWidth, router}) => (
    <Row>
        <WindowResizeListener onResize={windowSize => resizeWindowUpdate(windowSize.windowWidth)}/>

        {windowWidth > menuModeChangeValue ?
            <Col md={4} style={menuStyle}>
                <img className="entryImage" src="./images/Tennis-Logo-scale3.png" alt="Unable to load image" style={imageStyle} onClick={() => scrollToElement('.application', {offset: -95,duration: 1500})}/>
                <font className="menu-labels" style={menuLabelCss} onClick={() => scrollToElement('.news', {offset: -95,duration: 1500})}>News</font>
                <font className="menu-labels" style={menuLabelCss} onClick={() => router.push('/reservation')}>Reservation</font>
                <font className="menu-labels" style={menuLabelCss} onClick={() => scrollToElement('.tennis-school', {offset: -95,duration: 1500})}>Tennis School</font>
                <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Gallery")}>Gallery</font>
                <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Prices")}>Prices</font>
                <font className="menu-labels" style={menuLabelCss} onClick={() => scrollToElement('.contact', {offset: -95,duration: 1500})}>Contact</font>
            </Col> :
            <div>
                <Col md={4} style={menuStyle}>
                    <img className="entryImage" src="./images/Tennis-Logo-scale.png" alt="Unable to load image" style={imageStyle}/>
                        <SmallScreenMenu />
                </Col>
            </div>
            }
    </Row>
);

function mapStateToProps(state) {
    return {
        windowWidth:state.windowWidth
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({resizeWindowUpdate: resizeWindowUpdate}, dispatch);
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(MenuComponent));