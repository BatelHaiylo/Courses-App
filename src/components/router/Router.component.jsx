import { Route, Routes } from 'react-router-dom';
import {SignIn, SignUp, Account, Home, Courses, About, Pricing, Community, Contact, Profile, PageError} from './Router';
import AuthContextProvider from '../../context/AuthContext';

export default function Router() {
    return ( 
        <AuthContextProvider>
            <Routes>
                <Route path='/' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/courses' element={<Courses/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/pricing' element={<Pricing/>}/>
                <Route path='/community' element={<Community/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='*' element={<PageError/>}/>
            </Routes>
        </AuthContextProvider>
     );
};