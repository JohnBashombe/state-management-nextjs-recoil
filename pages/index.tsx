import { NextPage } from 'next';
import React, { useState } from 'react';
/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the home page
 * @returns {JSX.Element}: JSX Code for Home
 * @license MIT
 * @version 1.0.0
 */
const Home: NextPage = (): JSX.Element => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isActivated, setIsActivated] = useState<boolean>(false);
  console.log(isOn);
  console.log(isActivated);

  return (
    <div>
      <div className='text-gray-600 bg-gradient-to-tl from-cyan-600 font-bold justify-center flex flex-col-2'>
        <div className='flex flex-col space-y-2 w-1/3 p-8'>
          <div
            className={
              `border-8 p-7 space-y-3 justify-center items-center ` +
              (isOn ? 'border-red-800 bg-red-300' : 'border-gray-400 bg-black')
            }
          >
            {isOn ? <span>...we have switched On now!</span> : null}
          </div>
          <button
            onClick={() => {
              setIsOn(!isOn);
            }}
            className='bg-gray-800 text-white text-sm font-bold py-2'
          >
            {isOn ? 'Switch Off' : 'Switch On'}
          </button>
        </div>
        <div className='flex flex-col space-y-2 w-1/3 p-8'>
          <div
            className={
              `border-8 p-7 space-y-3 ` +
              (isActivated
                ? 'border-gray-300 bg-white'
                : 'border-gray-400 bg-black')
            }
          >
            {isActivated ? (
              <span className='text-xl'>You switched me On!</span>
            ) : null}
          </div>
          <button
            onClick={() => {
              setIsActivated(!isActivated);
            }}
            className='bg-gray-800 text-white text-sm font-bold py-2'
          >
            {isActivated ? 'Switch Me Off' : 'Click Me'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
