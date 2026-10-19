import type { KeyboardEvent } from "react";

/**
 * Arrow-key / Home / End navigation for a WAI-ARIA tablist.
 * Moves focus to the next tab and activates it, matching the
 * recommended tabs keyboard interaction pattern.
 */
export function onTabListKeyDown(event: KeyboardEvent<HTMLElement>) {
  const handled = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
  if (!handled.includes(event.key)) return;

  const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const currentIndex = tabs.findIndex((tab) => tab === document.activeElement);
  if (currentIndex === -1) return;

  event.preventDefault();
  let nextIndex = currentIndex;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (currentIndex + 1) % tabs.length;
  else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  else if (event.key === "Home") nextIndex = 0;
  else if (event.key === "End") nextIndex = tabs.length - 1;

  const nextTab = tabs[nextIndex];
  nextTab.focus();
  nextTab.click();
}
