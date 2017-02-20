import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import {Link, withRouter} from "react-router";
import scrollToElement from 'scroll-to-element';

const TabsExampleIconText = ({router, socket}) => (
    <Tabs>
            <Tab
                label="News"
                onActive={() => scrollToElement('.ddd123', {
                    offset: 0,
                    duration: 1500
                })}
            />
            <Tab
                label="Reservation"
                onActive={() => router.push('/reservation')}
            />
            <Tab
                icon={<MapsPersonPin />}
                label="Tennis School"
                onActive={() => console.log("Tennis school")}
                />
            <Tab
                icon={<MapsPersonPin />}
                label="Gallery"
                onActive={() => console.log("Gallery")}
            />
            <Tab
                icon={<MapsPersonPin />}
                label="prices"
                onActive={() => console.log("Prices")}
            />
            <Tab
                icon={<MapsPersonPin />}
                label="Contact"
                onActive={() => console.log("Contact")}
            />
    </Tabs>
);

export default withRouter(TabsExampleIconText);