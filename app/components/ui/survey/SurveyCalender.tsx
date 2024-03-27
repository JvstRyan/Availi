"use client"

import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function SurveyCalender() {
  const initialDays: Date[] = [];
  const [days, setDays] = React.useState<Date[] | undefined>(initialDays);

 console.log(days)
  const footer =
    days && days.length > 0 ? (
      <p className='mt-5'>Je hebt {days.length} datum(s) gekozen.</p>
    ) : (
      <p className='mt-5'>Kies de dagen voor je enquete</p>
    );

  return (
<>
    <DayPicker
      mode="multiple"
      min={1}
      selected={days}
      onSelect={setDays}
      footer={footer}
      styles={{
        caption: {color: 'white'},
        table: {color: 'white', fontSize: '15px', },

      }}
      modifiersStyles={{
        selected: {backgroundColor: '#526BA1', color: 'white'},
      }}
    />
</>
  );
}