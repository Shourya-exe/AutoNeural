import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Resets scroll position on route change.
 *
 * Without this, navigating from deep in one page to another lands the visitor
 * part-way down the new one, because the browser only restores scroll for real
 * document loads — not client-side transitions.
 */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Anchor links inside a page still need to work, so only reset when the
    // URL carries no fragment.
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
