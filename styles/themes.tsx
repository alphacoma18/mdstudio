const DarkTheme = () => {
	return (
		// eslint-disable-next-line react/no-unknown-property
		<style jsx global>
			{`
				:root {
					--bg-1: #1a2632;
					--bg-2: #007acc;
					--bg-3: #ffffff;
					--color: #ffffff;
					--canvas-bg: #233343;
					--color-fg-default: #c9d1d9;
					--color-fg-muted: #8b949e;
					--color-fg-subtle: #484f58;
					--color-canvas-default: #0d1117;
					--color-canvas-subtle: #161b22;
					--color-border-default: #30363d;
					--color-border-muted: #21262d;
					--color-neutral-muted: rgba(110, 118, 129, 0.4);
					--color-accent-fg: #58a6ff;
					--color-accent-emphasis: #1f6feb;
					--color-attention-subtle: rgba(187, 128, 9, 0.15);
					--color-danger-fg: #f85149;
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
					--bg-3: #1a2632;
					--color: #000000;
					--canvas-bg: #ffffff;
					--color-fg-default: #24292f;
					--color-fg-muted: #57606a;
					--color-fg-subtle: #6e7781;
					--color-canvas-default: #ffffff;
					--color-canvas-subtle: #f6f8fa;
					--color-border-default: #d0d7de;
					--color-border-muted: hsl(210, 18%, 87%);
					--color-neutral-muted: rgba(175, 184, 193, 0.2);
					--color-accent-fg: #0969da;
					--color-accent-emphasis: #0969da;
					--color-attention-subtle: #fff8c5;
					--color-danger-fg: #cf222e;
				}
			`}
		</style>
	);
};

export default function Theme({ theme }: { theme: boolean }) {
	if (theme === true) return <LightTheme />;
	return <DarkTheme />;
}
