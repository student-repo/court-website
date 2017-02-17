import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import {Link, withRouter} from "react-router";

const TabsExampleIconText = ({router, socket}) => (
    <Tabs>
            <Tab
                label="News"
                onActive={() => router.push('/news')}
            />
            <Tab
                label="Reservation"
                onActive={() => router.push('/reservation')}
            />
            <Tab
                icon={<MapsPersonPin />}
                label="Tennis School"
                onActive={() => router.push('/tennis-school')}
                />
            <Tab
                icon={<MapsPersonPin />}
                label="Gallery"
                onActive={() => router.push('/gallery')}
            />
            <Tab
                icon={<MapsPersonPin />}
                label="prices"
                onActive={() => router.push('/prices')}
            />
            <Tab
                icon={<MapsPersonPin />}
                label="Contact"
                onActive={() => router.push('/contact')}
            />
    </Tabs>
);

export default withRouter(TabsExampleIconText);