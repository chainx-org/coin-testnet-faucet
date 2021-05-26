import React from 'react';
import ChainxLogo from '../../assets/ChainX_logo.svg'

function NavBar(): React.ReactElement {

  return (
    <div className=''>
        <img src={ChainxLogo} alt='ChainxLogo' />
    </div>
  );
}

export default NavBar;
