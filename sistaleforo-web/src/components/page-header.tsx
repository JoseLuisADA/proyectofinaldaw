import React from 'react';
import TopNavbar from './TopNavbar';

const PageHeader = () => {
    return (
        <header>
            <div className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-5xl'>Sistale Foro</h1>
                <TopNavbar />
            </div>
        </header>
    );
}

export default PageHeader;