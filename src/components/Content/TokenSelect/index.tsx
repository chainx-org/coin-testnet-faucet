import React from 'react';
import { Select } from 'antd';

const {Option} = Select;

function TokenSelect(): React.ReactElement {
  const coinList = ['PCX', 'KSX', 'XBTC'];

  function handleChange(value: any) {
    console.log(`Selected: ${value}`);
  }

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <Select
        placeholder="Select a token"
        onChange={handleChange}
      >
        {coinList.map((item) => {
          return <Option key={item} value={item}>{item}</Option>;
        })}
      </Select>
    </div>
  );
}

export default TokenSelect;
