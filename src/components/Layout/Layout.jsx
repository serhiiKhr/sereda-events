import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout() {
    return (
        <>
            <Header />
            <main style={{ padding: '20px' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
