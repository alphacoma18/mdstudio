import dynamic from "next/dynamic";

export const DashboardContent = dynamic(() => import("./content"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});
export const DashboardContentProject = dynamic(
	() => import("./content/project"),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);

export const DashboardContentNewProject = dynamic(
	() => import("./content/newProject"),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);
export const DashboardNav = dynamic(() => import("./nav"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});
