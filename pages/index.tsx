import { NextPage } from 'next';
import React, { useState } from 'react';
import InputText from '../components/InputText';
import Paragraph from '../components/Paragraph';
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
        { name: 'Tiana', age: 29 },
      ],
    });
  };

  return (
    <div className='flex '>
      <div className='text-gray-600 font-bold w-[50%]'>
        <div className='flex flex-col space-y-2  p-8'>
          <div
            className={
              `border-8 p-7 space-y-3 justify-center items-center ` +
              (isOn
                ? 'border-red-800 bg-slate-100'
                : 'border-gray-400 bg-black')
            }
          >
            {isOn ? <span>...we have switched On now!{isYou}</span> : null}
          </div>
          <button
            onClick={() => {
              setIsOn(!isOn);
              setIsYou(
                'Lorem ipsum dolor sit amet consecteturadipisicing elit. Ducimus ipsa molestias libero nemo, ipsam eiusanimi fugiat enim saepe sed fuga, alias quam eum modi. Quo enim numquam ex nam.'
              );
            }}
            className='bg-gray-800 text-white text-sm font-bold py-2'
          >
            {isOn ? 'Switch Off' : 'Switch On'}
          </button>
        </div>
        <div className='flex flex-col space-y-2 p-8'>
          <div
            className={
              `border-8 p-7 space-y-3 ` +
              (isActivated
                ? 'border-gray-300 bg-white'
                : 'border-gray-400 bg-black')
            }
          >
            {isActivated ? (
              <span className='text-xl'>
                You switched me On! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ducimus ipsa molestias libero nemo, ipsam eius
                animi fugiat enim saepe sed fuga, alias quam eum modi. Quo enim
                numquam ex nam.
              </span>
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
            onClick={switchNameHandler} // I tried my best to load back the initial array by unsuccessful!
            className='bg-black text-white px-4 py-2 my-5'
          >
            Update array
          </button>
        </div>
      </div>
      <div className='m-9 w-2/4'>
        <Paragraph />
      </div>
    </div>
  );
};

export default Home;
