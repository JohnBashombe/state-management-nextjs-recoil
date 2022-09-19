import { IText } from '../libraries/types';

export const TextField = ({ label, type, required }: IText): JSX.Element => {
  return (
    <div className='flex flex-col space-y-2 text-sm'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={label}
        required={required}
        className='bg-white border-2 border-gray-200 py-2 focus:outline-none px-4 text-xs text-black placeholder:text-xs'
      />
    </div>
  );
};
