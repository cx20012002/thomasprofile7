'use client';

import { useRouter } from 'next/navigation';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { gsap } from 'gsap';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const mask = document.createElement('div');
    mask.style.position = 'fixed';
    mask.style.top = '100%';
    mask.style.left = '0';
    mask.style.width = '100%';
    mask.style.height = '100%';
    mask.style.backgroundColor = 'black';
    mask.style.zIndex = '9999';
    document.body.appendChild(mask);

    gsap.to(mask, { top: '0%', duration: 0.5, ease: 'power2.inOut' });

    await sleep(500);
    router.push(href);
    await sleep(500);

    gsap.to(mask, { top: '-100%', duration: 0.5, ease: 'power2.inOut', onComplete: () => {
      document.body.removeChild(mask);
    }});
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className={className}>
      {children}
    </Link>
  );
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}