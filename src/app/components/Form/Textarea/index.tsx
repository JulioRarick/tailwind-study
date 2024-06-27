import { ComponentProps } from 'react'

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
