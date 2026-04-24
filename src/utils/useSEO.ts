import { useEffect } from "react";

const BASE_URL = "https://knoli.app";
const DEFAULT_DESCRIPTION =
	"Answer polls, share your opinions, and earn real money. Knoli turns crowd-sourced insights into rewards for everyone.";
const DEFAULT_IMAGE = `${BASE_URL}/assets/imgs/sample.png`;

interface SEOProps {
	title: string;
	description?: string;
	keywords?: string;
	canonicalPath?: string;
}

function setMeta(selector: string, attr: string, value: string) {
	let el = document.querySelector(selector);
	if (!el) {
		el = document.createElement("meta");
		const [attrName, attrValue] = selector.match(/\[(.+?)="(.+?)"\]/)!.slice(1);
		el.setAttribute(attrName, attrValue);
		document.head.appendChild(el);
	}
	el.setAttribute(attr, value);
}

export function useSEO({ title, description, keywords, canonicalPath }: SEOProps) {
	useEffect(() => {
		const fullTitle = `${title} | Knoli`;
		const desc = description ?? DEFAULT_DESCRIPTION;

		document.title = fullTitle;

		setMeta('meta[name="description"]', "content", desc);
		if (keywords) setMeta('meta[name="keywords"]', "content", keywords);

		setMeta('meta[property="og:title"]', "content", fullTitle);
		setMeta('meta[property="og:description"]', "content", desc);
		setMeta('meta[property="og:image"]', "content", DEFAULT_IMAGE);

		if (canonicalPath) {
			const url = `${BASE_URL}${canonicalPath}`;
			setMeta('meta[property="og:url"]', "content", url);

			let canonical = document.querySelector('link[rel="canonical"]');
			if (!canonical) {
				canonical = document.createElement("link");
				canonical.setAttribute("rel", "canonical");
				document.head.appendChild(canonical);
			}
			canonical.setAttribute("href", url);
		}

		setMeta('meta[name="twitter:title"]', "content", fullTitle);
		setMeta('meta[name="twitter:description"]', "content", desc);
	}, [title, description, keywords, canonicalPath]);
}
