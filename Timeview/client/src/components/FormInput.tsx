import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils';
type FormInputProps = {
  name: string
  type: string
  label?: string
  defaultValue?: string
  className?:string
}

function FormInput({ label, name, type, defaultValue,className='' }: FormInputProps) {
  return (
    <div className='mb-2'>
      <Label
        htmlFor={name}
        className='capitalize'
      >
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
       className={cn('bg-[#ECE9E9]', className)} 
      />
    </div>
  )
}
export default FormInput
