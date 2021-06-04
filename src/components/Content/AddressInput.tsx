import React, { ChangeEvent } from 'react';

interface Props{
  setCoinAddress: React.Dispatch<string>
}

const AddressInput = ({setCoinAddress}: Props): React.ReactElement<Props> => {
  return (
    <div className='flex flex-col justify-center w-full mt-8'>
      <div className='font-xs font-PingFang font-normal text-black-darker mb-1'>Address</div>
      <input className='addressIpt' placeholder="Enter your address"
             onChange={(e: ChangeEvent<HTMLInputElement>) => setCoinAddress(e.target.value)}/>
    </div>
  );
};

export default AddressInput;
