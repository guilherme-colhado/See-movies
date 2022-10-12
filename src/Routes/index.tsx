import { Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../pages/Register'

export const RoutesComponent = () => {
    return <Routes>
        <Route path='/' element={''}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='' element={''}/>
        <Route path='' element={''}/>
    </Routes>
}