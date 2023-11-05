import React from 'react';
import {Route,Routes} from 'react-router-dom'
import { CreateLead } from '../components/admin/CreateLead'

export const SuperadminRoutes = () => {
    <Routes>
        <Route path='/' />
        <Route path='/createUser' element={<CreateLead/>} />
    </Routes>
}
