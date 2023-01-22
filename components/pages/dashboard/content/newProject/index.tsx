import handleAxios from "@/axios";
import GenForm from "@/gen/form";
import { useRef, useState } from "react";
interface Props {
	props: {
		isActive: boolean;
	};
}
const DashboardContentNewProject: React.FC<Props> = ({
	props: { isActive },
}) => {
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
			}}
		>
			<p>Enter Project Name:</p>
			<div>
				<input
					type="text"
					placeholder=">> Project name"
					minLength={1}
					maxLength={20}
					required
					pattern="^[A-Za-z0-9]{1,20}+$"
					className="inputThin"
					value={projectName}
					onChange={(e) => setProjectName(e.currentTarget.value)}
					ref={inputRef}
				/>
			</div>
			<p>
				Enter Project Description <span className="note">(optional)</span>
			</p>
			<input
				type="text"
				placeholder=">> Project description"
				maxLength={100}
				pattern="^[A-Za-z0-9]{,100}+$"
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
