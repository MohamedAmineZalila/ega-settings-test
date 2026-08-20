import { Bell, ChevronDown, Contrast, Plus, Search } from 'lucide-react'

import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/60">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-5" />

      <form role="search" className="flex-1 max-w-sm" aria-label="Site search">
        <Label htmlFor="site-search" className="sr-only">
          Search
        </Label>
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="site-search"
            type="search"
            placeholder="Search..."
            className="rounded-full pl-9"
          />
        </div>
      </form>

      <nav aria-label="Quick actions" className="ml-auto flex items-center gap-2">
        <Button className="rounded-full">
          <Plus />
          Organize a tournament
        </Button>

        <Button variant="ghost" size="icon" className="relative rounded-full" aria-label="Notifications">
          <Bell />
          <span
            aria-hidden="true"
            className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-primary"
          />
        </Button>

        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Toggle color theme">
          <Contrast />
        </Button>

        <Button variant="outline" className="rounded-full px-3" aria-label="Change language, current: English">
          EN
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 rounded-full pr-2 pl-1">
              <Avatar className="size-7">
                <AvatarImage src="" alt="" />
                <AvatarFallback>YN</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Yuna</span>
              <ChevronDown className="size-3.5 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  )
}
