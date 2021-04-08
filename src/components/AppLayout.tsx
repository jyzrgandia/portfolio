import React, { useState } from 'react';
import '../styles/custom.css';
import Content from './Content';
import Header from './Header';
import Navigation from './Navigation';

interface AppLayoutProps {

}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const [bgState, setBgState] = useState('home');
    const [pageState, setPageState] = useState('home')
    const handleChangeBg = (value: string) => {
        if (bgState !== value) {
            setPageState(value);
            setBgState('')
            setTimeout(() => {
                setBgState(value);
            }, 400)
        }
    }

    return (
        <div className={`relative w-screen h-screen overflow-hidden bg-black px-8 ${bgState} laptop-bg`}>
            <Header />
            <Navigation handleChangeBg={handleChangeBg} pageState={pageState} />
            <Content pageState={pageState} />
        </div>
    );
}

export default AppLayout