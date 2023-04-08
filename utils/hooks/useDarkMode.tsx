import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
function useDarkMode(): [
	boolean,
	(value: boolean | ((val: boolean) => boolean)) => void
] {
	const [enabledState, setEnabledState] = useLocalStorage<boolean>(
		"dark-mode-enabled",
		false
	);

	// See if user has set a browser or OS preference for dark mode.
	// The usePrefersDarkMode hook composes a useMedia hook (see code below).
	const prefersDarkMode = usePrefersDarkMode();

	// If enabledState is defined use it, otherwise fallback to prefersDarkMode.
	// This allows user to override OS level setting on our website.
	const enabled = enabledState ?? prefersDarkMode;

	// change the dark mode enabled in local storage
	useEffect(() => {
		setEnabledState((prev) => {
			if (typeof window !== "undefined") {
				window.localStorage.setItem(
					"theme-preference",
					prev ? "light" : "dark"
				);
			}
			return prev;
		});
	}, [enabled, setEnabledState]);

	return [enabled, setEnabledState];
}

// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePrefersDarkMode() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default useDarkMode;
