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


const MenuComponent = ({resizeWindowUpdate, windowWidth}) => (
    <Row>
        <WindowResizeListener onResize={windowSize => resizeWindowUpdate(windowSize.windowWidth)}/>

        {windowWidth > menuModeChangeValue ?
            <Col md={4} style={menuStyle}>
                <img className="entryImage" src="Tennis-Logo-scale.png" alt="Unable to load image" style={imageStyle}/>
                <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("News")}>News</font>
                <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Reservation")}>Reservation</font>
                <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Tennis School")}>Tennis School</font>
                <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Gallery")}>Gallery</font>
                <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Contact")}>Contact</font>
                <font className="menu-labels" style={menuLabelCss} onClick={() => console.log("Prices")}>Prices</font>
            </Col> :
            <div>
                <Col md={4} style={menuStyle}>
                    <img className="entryImage" src="Tennis-Logo-scale.png" alt="Unable to load image" style={imageStyle}/>
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

export default connect(mapStateToProps, matchDispatchToProps)(MenuComponent);