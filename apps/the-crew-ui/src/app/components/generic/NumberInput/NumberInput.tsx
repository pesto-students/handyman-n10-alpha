import { forwardRef } from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

const NumberInput = forwardRef((props: NumberFormatProps, ref) => {
  const { onChange, ...other } = props;
  return (
    <NumberFormat
      getInputRef={ref}
      {...other}
      onValueChange={({ value }, info) => {
        info.event.target.name = props.name;
        info.event.target.value = value;
        onChange(info.event);
      }}
    ></NumberFormat>
  );
});

export default NumberInput;
