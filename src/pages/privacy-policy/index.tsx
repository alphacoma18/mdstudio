import PrivacyPolicyHeader from "@/components/pages/privacy-policy/header";
import PrivacyPolicyBody from "@/components/pages/privacy-policy";
import { NextPage } from "next";
import styles from "./index.module.css";
const PrivacyPolicyPage: NextPage = () => {
	return (
		<section className={styles.section}>
			<ol className={styles.list}>
				<PrivacyPolicyHeader />
				<PrivacyPolicyBody />
			</ol>
		</section>
	);
};

export default PrivacyPolicyPage;
