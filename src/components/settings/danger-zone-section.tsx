import { Button } from '@/components/ui/button'

export function DangerZoneSection() {
  return (
    <section className="rounded-2xl border border-destructive/40 bg-card">
      <header className="space-y-1 border-b border-destructive/40 p-6">
        <h2 className="text-base font-semibold text-destructive">Danger Zone</h2>
        <p className="text-sm text-muted-foreground">
          Irreversible actions for your federation account.
        </p>
      </header>
      <div className="flex items-center justify-between gap-4 p-6">
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Deactivate Organization</p>
          <p className="text-sm text-muted-foreground">
            Temporarily disable all public pages and competitions.
          </p>
        </div>
        <Button type="button" variant="destructive" className="rounded-full">
          Deactivate
        </Button>
      </div>
    </section>
  )
}
