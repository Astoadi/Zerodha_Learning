import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';

import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
function HomePage() {

    return ( 
       <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
       </>
     );
}

export default HomePage;