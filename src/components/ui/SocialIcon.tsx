import React from 'react';

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  label: string;
}

const SocialIcon = ({ href, children, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
    >
      {children}
    </a>
  );
};