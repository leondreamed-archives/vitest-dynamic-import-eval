import { test } from "vitest";
import { cowsayEval } from "./cowsay.js";

test("test", async () => {
	await cowsayEval();
});
