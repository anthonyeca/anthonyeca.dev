/** Single source of truth for site-wide constants. */
export const SITE = {
  name: 'Anthony Challout',
  url: 'https://anthonyeca.dev',
  email: 'anthonyeca.dev@gmail.com',
  linkedin: 'https://linkedin.com/in/anthonyeca',
  github: 'https://github.com/anthonyeca',
  twitter: '@_anthonyeca',
} as const

export const MAILTO = `mailto:${SITE.email}`