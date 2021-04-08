import React from 'react';
import About from '../pages/About';
import Homepage from '../pages/Homepage';
import Projects from '../pages/Projects';
import PageTitle from './PageTitle';

interface ContentProps {
    pageState: string;
}

const Content: React.FC<ContentProps> = ({ pageState }) => {

    return (
        <div
            style={
                {
                    top: '20vh',
                    height: '80vh',
                    left: pageState === 'home' ? '0' : '150px',
                    width: pageState === 'home' ? '91.6666667%' : 'calc(91.6666667% - 150px)',

                }
            }
            className="absolute rounded-tr-2xl px-8 pt-10 transition-all ease-in-out bg-gray-100 bg-opacity-10">

            {pageState === 'home' && (
                <Homepage />
            )}

            {pageState === 'about' && (
                <>
                    <PageTitle pageState={pageState} />
                    <About />
                </>
            )}

            {pageState === 'projects' && (
                <>
                    <PageTitle pageState={pageState} />
                    <Projects />
                </>
            )}
        </div>
    );
}

export default Content