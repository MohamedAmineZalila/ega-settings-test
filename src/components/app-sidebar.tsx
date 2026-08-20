import {
  Coins,
  HandHeart,
  LayoutGrid,
  ListChecks,
  LogOut,
  Network,
  Scale,
  Settings2,
  Shield,
  SquareUserRound,
  UserRound,
  UsersRound,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

type NavLink = {
  label: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
}

type NavSection = {
  label: string
  links: Array<NavLink>
}

const navSections: Array<NavSection> = [
  {
    label: 'Federation Core',
    links: [{ label: 'Dashboard', icon: LayoutGrid }],
  },
  {
    label: 'Licensing and Registry',
    links: [
      { label: 'Player Licenses', icon: SquareUserRound },
      { label: 'Team Affiliations', icon: UsersRound },
    ],
  },
  {
    label: 'Competitions',
    links: [{ label: 'Tournaments', icon: Network }],
  },
  {
    label: 'National Teams',
    links: [
      { label: 'National Teams', icon: Shield, external: true },
      { label: 'Convocations', icon: ListChecks },
    ],
  },
  {
    label: 'Governance, Compliance and Integrity',
    links: [
      { label: 'Complaints, Sanctions and Appeals', icon: Scale },
      { label: 'Compliance and Integrity', icon: Settings2 },
    ],
  },
  {
    label: 'Administration',
    links: [
      { label: 'Employees', icon: UsersRound },
      { label: 'Finance', icon: Coins },
      { label: 'Sponsors', icon: HandHeart },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-14 justify-center px-4">
        <span className="text-lg font-bold tracking-tight group-data-[collapsible=icon]:hidden">
          Transfer Market
        </span>
      </SidebarHeader>

      <SidebarContent>
        {navSections.map((section) => (
          <SidebarGroup key={section.label}>
            <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.links.map((link) => (
                  <SidebarMenuItem key={link.label}>
                    <SidebarMenuButton asChild tooltip={link.label}>
                      <a href="#">
                        <link.icon />
                        <span>{link.label}</span>
                        {link.external && (
                          <span className="sr-only">(opens in new tab)</span>
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive tooltip="My Profile">
              <a href="#" aria-current="page">
                <UserRound />
                <span>My Profile</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <a href="#">
                <LogOut />
                <span>Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
