import React from 'react';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';

function HomePage(): React.ReactElement {

  return (
    <div className='flex flex-col w-full h-full themeBg'>
      <NavBar />
      <Content />
    </div>
  );
}

export default HomePage;
