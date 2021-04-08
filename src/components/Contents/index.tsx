import React from 'react';
import About from '../../pages/About';
import Homepage from '../../pages/Homepage';
import Projects from '../../pages/Projects';
import './index.css';
import PageTitle from './PageTitle';

interface IndexProps {
    activePage: string;
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const Index: React.FC<IndexProps> = ({ activePage, setActivePage }) => {

    const items = [
        {
            item: <Homepage setActivePage={setActivePage} />,
            name: 'Home',
            selector: 'home'
        },
        {
            item: <About />,
            name: 'About Us',
            selector: 'about'
        },
        {
            item: <Projects />,
            name: 'Projects',
            selector: 'projects'
        },
        {
            item: <Projects />,
            name: 'Contact Us',
            selector: 'contact'
        },

    ]

    return (
        <div
            style={
                {
                    top: '20vh',
                    height: '80vh',
                    left: activePage === 'home' ? '0' : '150px',
                    width: activePage === 'home' ? '91.6666667%' : 'calc(91.6666667% - 150px)',

                }
            }
            className="absolute rounded-tr-2xl px-8 pt-10 transition-all ease-in-out bg-gray-100 bg-opacity-10">

            {items.map((content, i) => {
                return (
                    <div key={i}>
                        {activePage === content.selector && (content.item)}
                        {activePage !== 'home' && activePage === content.selector && <PageTitle>{content.name}</PageTitle>}
                    </div>
                )
            }
            )}
        </div>
    );
}

export default Index