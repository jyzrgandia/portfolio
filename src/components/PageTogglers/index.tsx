import { HomeFilled, InfoCircleFilled, ProjectFilled } from '@ant-design/icons';
import React from 'react';
import './index.css';
import PageTogglerItem from './PageTogglerItem';

interface IndexProps {
    onPageChange: (value: string) => void;
    activePage: string;
}

const Index: React.FC<IndexProps> = ({ onPageChange, activePage }) => {

    const links = [
        {
            name: 'home',
            icon: <HomeFilled className="text-themeOrange text-sm mt-1" />
        },
        {
            name: 'about',
            icon: <InfoCircleFilled className="text-themeOrange text-sm mt-2" />
        },
        {
            name: 'projects',
            icon: <ProjectFilled className="text-themeOrange text-sm mt-2" />
        },

    ]

    return (
        <div style={{ top: '15vh', height: '75vh' }} className="mt-5 flex items-center justify-center w-12 fixed right-8">
            <div style={{ height: '40%' }} className="flex flex-col justify-between">
                {links.map((item, i) =>
                    <PageTogglerItem key={i} onPageChange={onPageChange} activePage={activePage} linkConfig={item} />
                )}
            </div>
        </div>
    );
}

export default Index;