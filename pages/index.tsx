import { NextPage } from 'next';
import React, { useState } from 'react';
import InputText from '../components/InputText';
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
  const [isYou, setIsYou] = useState<string>('');

  const [personId, setPersonId] = useState<{
    persons: { name: string; age: number }[];
  }>({
    persons: [
      { name: 'Joel', age: 18 },
      { name: 'Floyd', age: 45 },
    ],
  });

  console.log(isOn);
  console.log(isActivated);
  console.log(isYou);

  const switchNameHandler = () => {
    setPersonId({
      persons: [
        { name: 'Steph', age: 34 },
        { name: 'Curry', age: 29 },
      ],
    });
  };

  return (
    <div>
      <div className='text-gray-600 font-bold'>
        <div className='flex flex-col space-y-2 w-1/3 p-8'>
          <div
            className={
              `border-8 p-7 space-y-3 justify-center items-center ` +
              (isOn ? 'border-red-800 bg-red-300' : 'border-gray-400 bg-black')
            }
          >
            {isOn ? <span>...we have switched On now!{isYou}</span> : null}
          </div>
          <button
            onClick={() => {
              setIsOn(!isOn);
              setIsYou('new jojo');
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

        <div className='p-8'>
          <p>New code Added</p>
          {personId.persons.map((person, index) => {
            return (
              <InputText age={person.age} name={person.name} key={index} />
            );
          })}

          <button
            onClick={switchNameHandler}
            className='bg-black text-white px-4 py-2 my-5'
          >
            Update Array
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
