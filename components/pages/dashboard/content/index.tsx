import { memo, useContext, useRef, useState } from "react";
import handleAxios from "../../../../utils/axios";
import ContextGlobal from "../../../../utils/context/_global";
import ContextDashboard from "../../../../utils/context/dashboard/index";
import GenButton from "../../../gen/button";
import GenForm from "../../../gen/form";
import styles from "./index.module.css";
const DashboardContent: React.FC = () => {
	const { session } = useContext(ContextGlobal);
	const [projectName, setProjectName] = useState<string>("");
	const [projectDescription, setProjectDescription] = useState<string>("");
	const { projects } = useContext(ContextDashboard);
	const [isCreating, setIsCreating] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const isEmpty = projects.length === 0;

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
			console.log(error);
		}
	}

	return (
		<section className={isEmpty ? styles.sectionNone : styles.section}>
			{/* <button>
				<div className={styles.content}>Hello World</div>
			</button> */}
			{isEmpty && (
				<div className={styles.empty}>
					<h1 className={styles.emptyTitle}>
						You don&apos;t have any projects yet.
					</h1>
					<p className={styles.emptySubtitle}>
						Click the button below to create a new project.
					</p>
					<hr />
				</div>
			)}
			{/* {projects.map((project) => {
				return (
					<IndexContentProject key={project._id.toString()} project={project} />
				);
			})} */}
			<div>
				<GenButton
					props={{
						label: "Create New Project",
						type: "button",
						onClick: () => {
							setIsCreating((prev) => !prev);
							if (inputRef.current && !isCreating) inputRef.current.focus();
						},
						className: styles.mobileNewProject,
					}}
				>
					{isCreating ? (
						<i className="icon-cancel-circled"></i>
					) : (
						<i className="icon-plus-circled"></i>
					)}
				</GenButton>
			</div>
			<GenForm
				props={{
					isActive: isCreating,
					title: "Create New Project",
					submitFunc: handleSubmit,
				}}
			>
				<div className={styles.projectName}>
					<span>Enter Project Name:</span>
					<span>
						anymd.tech/{session && session.user.name}/
						{projectName.toLowerCase().replace(/ /g, "-")}
					</span>
				</div>
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
						onKeyDown={(e) => {
							if (e.key === "Escape") setIsCreating(false);
						}}
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
						A project contains all your files, folders, media, and settings.
						They can be kept private or published publicly for others to view.
					</p>
				</details>
			</GenForm>
		</section>
	);
};

export default memo(DashboardContent);
