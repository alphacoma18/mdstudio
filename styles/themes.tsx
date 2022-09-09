const DarkTheme = () => {
	return (
		// eslint-disable-next-line react/no-unknown-property
		<style jsx global>
			{`
				:root {
					--bg-1: #1a2632;
					--bg-2: #007acc;
					--color: #ffffff;
					--canvas-bg: #233343;
				}
			`}
		</style>
	);
};

const LightTheme = () => {
	return (
		// eslint-disable-next-line react/no-unknown-property
		<style jsx global>
			{`
				:root {
					--bg-1: #ffffff;
					--bg-2: #007acc;
					--color: #000000;
					--canvas-bg: #ffffff;
				}
			`}
		</style>
	);
};

export default function Theme({ theme }: { theme: boolean }) {
	if (theme === true) return <LightTheme />;
	return <DarkTheme />;
}
