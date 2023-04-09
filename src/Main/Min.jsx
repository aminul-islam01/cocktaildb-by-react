import React from 'react';
import Headers from '../Components/Headers/Headers';
import { Outlet } from 'react-router-dom';

const Min = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Min;