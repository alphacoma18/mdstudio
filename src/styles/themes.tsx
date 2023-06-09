const DarkTheme = () => {
	return (
		<style jsx global>
			{`
				:root {
					--bg-1: #1a2632;
					--bg-2: #007acc;
					--bg-3: #ffffff;
					--color: #ffffff;
					--canvas-bg: #233343;

					--fx-hover: #233343;
					--border-1: 3px solid #ffffff;
				}
			`}
		</style>
	);
};

const LightTheme = () => {
	return (
		<style jsx global>
			{`
				:root {
					--bg-1: #ffffff;
					--bg-2: #007acc;
					--bg-3: #1a2632;
					--color: #000000;
					--canvas-bg: #ffffff;

					--fx-hover: #ddd;
					--border-1: 3px solid #000000;
				}
			`}
		</style>
	);
};

export default function Theme({ theme }: { theme: boolean }) {
	if (theme) return <LightTheme />;
	return <DarkTheme />;
}
