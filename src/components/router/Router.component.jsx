import { Route, Routes } from 'react-router-dom';
import {Home, Courses, About, Pricing, Community, Contact, Profile, PageError} from './Router';
import Register from '../features/SignIn/Register.component';

export default function Router() {
    return ( 
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/community' element={<Community/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<PageError/>}/>
        </Routes>
     );
};