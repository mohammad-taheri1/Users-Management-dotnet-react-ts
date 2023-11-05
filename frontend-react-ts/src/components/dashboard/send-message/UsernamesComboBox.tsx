import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

interface IProps {
  usernames: string[];
  control: Control<any, any>;
  name: string;
  error?: string;
}

const UsernamesComboBox = ({ usernames, control, name, error }: IProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showComboBox, setShowComboBox] = useState<boolean>(false);

  const renderTopRow = () => {
    if (error) {
      return <span className='text-red-600 font-semibold'>{error}</span>;
    }
    return <label className='font-semibold'>To</label>;
  };

  let usernamesToShow = inputValue ? usernames.filter((q) => q.includes(inputValue)) : usernames;

  const dynamicClassName = error ? 'border-red-500 rounded-lg' : 'border-[#754eb477]';

  return (
    <div className='px-4 my-2 w-9/12'>
      {renderTopRow()}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              type='text'
              autoComplete='off'
              className={dynamicClassName}
              value={inputValue}
              onChange={(event) => {
                if (!showComboBox) {
                  setShowComboBox(true);
                }
                let { value } = event.target;
                setInputValue(value);
                field.onChange(value);
                if (usernames.includes(value)) {
                  setShowComboBox(false);
                }
              }}
              onFocus={() => setShowComboBox(true)}
            />
            {showComboBox && usernamesToShow.length > 0 ? (
              <div className='relative'>
                <div className='absolute p-2 top-0 left-0 right-0 bg-gray-200'>
                  {usernamesToShow.map((item, index) => (
                    <div
                      key={index}
                      className='p-1 m-2 bg-white rounded-lg  font-semibold cursor-pointer'
                      onClick={() => {
                        setInputValue(item);
                        setShowComboBox(false);
                        field.onChange(item);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </>
        )}
      />
    </div>
  );
};

export default UsernamesComboBox;
