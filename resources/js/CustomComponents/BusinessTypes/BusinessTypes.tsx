import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import PrimaryButton from '@/Components/PrimaryButton';
import classNames from 'classnames';
import BusinessType from './BusinessType';

interface Props {
  BusinessTypes: BusinessType[];
}
export interface BusinessType {
  name: string;
  type: string;
  classImg: string; // css class of image
}

const BusinessTypes = ({ BusinessTypes }: Props) => {
  const form = useForm({
    type: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post('/user/business/location', {
      onFinish: () => form.reset('type'),
    });
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-wrap justify-start">
          {BusinessTypes.map((bt, i) => {
            return (
              <BusinessType
                name={bt.name}
                type={bt.type}
                classImg={bt.classImg}
                form={form}
                key={i}
              ></BusinessType>
            );
          })}
        </div>
      </form>
      <PrimaryButton
        className={classNames(
          'main-bg-c text-white w-full text-center rounded',
          { 'opacity-25': form.processing },
        )}
        disabled={form.processing}
      >
        Continue
      </PrimaryButton>
    </div>
  );
};

export default BusinessTypes;
