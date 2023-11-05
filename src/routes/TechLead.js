import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components/TechLead/Dashboard'

export const TechLead = () => {
    <Routes>
        <Route path='/' element={<Dashboard/>} />
    </Routes>
}
