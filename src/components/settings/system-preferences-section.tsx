import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { SettingsCard } from '@/components/settings/settings-card'

const preferences = [
  {
    id: 'pref-2fa',
    title: 'Two-Factor Authentication (2FA)',
    description: 'Require 2FA for all staff members',
    defaultChecked: true,
  },
  {
    id: 'pref-roster-visibility',
    title: 'Public Roster Visibility',
    description: 'Allow public viewing of national team rosters',
    defaultChecked: true,
  },
  {
    id: 'pref-auto-approve',
    title: 'Auto-Approve Licenses',
    description: 'Automatically approve player license renewals',
    defaultChecked: false,
  },
]

export function SystemPreferencesSection() {
  return (
    <SettingsCard
      title="System Preferences"
      description="Configure your default dashboard settings."
    >
      <ul className="-my-2 divide-y divide-border">
        {preferences.map((preference) => (
          <li
            key={preference.id}
            className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
          >
            <div className="space-y-0.5">
              <Label htmlFor={preference.id} className="text-sm font-medium">
                {preference.title}
              </Label>
              <p className="text-sm text-muted-foreground">
                {preference.description}
              </p>
            </div>
            <Switch id={preference.id} defaultChecked={preference.defaultChecked} />
          </li>
        ))}
      </ul>
    </SettingsCard>
  )
}
