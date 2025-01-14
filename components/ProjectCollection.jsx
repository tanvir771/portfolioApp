// ProjectCollection.js
import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectCollection() {
  return (
    <div className="info m-4 py-10 md:py-20 gap-4 columns-1 lg:columns-2 flex-wrap">
      <div className="relative break-inside-avoid">
        <ProjectCard src="https://github.com/tanvir771/FileExplorerMVVM/raw/master/FileExplorerMVVM/Resources/File_Explorer_SS.png" title="File Explorer Desktop App" 
        text="This project involves the creation of a feature-rich File Explorer using C#, with WPF (.NET) and XAML, designed to provide users with a powerful and intuitive file management experience." />
        </div>
        <div className="relative break-inside-avoid">
        <ProjectCard src="https://github.com/tanvir771/Taxi_Time/raw/main/TaxiTimeGIF.gif" title="Taxi Time" 
        text="Taxi Time is a game developed using SFML and C++ that aims to enhance my understanding of project organization and object-oriented programming (OOP) principles. " />
        </div>
        <div className="relative break-inside-avoid">
        <ProjectCard src="https://github.com/tanvir771/Pong/raw/main/Gameplay.gif" title="Pong Basic" 
        text="Pong is one of my first games written in C++. It is built using SFML (Simple and Fast Multimedia Library) and utilies no sprites, offering a classic arcade experience with a twist." />
        </div>
    </div>
  );
};

