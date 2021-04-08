import React from 'react';
import { pageLogo } from '../AssetImports';

interface BrandingProps {
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const Branding: React.FC<BrandingProps> = ({ setActivePage }) => {
    return (
        <div className="h-12 flex items-center gap-x-2 cursor-pointer branding" onClick={() => setActivePage('home')}>
            <img src={pageLogo} alt="logo" className="h-6" />
            <p className="text-themeOrange font-proxiSemiBold text-2xl">PORTFOLIO</p>
        </div>
    );
}

export default Branding