import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <h1 className='text-white bg-violet-950 py-11 text-center'>Header</h1>
            {children}
            <h1 className='text-white bg-green-950 text-center py-16'>footer</h1>
        </div>
    );
};

export default Layout;