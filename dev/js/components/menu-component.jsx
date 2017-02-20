import React from 'react';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux'
import {Col, Row} from "pui-react-grids";
import * as menuLabelCss from '../../scss/menu-label.css'
import SmallScreenMenu from './menu-small-screen'




var divStyle = {
    backgroundColor: '#333333',
    top: '0px',
    position: 'fixed',
    zIndex: '100',
    width: '105%',
    height: '100px'
};
// width: '100%'
// var divStyle2 = {
// //     height: '249px',
// // width: '50px',
// // position: 'fixed',
// // left: '0px',
// // top: '200px',
// // zIndex: '100'
// };
var divStyle2 = {
    backgroundColor: '#333333'
};

const style = {
    'maxWidth': '100%',
    'cursor': 'pointer',
    'maxHeight': '90px',
    'margin': "5px"
};

const style4 = {
    textAlign: "right"
};

const style5 = {
    textAlign: "left"
};

const MenuComponent = () => (
    <Row style={divStyle}>
        <Col md={1}/>
        <Col md={4}>
            <img className="entryImage" src="Tennis-Logo-scale.png" alt="Unable to load image" style={style}/>
        </Col>
        {
            window.innerWidth > 1270 ? <div>
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
                        <SmallScreenMenu/>
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

export default MenuComponent;