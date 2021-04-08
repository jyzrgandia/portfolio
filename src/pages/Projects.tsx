import React from 'react';
import logo from '../assets/logo.png';

interface ProjectsProps {

}

const Projects: React.FC<ProjectsProps> = () => {
    return (
        <div className="container px-20">
            <div className="flex flex-col">
                <h2 className="text-themeOrange font-proxiSemiBold text-3xl flex gap-x-2 items-center">
                    <img className="h-6" src={logo} alt="logo" />
                    PROJECTS
                </h2>
            </div>

        </div>
    );
}

export default Projects