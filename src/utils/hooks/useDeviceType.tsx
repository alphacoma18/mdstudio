import { IContextGlobal } from "@/context/_global/type";
import { useState } from "react";
const useDeviceType = () => {
	const getDeviceType = (
		handheld: IContextGlobal["device"]["type"],
		desktop: IContextGlobal["device"]["type"],
	): IContextGlobal["device"] => {
		return {
			type: window.innerWidth <= 768 ? handheld : desktop,
			isHandheld: window.innerWidth <= 768,
		};
	};

	const [device] = useState<IContextGlobal["device"]>(() => {
		if (typeof window === "undefined")
			return {
				type: "desktop",
				isHandheld: false,
			};
		const width = window.innerWidth;
		if (width <= 768) return getDeviceType("mobile", "tablet");
		return getDeviceType("tablet", "desktop");
	});
	return device;
};

export default useDeviceType;
