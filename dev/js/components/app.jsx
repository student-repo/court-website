import React from 'react';
import TabsExampleIconText from './example-tab'
import MenuComponent from './menu-component'


// <TabsExampleIconText socket={socket}/>
const App = ({children, socket}) => {
    return (
        <div className="application">
                <MenuComponent />
            {children}
        </div>
    )}

export default App;