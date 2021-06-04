import React from 'react';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';

function HomePage(): React.ReactElement {

  return (
    <div className='px-5 flex flex-col w-full h-full themeBg md:px-4'>
      <NavBar />
      <Content />
    </div>
  );
}

export default HomePage;
