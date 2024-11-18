import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {Wrapper, Container, Main} from './Layout.styled'

function Layout() {
    return (
        <Wrapper>
            <Container>
                <Header />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </Container>
        </Wrapper>
    );
}

export default Layout;
