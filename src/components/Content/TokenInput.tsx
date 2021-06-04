import arrows from '../../assets/Arrows.svg';
import more from '../../assets/More.svg';
import React, { useState } from 'react';
import { CoinItem } from './index';
import TokenSelect from './TokenSelect';

interface Props {
  coinSelected: CoinItem;
  setCoinSelected: React.Dispatch<CoinItem>
}

const TokenInput = ({coinSelected, setCoinSelected}: Props): React.ReactElement<Props> => {
  const [isShow, setIsShow] = useState<boolean>(false);
  function selectedCoin(val: CoinItem): void {
    setCoinSelected(val);
    setIsShow(!isShow);
  }

  return (
    <div className='flex flex-col justify-center w-full'>
      <div className='font-xs font-PingFang font-normal text-black-darker mb-1'>Token</div>
      <div className='flex relative'>
        <div onClick={() => setIsShow(!isShow)}
             className='flex justify-between w-full bg-black-dark rounded-lg border border-black-lighter px-3 py-2.5 cursor-pointer hover:border-white-lighter'>
              <span>{!coinSelected.name ?
                <span className='text-black-light'>Select a token</span> : coinSelected.name}</span>
          <img src={isShow ? arrows : more} alt='arrows'/>
        </div>
        {isShow && <TokenSelect selectedCoin={selectedCoin}/>}
      </div>
    </div>
  )
}

export default TokenInput
