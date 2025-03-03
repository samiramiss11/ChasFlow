// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { Label } from "@/components/ui/label";
// type SelectInputProps = {
//   name: string;
//   label?: string;
//   defaultValue?: string;
//   options: string[];
// };

// function SelectInput({ label, name, options, defaultValue }: SelectInputProps) {
//   return (
//     <div className="mb-2 w-full">
//       <Label htmlFor={name} className="capitalize g">
//         {label || name}
//       </Label>
//       <Select defaultValue={defaultValue || options[0]} name={name} className="bg-white w-full border border-gray-300 rounded-md">
//         <SelectTrigger id={name}>
//           <SelectValue />
//         </SelectTrigger>
//         <SelectContent>
//           {options.map((item) => {
//             return (
//               <SelectItem key={item} value={item}>
//                 {item}
//               </SelectItem>
//             );
//           })}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }
// export default SelectInput;

import { ChangeEvent } from 'react'
type FormRowSelectProps = {
  type?: string
  name: string
  labelText?: string
  list: (string | null)[] // Assuming list contains strings
  defaultValue?: string | undefined
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}
import { nanoid } from 'nanoid'
const SelectInput = ({
  name,
  labelText,
  list,
  defaultValue = '',
  onChange,
}: FormRowSelectProps) => {
  return (
    <div className='form-row'>
      <label
        htmlFor={name}
        className='form-label'
      >
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className='form-select'
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {list
          ? list.reduce<React.ReactNode[]>((options, itemValue) => {
              if (itemValue !== null) {
                options.push(
                  <option
                    key={nanoid()}
                    value={itemValue}
                  >
                    {itemValue}
                  </option>
                )
              }
              return options
            }, [])
          : null}
      </select>
    </div>
  )
}
export default SelectInput
