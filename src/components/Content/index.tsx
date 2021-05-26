import React, { useState } from 'react';
import { Button } from 'antd';
import arrows from '../../assets/Arrows.svg'
import more from '../../assets/More.svg'
// import TokenSelect from './TokenSelect';

function Content(): React.ReactElement {

  const coinList = ['PCX','KSX','XBTC'];
  const [CoinSelected, setCoinSelected] = useState('')
  const [isShow, setIsShow] = useState(false)
  function selectedCoin(val:string) {
    setCoinSelected(val)
    setIsShow(!isShow)
  }
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='font-PingFang text-title font-semibold text-black-darker mb-8'>Coin Testnet Faucet</h1>
        <div className='w-424 h-304 bg-white-light shadow-content rounded-2xl px-4 pt-6 pb-8'>
            {/* <TokenSelect /> */}
            <div className='flex flex-col justify-center w-full'>
                <div className='font-xs font-PingFang font-normal text-black-darker mb-1'>Token</div>
                <div className='flex relative'>
                    <div onClick={()=>setIsShow(!isShow)} className='flex justify-between w-full bg-black-dark rounded-lg border border-black-lighter px-3 py-2.5 cursor-pointer hover:border-white-lighter'>
                        <span>{CoinSelected === '' ? <span className='text-black-light'>Select a token</span> : CoinSelected}</span>
                        <img src={isShow ? arrows : more} alt='arrows' className=''/>
                    </div>
                    <div className='absolute right-0 top-12 w-152 bg-white-light shadow-coinList rounded-xl'>
                        {
                            isShow  &&  coinList.map((item)=>{return <div className='cursor-pointer px-4 py-2.5 text-white-darker hover:bg-yellow-light hover:text-yellow-dark' onClick={()=>selectedCoin(item)}>{item}</div>})
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center w-full mt-8'>
                <div className='font-xs font-PingFang font-normal text-black-darker mb-1'>Address</div>
                <input className='addressIpt' placeholder="Enter your address" onChange={(e)=>console.log(e.target.value)}/>
            </div>
            <Button className=''>Obtain</Button> 
        </div>
    </div>
  );
}

export default Content;