import { memo, useContext, useState } from "react";
import ContextGlobal from "../../../../utils/context/_global";
import ContextDashboard from "../../../../utils/context/dashboard/index";
import GenButton from "../../../gen/button";
import GenForm from "../../../gen/form";
import GenProfilePicture from "../../../gen/image/profilePicture";
import styles from "./index.module.css";
const DashboardContent: React.FC = () => {
	const { session } = useContext(ContextGlobal);
	const [projectName, setProjectName] = useState<string>("");
	const [projectDescription, setProjectDescription] = useState<string>("");
	const { projects } = useContext(ContextDashboard);
	const [isCreating, setIsCreating] = useState<boolean>(false);
	const isEmpty = projects.length === 0;

	async function handleSubmit() {
		alert("Submitted");
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
						onClick: () => setIsCreating((prev) => !prev),
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
				<div className={styles.formDiv}>
					<div>
						<p>Enter Project Name:</p>
						<div className={styles.username}>
							<GenProfilePicture
								props={{
									isCircle: true,
									height: 30,
									width: 30,
								}}
							></GenProfilePicture>
							<p>{session?.user.email}/</p>
						</div>
						<input
							type="text"
							placeholder=">> Project name"
							minLength={1}
							maxLength={20}
							required
							pattern="^[A-Za-z]+$"
							className={styles.input}
							value={projectName}
							onChange={(e) => setProjectName(e.currentTarget.value)}
						/>
					</div>
					<p>
						Enter Project Description <span className="note">(optional)</span>
					</p>
					<input
						type="text"
						placeholder=">> Project description"
						minLength={15}
						maxLength={100}
						pattern="^[A-Za-z]+$"
						className={styles.input}
						value={projectDescription}
						onChange={(e) => setProjectDescription(e.currentTarget.value)}
					/>
					<button className={styles.createButton}>Create Project</button>
					<hr />
					<details>
						<summary>What is a project?</summary>
						<p className="summaryNote">
							A project contains all your files, folders, media, and settings.
						</p>
					</details>
				</div>
			</GenForm>
		</section>
	);
};

export default memo(DashboardContent);
