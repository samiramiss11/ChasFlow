// import { Popover, PopoverTrigger, PopoverContent } from './your-popover'
// //https://www.radix-ui.com/primitives/docs/components/popover#api-reference
// export default () => (
//   <Popover>
//     <PopoverTrigger>Popover trigger</PopoverTrigger>
//     <PopoverContent>Popover content</PopoverContent>
//   </Popover>
// )

//https://ui.shadcn.com/docs/components/popover

// your-popover.jsx
// import * as React from 'react'
// import { Popover as PopoverPrimitive } from 'radix-ui'

// export const Popover = PopoverPrimitive.Root
// export const PopoverTrigger = PopoverPrimitive.Trigger

// export const PopoverContent = React.forwardRef(
//   ({ children, ...props }, forwardedRef) => (
//     <PopoverPrimitive.Portal>
//       <PopoverPrimitive.Content
//         sideOffset={5}
//         {...props}
//         ref={forwardedRef}
//       >
//         {children}
//         <PopoverPrimitive.Arrow />
//       </PopoverPrimitive.Content>
//     </PopoverPrimitive.Portal>
//   )
// )
