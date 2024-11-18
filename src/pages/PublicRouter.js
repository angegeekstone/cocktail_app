import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Service from './Service';
import Home from './Home';
import Contact from './Contact';
import Error from '../utils/Error';
import Layout from './Layout';

const PublicRouter = () => {
    return (
        <Routes>

          <Route element={<Layout/>}>
            <Route index element={<Home />} />


            <Route path='/home' element={<Home />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
    );
};

export default PublicRouter;