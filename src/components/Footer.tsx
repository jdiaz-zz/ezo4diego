import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-[#5C2B84] dark:hover:text-[#5C2B84]/85"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-[#656569]/10 pt-10 pb-16 dark:border-[#656569]/10">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-[#656569]/75 dark:text-[#656569]/50">
                <NavLink href="/memorial-services">Memorial Services</NavLink>
                <NavLink href="/in-memory-of-ezo">In Memory of Ezo</NavLink>
                <NavLink href="/scholarship-fund">Scholarship Fund</NavLink>
              </div>
              <p className="text-sm text-[#656569]/50 dark:text-[#656569]/50">
                &copy; {new Date().getFullYear()} Ezo4Diego Scholarship Fund. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
