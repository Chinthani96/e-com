import React from 'react';
import EComAppBar from '../components/EComAppBar';

interface LayoutProps {
    children : React.ReactNode;
}

const Layout = (props:LayoutProps) => {
    return(
        <div>
            <EComAppBar />
            {props.children}
        </div>
    )
}

export default Layout;