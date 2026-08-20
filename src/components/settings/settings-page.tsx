import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SettingsNav } from '@/components/settings/settings-nav'
import { OrganizationProfileSection } from '@/components/settings/organization-profile-section'
import { ContactInformationSection } from '@/components/settings/contact-information-section'
import { SystemPreferencesSection } from '@/components/settings/system-preferences-section'
import { DangerZoneSection } from '@/components/settings/danger-zone-section'

export function SettingsPage() {
  return (
    <div className="p-6">
      <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your federation profile, staff access, and system preferences.
          </p>
        </div>
        <Button type="submit" form="general-details-form" className="rounded-full">
          <Download />
          Save Changes
        </Button>
      </header>

      <div className="flex flex-col gap-6 md:flex-row">
        <SettingsNav active="General Details" />

        <form
          id="general-details-form"
          className="flex flex-1 flex-col gap-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <OrganizationProfileSection />
          <ContactInformationSection />
          <SystemPreferencesSection />
          <DangerZoneSection />
        </form>
      </div>
    </div>
  )
}
