import handleAxios from "@/axios";
import GenForm from "@/gen/form";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
interface Props {
	props: {
		isActive: boolean;
		setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	};
}
const DashboardContentNewProject: React.FC<Props> = ({
	props: { isActive, setIsActive },
}) => {
	const router = useRouter();
	const [projectName, setProjectName] = useState<string>("");
	const [projectDescription, setProjectDescription] = useState<string>("");
	const inputRef = useRef<HTMLInputElement>(null);
	async function handleSubmit() {
		try {
			const res = await handleAxios({
				method: "post",
				url: "/dashboard/newProject",
				data: {
					projectName,
					projectDescription,
				},
			});
			console.log(res);
			if (res.status === 200) router.push(`/editor/${res.data.id}`);
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<GenForm
			props={{
				isActive,
				title: "Create New Project",
				submitFunc: handleSubmit,
				backFunc: () => setIsActive(false),
				id: "newProjectForm",
			}}
		>
			<label htmlFor="newProjectName" form="newProjectForm">
				Enter Project Name:
			</label>
			<div>
				<input
					id="newProjectName"
					type="text"
					placeholder=">> Project name"
					minLength={1}
					maxLength={20}
					required
					autoComplete="off"
					autoCapitalize="off"
					autoCorrect="off"
					className="inputThin"
					value={projectName}
					onChange={(e) => setProjectName(e.currentTarget.value)}
					ref={inputRef}
				/>
			</div>
			<label htmlFor="newProjectDescription">
				Enter Project Description <span className="note">(optional)</span>
			</label>
			<input
				id="newProjectDescription"
				type="text"
				placeholder=">> Project description"
				maxLength={100}
				autoComplete="off"
				autoCapitalize="off"
				autoCorrect="off"
				className="inputThin"
				value={projectDescription}
				onChange={(e) => setProjectDescription(e.currentTarget.value)}
			/>
			<button className="inputButton">Create Project</button>
			<hr />
			<details>
				<summary>What is a project?</summary>
				<p className="summaryNote">
					A project contains all your files, folders, media, and settings. They
					can be kept private or published publicly for others to view.
				</p>
			</details>
		</GenForm>
	);
};

export default DashboardContentNewProject;
