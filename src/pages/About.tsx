import { AimOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import logo from '../assets/logo.png';

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {

    const [aboutState, setAboutState] = useState('mission');

    return (
        <div className="container px-20">
            <div className="flex flex-col">
                <h2 className="text-themeOrange font-proxiSemiBold text-3xl flex gap-x-2 items-center">
                    <img className="h-6" src={logo} alt="logo" />
                    COMPANY NAME
                </h2>

                <ul className="my-8">

                    {aboutState === 'mission' &&
                        <li className="text-white gap-x-2 description">
                            <div className="flex items-center gap-x-2 text-2xl font-proxiSemiBold my-8">
                                <AimOutlined />MISSION
                            </div>

                            <p className="text-2xl w-9/12">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </p>
                        </li>
                    }

                    {aboutState === 'vision' &&
                        <li className="text-white gap-x-2 description">
                            <div className="flex items-center gap-x-2 text-2xl font-proxiSemiBold my-8">
                                <AimOutlined />VISION
                            </div>

                            <p className="text-2xl w-9/12">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </p>
                        </li>
                    }

                    {aboutState === 'sample' &&
                        <li className="text-white gap-x-2 description">
                            <div className="flex items-center gap-x-2 text-2xl font-proxiSemiBold my-8">
                                <AimOutlined />SAMPLE
                            </div>

                            <p className="text-2xl w-9/12">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </p>
                        </li>
                    }

                </ul>

                <div className="w-52 flex items-end justify-between absolute bottom-20">
                    <div
                        className=
                        {`
                        ${aboutState === 'mission' ? 'h-2 w-14 bg-themeOrange' : 'h-1 w-12 bg-white'} 
                        hover:bg-themeOrange cursor-pointer transition-all ease-in-out rounded-md
                        `}
                        onClick={() => setAboutState('mission')}
                    />

                    <div
                        className=
                        {`
                        ${aboutState === 'vision' ? 'h-2 w-14 bg-themeOrange' : 'h-1 w-12 bg-white'} 
                        hover:bg-themeOrange cursor-pointer transition-all ease-in-out rounded-md
                        `}
                        onClick={() => setAboutState('vision')}

                    />

                    <div
                        className=
                        {`
                        ${aboutState === 'sample' ? 'h-2 w-14 bg-themeOrange' : 'h-1 w-12 bg-white'} 
                        hover:bg-themeOrange cursor-pointer transition-all ease-in-out rounded-md
                        `}
                        onClick={() => setAboutState('sample')}

                    />
                </div>

            </div>

        </div>
    );
}

export default About