import { Input } from '@/components/ui/input';
import React from 'react';

function InputField({ item,handleinputChange }) {
  return (
    <div>
      <Input
        name={item?.name}
        required={item?.required}
        onChange={(e) =>handleinputChange(item.name,e.target.value)}
      />
    </div>
  );
}

export default InputField;
