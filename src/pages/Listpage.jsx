import React from 'react';
import { 
    ListTabmenu,
} from '../features/list/index.js';

import '../styles/listpage.scss'
const Listpage = () => {
    return (
        <div className='list-page'>
            <div className='listmain'>
                <ListTabmenu />
            </div>
            
        </div>
    );
};

export default Listpage;