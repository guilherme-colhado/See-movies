import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Assignature } from '../pages/Assignature/Assignature'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Login } from '../pages/Login/Login'
import { RegisterPage } from '../pages/Register'

export const RoutesComponent = () => {
    return <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='' element={''}/>
        <Route path='' element={''}/>
    </Routes>
}