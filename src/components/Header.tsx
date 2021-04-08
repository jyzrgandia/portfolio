import { MessageOutlined } from '@ant-design/icons';
import React from 'react';
import logo from '../assets/logo.png';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div style={{ height: '7vh' }} className="mt-5 flex items-center justify-between relative">
            <div className="h-12 flex items-center gap-x-2 cursor-pointer">
                <img src={logo} alt="logo" className="h-6 transform hover:rotate-12 transition-all ease-in-out" />
                <p className="text-themeOrange font-proxiSemiBold text-2xl">PORTFOLIO</p>
            </div>

            <div className="absolute right-0 -top-5 cursor-pointer">
                <div style={{ height: '10vh' }} className="flex flex-col justify-end bg-themeOrange hover:text-white transition-all ease-in w-12 ">
                    <MessageOutlined className="text-xl my-2 " />
                </div>
                <div className="w-12 h-1 bg-themeOrange mt-2"></div>
            </div>
        </div>
    );
}

export default Header