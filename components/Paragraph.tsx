import React from 'react';
import { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = (): JSX.Element => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isNum, setIsNum] = useState<boolean>(false);
  const [isYou, setIsYou] = useState<string>('');

  return (
    <div className='space-y-24'>
      <div className='space-y-4'>
        {isOn ? (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            recusandae iusto vero, quia aliquam ea maxime culpa dolore quidem,
            veritatis placeat iste, sapiente labore exercitationem. Aliquid
            excepturi dolore libero iste! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident recusandae iusto vero, quia aliquam ea
            maxime culpa dolore quidem, veritatis placeat iste, sapiente labore
            exercitationem. Aliquid excepturi dolore libero iste!{' '}
          </p>
        ) : (
          <p>
            I am a Developer and I love to code. Coding and Programming requires
            a lot of dedication, Hard Work always pays!, Work hard, work very
            hard so that you will not have to introduce yourself...
          </p>
        )}
        <button
          onClick={() => {
            setIsOn(!isOn);
            setIsYou(isYou);
          }}
          className='border-2 border-gray-900 p-2 font-bold'
        >
          {isOn ? 'Read Less' : 'Read More'}
        </button>
      </div>
      <div className='space-y-4'>
        {isNum ? (
          <p>16-159-BSCS-J</p>
        ) : (
          <p>
            By clicking down you will be able to see your Registration Number
          </p>
        )}
        <button
          onClick={() => {
            setIsNum(!isNum);
          }}
          className='border-2 border-gray-900 p-2 font-bold'
        >
          {isNum ? 'Show Reg No' : <span className='pl-6 pr-6'> Return</span>}
        </button>
      </div>
    </div>
  );
};

export default Home;
