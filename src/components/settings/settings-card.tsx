import { cn } from '@/lib/utils'

export function SettingsCard({
  title,
  description,
  children,
  className,
  ...props
}: React.ComponentProps<'section'> & {
  title: string
  description: string
}) {
  return (
    <section
      className={cn('rounded-2xl border border-border bg-card', className)}
      {...props}
    >
      <header className="space-y-1 border-b border-border p-6">
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </header>
      <div className="space-y-6 p-6">{children}</div>
    </section>
  )
}
