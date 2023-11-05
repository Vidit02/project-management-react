import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/developer/Dashboard'

export const Developer = () => {
    <Routes>
        <Route path='/' element={<Dashboard />} />
    </Routes>
}
