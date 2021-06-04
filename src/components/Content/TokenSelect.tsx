import { CoinItem } from './index';
import React from 'react';

interface Props{
  selectedCoin: (coinItem: CoinItem) => void;
}

const TokenSelect = ({selectedCoin}: Props): React.ReactElement<Props> => {
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

  return (
    <div className='absolute right-0 top-12 min-w-152 bg-white-light shadow-coinList rounded-xl'>
      {
        coinList.map((item: CoinItem) => {
          return <div
            className='cursor-pointer whitespace-no-wrap px-4 py-2.5 text-white-darker hover:bg-yellow-light hover:text-yellow-dark'
            onClick={() => selectedCoin(item)} key={item.id}>{item.name}</div>;
        })
      }
    </div>
  )
}

export default TokenSelect;
