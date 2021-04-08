
import React, { useState } from 'react';
import Contents from '../Contents';
import PageTogglers from '../PageTogglers';
import TopNav from '../Topnav';
import './index.css';

const Index: React.FC = () => {
    const [bgState, setBgState] = useState('home');
    const [activePage, setActivePage] = useState('home');

    const onPageChange = (value: string) => {

        setActivePage(value);
        setBgState('')
        setTimeout(() => {
            setBgState(value);
        }, 400)

    }


    return (
        <div className={`relative w-screen h-screen overflow-hidden bg-black px-8 ${bgState} laptop-bg`}>
            <TopNav setActivePage={setActivePage} />
            <PageTogglers onPageChange={onPageChange} activePage={activePage} />
            <Contents activePage={activePage} setActivePage={setActivePage} />
        </div>
    );
}

export default Index;