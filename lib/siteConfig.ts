/**
 * Site-wide configuration flags.
 *
 * Set UNDER_CONSTRUCTION_MODE to `false` when ready to launch the full website.
 * The under-construction page will still remain previewable at `/under-construction`.
 */
export const UNDER_CONSTRUCTION_MODE = true;

/**
 * Routes that remain accessible even while UNDER_CONSTRUCTION_MODE is enabled
 * (e.g. app store compliance pages).
 */
export const UNDER_CONSTRUCTION_EXEMPT_PATHS = [
  '/credentials',
  '/privacy',
  '/terms',
  '/delete-account',
];
