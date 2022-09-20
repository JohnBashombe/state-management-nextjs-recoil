import { NextPage } from 'next';
import React, { useState } from 'react';
// import { TextField } from '../components/InputText';

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
  // const [name, setName] = useState('jojo');
  const [isOn, setIsOn] = useState<boolean>(false);
  // const [isYou, setIsYou] = useState<string>('jojo');

  // const onSignUp = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(name);
  //   setName('Kimkya');
  //   console.log(name);
  // };

  console.log(isOn);

  return (
    <div className='flex flex-col space-y-10 w-full h-full justify-center items-center min-h-screen text-gray-900'>
      {isOn ? <span>We have switched on now</span> : null}
      <div
        className={
          `w-1/3 border-8 p-10 space-y-10 ` +
          (isOn ? 'border-red-800 bg-red-300' : 'border-gray-400 bg-black')
        }
      />
      <button
        onClick={() => {
          setIsOn(!isOn);
          // setIsYou('new jojo');
        }}
        className='bg-gray-800 text-white text-sm font-bold px-6 py-2'
      >
        {isOn ? 'Switch Off' : 'Switch On'}
      </button>
      {/* <p className='text-center text-5xl font-bold'>Sign Up</p> */}
      {/* <form onSubmit={onSignUp} className='space-y-4'>
          <TextField label='Username' type='text' required={true} />
          <TextField label='Full Name' type='text' required={false} />
          <TextField label='Email' type='email' required={true} />
          <TextField label='Password' type='password' required={true} />
          <div className='py-10 w-full flex justify-center'>
            <button className='bg-green-800 text-white text-sm font-bold px-6 py-2'>
              Sign Up
            </button>
          </div>
        </form> */}
    </div>
  );
};

export default Home;
