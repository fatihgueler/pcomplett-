import type { ComponentType } from "react";

type Props = { className?: string };

/**
 * Monochrome Marken-Marken (Quelle: Simple Icons, offene Icon-Sammlung).
 * Hinweis: Die Logos sind Marken der jeweiligen Unternehmen und dürfen nur
 * dort gezeigt werden, wo eine Partnerschaft/Autorisierung besteht.
 */
export function HpLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="HP" fill="currentColor" className={className}>
      <path d="M12.0069 24h-.3572l2.459-6.7453h3.3796c.5907 0 1.2364-.4533 1.4424-1.0166l2.6652-7.3085c.4396-1.1952-.2473-2.1706-1.525-2.1706h-4.6983l-3.929 10.798-2.2255 6.127C3.929 22.434 0 17.6806 0 12.007 0 6.498 3.7092 1.8546 8.7647.4396L6.4705 6.759 2.6514 17.2547h2.5415L8.4488 8.339h1.9095l-3.2558 8.9158H9.644l3.0223-8.3251c.4396-1.1952-.2473-2.1706-1.525-2.1706h-2.143l2.459-6.7453C11.636 0 11.8145 0 11.9931 0 18.6285 0 24 5.3715 24 12.007c.0137 6.6216-5.3578 11.993-11.9931 11.993zM19.2742 8.325h-1.9096l-2.6789 7.336h1.9096l2.6789-7.336z" />
    </svg>
  );
}

export function FujitsuLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="Fujitsu" fill="currentColor" className={className}>
      <path d="M16.56 3C14.15 3 12.04 4.24 10.68 5.97L10.68 9.76C12.5 4.71 16.56 5.08 16.56 5.08C19.5 5.08 21.84 7.38 21.84 10.2C21.84 13.04 19.5 15.33 16.56 15.33A5.32 5.32 0 0 1 12.84 13.83L10.28 11.03A6.06 6.06 0 0 0 6.03 9.32C2.7 9.32 0 11.93 0 15.16C0 18.4 2.7 21 6.03 21C7.9 21 9.58 20.19 10.68 18.89L10.68 15.86C8.88 19.29 6.03 18.92 6.03 18.92C3.9 18.92 2.17 17.24 2.17 15.16C2.17 13.1 3.9 11.42 6.03 11.42C7.09 11.42 8.05 11.84 8.75 12.5L11.31 15.31A7.5 7.5 0 0 0 16.56 17.43C20.67 17.43 24 14.19 24 10.2C24 6.21 20.67 3 16.56 3Z" />
    </svg>
  );
}

export const brandLogoMap: Record<string, ComponentType<Props>> = {
  hp: HpLogo,
  fujitsu: FujitsuLogo,
};
