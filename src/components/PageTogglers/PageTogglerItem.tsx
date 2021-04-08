import React from 'react';

interface PageTogglerItemProps {
    onPageChange: (value: string) => void;
    activePage: string;
    linkConfig: { name: string, icon: JSX.Element };
}

const PageTogglerItem: React.FC<PageTogglerItemProps> = ({ onPageChange, activePage, linkConfig }) => {
    return (
        <div
            className={`flex items-center justify-center transform transition-all ease-in-out cursor-pointer
                    ${activePage === linkConfig.name ? 'link-active' : 'link-inactive'}
                    `}
            onClick={() => onPageChange(linkConfig.name)}
        >
            {linkConfig.icon}
        </div>
    );
}

export default PageTogglerItem