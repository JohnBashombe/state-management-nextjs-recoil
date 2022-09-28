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
  const [isYou, setIsYou] = useState<string>('');
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isActivated, setIsActivated] = useState<boolean>(false);

  type IType = { name: string; age: number };
  const [group, setGroup] = useState<{
    persons: IType[];
  }>({
    persons: [
      { name: 'Joel', age: 17 },
      { name: 'Floyd', age: 19 },
    ],
  });

  const resetAge = () => {
    setGroup({
      persons: [
        { name: 'Joel', age: 17 },
        { name: 'Floyd', age: 19 },
      ],
    });
  };

  const addAge = () => {
    setGroup({
      persons: [
        { name: 'Joel', age: group.persons[0].age + 1 },
        { name: 'Floyd', age: group.persons[1].age + 1 },
      ],
    });
  };

  const reduceAge = () => {
    setGroup({
      persons: [
        {
          name: 'Joel',
          age:
            group.persons[0].age > 17
              ? group.persons[0].age - 1
              : group.persons[0].age,
        },
        {
          name: 'Floyd',
          age:
            group.persons[0].age > 17
              ? group.persons[0].age - 1
              : group.persons[0].age,
        },
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

        <div className='p-8 space-x-4'>
          <p>New code Added</p>

          {group.persons.map((group, index) => {
            return <InputText age={group.age} name={group.name} key={index} />;
          })}

          <button
            onClick={resetAge}
            className='bg-black text-white px-4 py-2 my-5'
          >
            Reset Age
          </button>

          <button
            onClick={addAge}
            className='bg-black text-white px-4 py-2 my-5'
          >
            Be 1 Year Old
          </button>

          <button
            onClick={reduceAge}
            className='bg-black text-white px-4 py-2 my-5'
          >
            Be 1 Year Young
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
