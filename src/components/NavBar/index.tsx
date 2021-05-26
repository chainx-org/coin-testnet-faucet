import React from 'react';
import ChainxLogo from '../../assets/ChainX_logo.svg'

function NavBar(): React.ReactElement {

  return (
    <div className='flex items-center h-15'>
        <img src={ChainxLogo} alt='ChainxLogo' />
    </div>
  );
}

export default NavBar;
