import { createFileRoute } from '@tanstack/react-router'

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { SettingsPage } from '@/components/settings/settings-page'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <SettingsPage />
      </SidebarInset>
    </SidebarProvider>
  )
}
