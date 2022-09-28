// will be used later in the form validation

// import { IText } from '../libraries/types';

// export const TextField = ({ label, type, required }: IText): JSX.Element => {
//   return (
//     <div className='flex flex-col space-y-2 text-sm'>
//       <label>{label}</label>
//       <input
//         type={type}
//         placeholder={label}
//         required={required}
//         className='bg-white border-2 border-gray-200 py-2 focus:outline-none px-4 text-xs text-black placeholder:text-xs'
//       />
//     </div>
//   );
// };

import React from 'react';

const InputText = ({ name, age }: { name: string; age: number }) => {
  return (
    <div>
      <p>
        Hi,I'm {name} and I am {age} years old!!
      </p>
      <p className='font-normal'>
        Hello World!, I'm {name} by name and I am {age} years old.
      </p>
    </div>
  );
};

export default InputText;
