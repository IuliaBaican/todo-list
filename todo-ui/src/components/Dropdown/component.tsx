import {
  InputLabel,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material';

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  onChange: (value: string) => void;
  value: string;
  name: string;
  label: string;
  options: Option[];
};

export const Dropdown = ({
  value,
  name,
  label,
  options,
  onChange,
}: DropdownProps) => {
  const handleOnChange = (e: SelectChangeEvent<string>) => {
    onChange(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        id={`${name}-select`}
        value={value}
        label={label}
        onChange={handleOnChange}
        name={name}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
