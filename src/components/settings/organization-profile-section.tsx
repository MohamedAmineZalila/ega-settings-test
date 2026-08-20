import { ImageIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Field } from '@/components/settings/field'
import { SettingsCard } from '@/components/settings/settings-card'

export function OrganizationProfileSection() {
  return (
    <SettingsCard
      title="Organization Profile"
      description="Basic information about your federation visible to the public."
    >
      <div className="space-y-1.5">
        <span className="text-sm font-medium" id="federation-logo-label">
          Federation Logo
        </span>
        <div className="flex items-center gap-4" role="group" aria-labelledby="federation-logo-label">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-dashed border-border bg-muted/40">
            <ImageIcon className="size-6 text-muted-foreground" aria-hidden="true" />
          </div>
          <div className="space-y-1.5">
            <Button type="button" variant="outline" className="rounded-full">
              Upload New Logo
            </Button>
            <p className="text-xs text-muted-foreground">
              Recommended 500&times;500px, PNG or JPG
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Federation Name" htmlFor="federation-name">
          <Input id="federation-name" defaultValue="Esports Federation (ESF)" />
        </Field>
        <Field label="Official Tag / Acronym" htmlFor="federation-tag">
          <Input id="federation-tag" defaultValue="ESF" />
        </Field>
      </div>

      <Field label="About / Bio" htmlFor="federation-bio">
        <Textarea
          id="federation-bio"
          rows={3}
          defaultValue="The official governing body for electronic sports competitions and national team selection."
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Region" htmlFor="federation-region">
          <Input id="federation-region" defaultValue="Europe" />
        </Field>
        <Field label="Country" htmlFor="federation-country">
          <Input id="federation-country" defaultValue="United Kingdom" />
        </Field>
      </div>
    </SettingsCard>
  )
}
