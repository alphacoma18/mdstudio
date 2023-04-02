import dynamicWrapper from "components/wrapper/dynamicWrapper";

export const DashboardContent = dynamicWrapper(() => import("./content"));
export const DashboardContentProject = dynamicWrapper(
	() => import("./content/project")
);
export const DashboardContentNewProject = dynamicWrapper(
	() => import("./content/newProject")
);
export const DashboardNav = dynamicWrapper(() => import("./nav"));
