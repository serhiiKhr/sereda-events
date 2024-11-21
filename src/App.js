import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from "./components/Layout/Layout";

import { ROUTES } from "./constants/routes";


import './App.css';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {
                        Object.values(ROUTES).map((route, i) => {
                            const Element = route.element;
                            if (route.path === '') {
                                return <Route key={i} index element={<Element />} />
                            } else {
                                return <Route key={i} path={route.path} element={<Element />} />
                            }
                        })
                    }
                </Route>
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
