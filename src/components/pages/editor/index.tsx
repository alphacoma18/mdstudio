import dynamicWrapper from "@/components/wrapper/dynamicWrapper";

export const EditorMobileNav = dynamicWrapper(
	() => import("./_mobile/mobileNav")
);
export const EditorCanvas = dynamicWrapper(() => import("./canvas"));
export const EditorMain = dynamicWrapper(() => import("./canvas/editor"));
export const EditorNav = dynamicWrapper(() => import("./nav"));
export const EditorSidebar = dynamicWrapper(() => import("./sidebar"));
export const EditorStatusBar = dynamicWrapper(() => import("./statusbar"));
export const EditorFileExplorer = dynamicWrapper(
	() => import("./sidebar/fileExplorer")
);
