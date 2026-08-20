import { cn } from '@/lib/utils'

const sections = [
  'General Details',
  'Staff & Permissions',
  'Integrations',
  'Billing & Plan',
  'API Access',
]

export function SettingsNav({ active = 'General Details' }: { active?: string }) {
  return (
    <nav aria-label="Settings sections" className="w-56 shrink-0">
      <ul className="flex flex-col gap-1">
        {sections.map((section) => {
          const isActive = section === active
          return (
            <li key={section}>
              <a
                href="#"
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-secondary font-semibold text-foreground'
                    : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                )}
              >
                {section}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
