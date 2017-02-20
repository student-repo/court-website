import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {grey100} from 'material-ui/styles/colors';
import {Col, Row} from "pui-react-grids";



const styles = {
    mediumIcon: {
        width: 48,
        height: 48,
    },
    medium: {
        width: 96,
        height: 96,
        padding: 24,
    }
};

const style = {
    textAlign: "right"
};

const SmallScreenMenu = () => (
        <IconMenu style={style}
            iconButtonElement={<IconButton iconStyle={styles.mediumIcon}
                                           style={styles.medium}><MenuIcon color={grey100}/></IconButton>}
        >
            <MenuItem value="1" primaryText="News" />
            <MenuItem value="2" primaryText="Reservation" />
            <MenuItem value="3" primaryText="Tennis School" />
            <MenuItem value="4" primaryText="Gallery" />
            <MenuItem value="5" primaryText="Contact" />
            <MenuItem value="6" primaryText="Prices" />
        </IconMenu>
);

export default SmallScreenMenu;