import React from 'react';

interface Props {
  name: string;
  type: string;
  classImg: string;
  form: any;
}
const BusinessType = ({ classImg, name, type, form }: Props) => {
  let isActive = false;
  if (form.data.type === type) {
    isActive = true;
  }
  return (
    <div
      className="
      border-current px-3 pb-3 rounded text-center cursor-pointer
      'min-h-[10rem] flex flex-col justify-around items-center border-2 border-black p-3 w-56 mr-5 mt-5'
      "
      onClick={e => {
        if (isActive) {
          form.setData('type', '');
        } else {
          form.setData('type', type);
        }
      }}
    >
      <div className="text-right pt-2 self-end">
        <input
          checked={isActive ? true : false}
          name="type"
          type="radio"
          required
        />
      </div>
      <div className={classImg + ' text-6xl py-3'}></div>
      <div>{name}</div>
    </div>
  );
};

export default BusinessType;
