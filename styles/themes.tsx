const DarkTheme = () => {
	return (
		<style jsx global>
			{`
				:root {
					--bg-1: #1a2632;
					--bg-2: #007acc;
					--bg-black: #1a2632;
					--color: #ffffff;
					--canvas-bg: #233343;
					-textarea-bg: #ffffff;
					--input-black: #233343;
					--error-red: #ff0000;
					--box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4);
					--fast-transition: all 100ms linear 0s;
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
					--bg-black: #1a2632;
					--bg-yellow: #faee0f;
					--textarea-bg: #ffffff;
					--input-black: #233343;
					--error-red: #ff0000;
					--box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4);
					--fast-transition: all 100ms linear 0s;
				}
			`}
		</style>
	);
};

export default function Theme({ theme }: { theme: boolean }) {
	if (theme === true) return <LightTheme />;
	return <DarkTheme />;
}
