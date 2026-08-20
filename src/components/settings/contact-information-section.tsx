import { Input } from '@/components/ui/input'
import { Field } from '@/components/settings/field'
import { SettingsCard } from '@/components/settings/settings-card'

export function ContactInformationSection() {
  return (
    <SettingsCard
      title="Contact Information"
      description="Public contact details for inquiries and support."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Official Website" htmlFor="contact-website">
          <Input id="contact-website" type="url" defaultValue="https://esf.gg" />
        </Field>
        <Field label="Contact Email" htmlFor="contact-email">
          <Input id="contact-email" type="email" defaultValue="contact@esf.gg" />
        </Field>
        <Field label="Twitter / X" htmlFor="contact-twitter">
          <Input id="contact-twitter" placeholder="@username" />
        </Field>
        <Field label="Discord Server" htmlFor="contact-discord">
          <Input id="contact-discord" placeholder="Invite Link" />
        </Field>
      </div>
    </SettingsCard>
  )
}
