import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './MainNavigation.tsx/NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-3 border-r border-zinc-300 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <div>
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </div>
      <div className="mt-auto flex flex-col gap-1">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Cog} />
      </div>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200"></div>
      <Profile />
    </aside>
  )
}
