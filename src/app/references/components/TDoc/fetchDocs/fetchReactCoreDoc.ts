import { fetchJSON } from "@/lib/fetchJSON";
import { transform } from "typedoc-better-json";
import { withCache } from "../../../../../lib/withCache";

export async function fetchReactCoreDoc() {
	const URL =
		"https://raw.githubusercontent.com/egiftcard/js/main/legacy_packages/react-core/typedoc/documentation.json.gz";
	const doc = await withCache(() => fetchJSON(URL), {
		cacheKey: URL,
		// cache for 10min
		cacheTime: 10 * 60 * 1000,
	});

	return transform(doc);
}
