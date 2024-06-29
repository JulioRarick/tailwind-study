import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <div>
      <a
        href=""
        className="group flex items-center gap-1 rounded px-3 py-2 hover:bg-violet-50"
      >
        <Icon className="group-hover:text-violet-400" />
        <span className="text-sm font-medium group-hover:text-violet-500">
          {title}
        </span>
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400" />
      </a>
    </div>
  )
}
