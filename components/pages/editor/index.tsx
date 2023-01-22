import dynamic from "next/dynamic";

export const EditorMobileNav = dynamic(() => import("./_mobile/mobileNav"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

export const EditorCanvas = dynamic(() => import("./canvas"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

export const EditorMain = dynamic(() => import("./canvas/editor"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});
export const EditorNav = dynamic(() => import("./nav"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

export const EditorSidebar = dynamic(() => import("./sidebar"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});

export const EditorStatusBar = dynamic(() => import("./statusbar"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});
