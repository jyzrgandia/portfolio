import { Button } from 'antd';
import React from 'react';
import logo from '../assets/logo.png';
interface HomepageProps {

}

const Homepage: React.FC<HomepageProps> = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-12 my-14 gap-x-14">
                <div className="flex flex-col gap-y-20 col-span-5">
                    <div className="flex">
                        <img className="h-full" src={logo} alt={logo} />
                    </div>
                    <div className="flex justify-center cta-btn">
                        <Button type="primary" className="bg-transparent border-2 border-white px-10 hover:bg-white hover:text-themeOrange">CONTACT US</Button>
                    </div>
                </div>

                <div className="col-span-7 relative overflow-hidden">
                    <div
                        className="welcome-text"
                    >
                        <h1 className="text-4xl font-proxiExtraBold text-gray-300"> Hi! Welcome</h1>
                        <h2 className="text-3xl font-proxiSemiBold text-gray-300 my-5">We are blank , web developers</h2>

                        <p className="text-xl text-white">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage