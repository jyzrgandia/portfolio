import React from 'react';

interface PageTitleProps {
    pageState: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageState }) => {
    return (
        <div
            style={{
                width: '150px',
                height: '80vh',
                top: '20vh'
            }}
            className="fixed inline-block left-0"
        >
            <h1 style={{
                height: '150px',
                width: '80vh'
            }} className="page-title text-6xl font-proxiExtraBold flex items-center transform fixed rotate-90 top-0 origin-bottom-left ">
                {pageState === 'about' && 'ABOUT US'}
                {pageState === 'projects' && 'PROJECTS'}
            </h1>
        </div>
    );
}

export default PageTitle