import { HomeFilled, InfoCircleFilled, ProjectFilled } from '@ant-design/icons';
import React from 'react';

interface NavigationProps {
    handleChangeBg: (value: string) => void;
    pageState: string;
}

const Navigation: React.FC<NavigationProps> = ({ handleChangeBg, pageState }) => {
    return (
        <div style={{ top: '15vh', height: '75vh' }} className="mt-5 flex items-center justify-center w-12 fixed right-8">
            <div style={{ height: '40%' }} className="flex flex-col justify-between">

                <div
                    className={`h-7 w-7 flex items-center justify-center transform hover:scale-125 transition-all ease-in-out cursor-pointer
                    ${pageState === "home" ? 'border-2 border-themeOrange rounded-full' : 'border-none'}
                    `}
                    onClick={() => handleChangeBg('home')}
                >
                    <HomeFilled className="text-themeOrange text-lg mt-1" />
                </div>

                <div
                    className={`h-7 w-7 flex items-center justify-center transform hover:scale-125 transition-all ease-in-out cursor-pointer
                    ${pageState === "about" ? 'border-2 border-themeOrange rounded-full' : 'border-none'}
                    `}
                    onClick={() => handleChangeBg('about')}
                >
                    <InfoCircleFilled className="text-themeOrange text-lg mt-2" />
                </div>

                <div
                    className={`h-7 w-7 flex items-center justify-center transform hover:scale-125 transition-all ease-in-out cursor-pointer
                    ${pageState === "projects" ? 'border-2 border-themeOrange rounded-full' : 'border-none'}
                    `}
                    onClick={() => handleChangeBg('projects')}
                >
                    <ProjectFilled className="text-themeOrange text-lg mt-2" />
                </div>

            </div>
        </div>
    );
}

export default Navigation