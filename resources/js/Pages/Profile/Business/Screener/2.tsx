import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';

// import useRoute from '@/Hooks/useRoute';
import BusinessTypes from '@/CustomComponents/BusinessTypes/BusinessTypes';

export default function Dashboard() {
  // const route = useRoute();

  return (
    <AppLayout>
      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="font-bold text-3xl text-center mb-6">
            Choose your main business type
          </h1>
          <BusinessTypes
            BusinessTypes={[
              {
                name: 'Barber 1',
                type: 'Barbers 1',
                classImg: 'icon-appleinc',
              },
              {
                name: 'Barber 2',
                type: 'Barbers 2',
                classImg: 'icon-appleinc',
              },
              {
                name: 'Barber 3',
                type: 'Barbers 3',
                classImg: 'icon-appleinc',
              },
              {
                name: 'Barber 4',
                type: 'Barbers 4',
                classImg: 'icon-appleinc',
              },
              {
                name: 'Barber 5',
                type: 'Barbers 5',
                classImg: 'icon-appleinc',
              },
            ]}
          ></BusinessTypes>
        </div>
      </div>
    </AppLayout>
  );
}
