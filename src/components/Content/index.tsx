import React, { ChangeEvent, useState } from 'react';
import { Button, notification } from 'antd';
import arrows from '../../assets/Arrows.svg';
import more from '../../assets/More.svg';
import axios from 'axios';
import { CheckCircleTwoTone, InfoCircleOutlined, LoadingOutlined } from '@ant-design/icons';

interface CoinItem {
  id: number;
  name: string;
}

function Content(): React.ReactElement {
  const coinList: CoinItem[] = [
    {
      id: 1,
      name: 'PCX (Sherpax Testnet)',
    },
    {
      id: 2,
      name: 'PCX (Chainx Testnet)'
    }
  ];
  const [coinSelected, setCoinSelected] = useState<CoinItem>();
  const [coinAddress, setCoinAddress] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);

  function selectedCoin(val: CoinItem): void {
    setCoinSelected(val);
    setIsShow(!isShow);
  }

  function addressChange(val: string): void {
    setCoinAddress(val);
  }

  const judgeWssNet = (wssId: number): string => {
    switch (wssId) {
      case 1:
        return 'wss://xbridge.spiderx.pro/ws';
      case 2:
        return 'wss://testnet-2.chainx.org/ws';
      default:
        return '';
    }
  };

  const transmit = async () => {
    if (coinSelected?.name && coinAddress) {
      const currentUrl = judgeWssNet(coinSelected?.id!);
      try {
        notification.info({
          key: 'success',
          icon: <LoadingOutlined style={{'color': '#fdcb75'}}/>,
          duration: null,
          message: 'Transaction confirmation'
        });
        setIsBtnDisabled(true);
        const result = await axios.post(`${process.env.REQUEST_URL!}endpoint`, {
          'address': coinAddress,
          'amount': '5',
          'url': currentUrl
        });
        if (result.data === 'LIMIT') {
          result.data && notification.info({
            key: 'success',
            icon: <InfoCircleOutlined style={{'color': 'red'}}/>,
            duration: 4.5,
            message: `Fail: ${result.data}`
          });
        } else {
          result.data && notification.info({
            key: 'success',
            icon: <CheckCircleTwoTone twoToneColor="#52c41a"/>,
            duration: 4.5,
            message: `${result.data}: tokens obtained`
          });
        }

        setIsBtnDisabled(false);
      } catch (err) {
        notification.destroy();
        notification.error({message: `${err.message}`});
        setIsBtnDisabled(false);
      }
    } else {
      notification.error({message: 'No currency selected or no address entered!'});
    }

  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-PingFang text-2xl font-semibold text-black-darker mb-8 mt-12 md:text-title'>Coin Testnet
        Faucet</h1>
      <div className='w-full h-304 bg-white-light shadow-content rounded-2xl px-4 pt-6 pb-8 md:w-424'>
        {/* <TokenSelect /> */}
        <div className='flex flex-col justify-center w-full'>
          <div className='font-xs font-PingFang font-normal text-black-darker mb-1'>Token</div>
          <div className='flex relative'>
            <div onClick={() => setIsShow(!isShow)}
                 className='flex justify-between w-full bg-black-dark rounded-lg border border-black-lighter px-3 py-2.5 cursor-pointer hover:border-white-lighter'>
              <span>{!coinSelected?.name ?
                <span className='text-black-light'>Select a token</span> : coinSelected?.name}</span>
              <img src={isShow ? arrows : more} alt='arrows' className=''/>
            </div>
            <div className='absolute right-0 top-12 min-w-152 bg-white-light shadow-coinList rounded-xl'>
              {
                isShow && coinList.map((item: CoinItem) => {
                  return <div
                    className='cursor-pointer whitespace-no-wrap px-4 py-2.5 text-white-darker hover:bg-yellow-light hover:text-yellow-dark'
                    onClick={() => selectedCoin(item)} key={item.id}>{item.name}</div>;
                })
              }
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center w-full mt-8'>
          <div className='font-xs font-PingFang font-normal text-black-darker mb-1'>Address</div>
          <input className='addressIpt' placeholder="Enter your address"
                 onChange={(e: ChangeEvent<HTMLInputElement>) => addressChange(e.target.value)}/>
        </div>
        <Button disabled={isBtnDisabled} className={coinSelected && coinAddress && 'obtained'}
                onClick={transmit}>Obtain</Button>
      </div>
    </div>
  );
}

export default Content;
