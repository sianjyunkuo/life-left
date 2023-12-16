import React, { useState } from 'react';
import { DateInput, YearPicker } from '@mantine/dates';

const LifeCalendar = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [value, setValue] = useState();

  return (
    <>
    <DateInput
      placeholder="Pick date"
      value={birthDate}
      onChange={setBirthDate}
      maxDate={new Date()}
      label="Select your birth date"
      // Add any additional props you need here
    />
    <YearPicker type="multiple" value={value} onChange={setValue} />
    </>
  );
};

export default LifeCalendar;