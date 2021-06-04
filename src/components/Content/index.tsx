import React, { useState } from 'react';
import { Button, notification } from 'antd';
import axios from 'axios';
import { CheckCircleTwoTone, InfoCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import TokenInput from './TokenInput';
import AddressInput from './AddressInput';

export interface CoinItem {
  id: number;
  name: string;
}

function Content(): React.ReactElement {
  const [coinSelected, setCoinSelected] = useState<CoinItem>({} as CoinItem);
  const [coinAddress, setCoinAddress] = useState<string>('');
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);

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
  console.log(process.env.REACT_APP_REQUEST_URL)
  console.log(process.env)
  console.log(process.env.REQUEST_URL)

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
        const result = await axios.post(`https://faucet-server-pre.chainx.cc/endpoint`, {
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
      <h1 className='font-PingFang text-2xl font-semibold text-black-darker mb-8 mt-12 md:text-title'>Coin Testnet Faucet</h1>
      <div className='w-full h-304 bg-white-light shadow-content rounded-2xl px-4 pt-6 pb-8 md:w-424'>
        <TokenInput coinSelected={coinSelected} setCoinSelected={setCoinSelected}/>
        <AddressInput setCoinAddress={setCoinAddress}/>
        <Button disabled={isBtnDisabled} className={coinSelected && coinAddress && 'obtained'}
                onClick={transmit}>Obtain</Button>
      </div>
    </div>
  );
}

export default Content;
