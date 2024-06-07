import React from 'react';

import { useMediaQuery } from 'react-responsive';
import Form from './Form';
import Navbar from './Navbar';
import { ReactComponent as Logo } from './assets/Astrid_logga_white.svg'; // Ensure the path is correct

function App() {
  const isMediumOrLarger = useMediaQuery({ query: '(min-width: 768px)' });
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  return (
      <div className="relative min-h-screen bg-gray-100 flex flex-col">
        {isMediumOrLarger && <Navbar />}
        <div className="flex-grow flex items-center justify-center p-4 relative">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="https://api.astrid.se/wp-content/uploads/2023/01/Astrid_Vittoria.mp4"
            autoPlay
            loop
            muted
            poster="https://api.astrid.se/wp-content/uploads/2023/01/Stillbild_film.jpg"
          />
          <div className="relative z-10 w-full max-w-md p-4 bg-white bg-opacity-90 rounded-lg shadow-lg mx-4 mt-12">
            {isSmallScreen && (
              <div className="absolute top-0 left-0 right-0 flex justify-center mt-[-3rem]">
                <Logo className="h-12" />
              </div>
            )}
              <Form />

          </div>
        </div>
      </div>
  );
}

export default App;
