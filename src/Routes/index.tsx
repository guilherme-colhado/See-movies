import { Route, Routes } from 'react-router-dom'
import { Assignature } from '../pages/Assignature/Assignature'
import { CardDataPage } from '../pages/CardData'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Login } from '../pages/Login/Login'
import { RegisterPage } from '../pages/Register'

export const RoutesComponent = () => {
    return <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register/card-data' element={<CardDataPage/>}/>
        <Route path='/register/assignature' element={<Assignature/>}/>
    </Routes>
}