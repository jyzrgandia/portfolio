import React from 'react';
import { pageLogo } from '../../components/AssetImports';
import './index.css';
const index: React.FC = () => {
    return (
        <div className="container px-20">
            <div className="flex flex-col">
                <h2 className="text-themeOrange font-proxiSemiBold text-3xl flex gap-x-2 items-center">
                    <img className="h-6" src={pageLogo} alt="logo" />
                    PROJECTS
                </h2>
            </div>

        </div>
    );
}

export default index