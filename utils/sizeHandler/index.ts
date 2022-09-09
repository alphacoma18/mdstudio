export default function SizeHandler(
	currentSize: number,
	expected: number,
	item1: any,
	item2: any
) {
	if (currentSize === 0) return "5vw";
	if (currentSize <= expected) return item1;
	return item2;
}
