import { AimOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { pageLogo } from '../../components/AssetImports';
import './index.css';
const Index: React.FC = () => {
    const [aboutState, setAboutState] = useState('mission');

    const aboutPageContents = [
        {
            label: 'MISSION',
            description:
                `Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.`,
            selector: 'mission'
        },
        {
            label: 'VISION',
            description:
                `Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.`,
            selector: 'vision'
        },
        {
            label: 'OTHER INFO',
            description:
                `Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.`,
            selector: 'otherInfo'
        },
    ];

    return (
        <div className="container px-20">
            <div className="flex flex-col">
                <h2 className="text-themeOrange font-proxiSemiBold text-3xl flex gap-x-2 items-center">
                    <img className="h-6" src={pageLogo} alt="logo" />
                    COMPANY NAME
                </h2>

                <ul className="my-8">

                    {aboutPageContents.map((item, i) =>
                        aboutState === item.selector && (
                            <li key={i} className="text-white gap-x-2 description">
                                <div className="flex items-center gap-x-2 text-2xl font-proxiSemiBold my-8">
                                    <AimOutlined />{item.label}
                                </div>

                                <p className="text-2xl w-9/12">
                                    {item.description}
                                </p>
                            </li>
                        )
                    )}

                </ul>

                <div className="w-52 flex items-end justify-between absolute bottom-20">

                    {aboutPageContents.map((item, i) =>
                        <div key={i}
                            className=
                            {`
                        ${aboutState === item.selector ? 'h-2 w-14 bg-themeOrange' : 'h-1 w-12 bg-white'} 
                        hover:bg-themeOrange cursor-pointer transition-all ease-in-out rounded-md
                        `}
                            onClick={() => setAboutState(item.selector)}
                        />
                    )}
                </div>

            </div>

        </div>
    );
}

export default Index