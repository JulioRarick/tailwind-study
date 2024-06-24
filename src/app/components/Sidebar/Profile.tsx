/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid items-center gap-2 grid-cols-profile">
      <img
        src="https://github.com/JulioRarick.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Júlio Rarick
        </span>
        <span className="text-sm text-zinc-500 truncate">
          juliorarick@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto p-2 hover:bg-zinc-100 rounded-md"
      >
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}
