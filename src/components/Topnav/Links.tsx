import { MessageOutlined } from '@ant-design/icons';
import React from 'react';

interface LinksProps {
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const Links: React.FC<LinksProps> = ({ setActivePage }) => {
    return (
        <div className="absolute right-0 -top-5 cursor-pointer message">
            <div
                style={{ height: '10vh' }}
                className="flex flex-col justify-end bg-themeOrange hover:text-white transition-all ease-in w-12 "
                onClick={() => setActivePage('contact')}
            >
                <MessageOutlined className="text-xl my-2 " />
            </div>
            <div className="bottom-border" />
        </div>
    );
}

export default Links