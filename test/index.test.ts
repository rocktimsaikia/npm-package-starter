import { expect, test } from "vitest";
import { add } from "../src/index";

test("Should do addition without fail", () => {
	expect(add(1, 2)).toBe(3);
});
