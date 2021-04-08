import React from 'react';
import Branding from './Branding';
import './index.css';
import Links from './Links';

interface IndexProps {
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const Index: React.FC<IndexProps> = ({ setActivePage }) => {
    return (
        <div style={{ height: '7vh' }} className="mt-5 flex items-center justify-between relative">
            <Branding setActivePage={setActivePage} />
            <Links setActivePage={setActivePage} />
        </div>
    );
}

export default Index;