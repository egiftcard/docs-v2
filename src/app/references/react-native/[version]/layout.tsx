import { getTDocLayout } from "@/app/references/components/TDoc/PageLayout";
import { fetchReactNativeDoc } from "@/app/references/components/TDoc/fetchDocs/fetchReactNativeDoc";
import { createMetadata } from "@doc";

export default getTDocLayout({
	getDoc: fetchReactNativeDoc,
	packageSlug: "react-native",
	sdkTitle: "React Native SDK",
});

export const metadata = createMetadata({
	image: {
		title: "egiftcard React Native SDK Reference",
		icon: "react",
	},
	title: "References | egiftcard React Native SDK ",
	description: "Full Reference for egiftcard React Native SDK.",
});

export const revalidate = 3600; // revalidate at most every hour
