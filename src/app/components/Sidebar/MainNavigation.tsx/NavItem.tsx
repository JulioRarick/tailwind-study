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
        className="group flex items-center gap-1 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
      >
        <Icon className="text-zinc-500 group-hover:text-violet-300" />
        <span className="text-sm font-medium group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
          {title}
        </span>
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
      </a>
    </div>
  )
}
