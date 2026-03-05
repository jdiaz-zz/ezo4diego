import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-[#5C2B84] font-semibold text-zinc-100 hover:bg-[#5C2B84]/90 active:bg-[#5C2B84]/80 active:text-zinc-100/70 dark:bg-[#5C2B84]/85 dark:hover:bg-[#5C2B84]/75 dark:active:bg-[#5C2B84]/70 dark:active:text-zinc-100/70',
  secondary:
    'bg-[#5C2B84]/50 font-medium text-white hover:bg-[#5C2B84]/90 active:bg-[#5C2B84]/80 active:text-white dark:bg-[#5C2B84]/85 dark:text-zinc-300 dark:hover:bg-[#5C2B84]/75 dark:hover:text-zinc-50 dark:active:bg-[#5C2B84]/50 dark:active:text-zinc-50/70',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
