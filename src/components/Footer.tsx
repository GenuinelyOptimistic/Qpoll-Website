import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
	const links = [
		{
			label: "ABOUT US",
			href: "/about",
		},
		{
			label: "PRIVACY POLICY", //Consider changing to "PRIVACY" if more space is needed
			href: "/privacy",
		},
		{
			label: "TERMS OF USE", //Consider changing to "TERMS" if more space is needed
			href: "/terms",
		},
		// Consider adding "SUPPORT" page in the future
		{
			label: "BLOG",
			href: "https://blog.knoli.app",
		},
		{
			label: "TWITTER",
			href: "https://twitter.com/knoliapp",
		},
		{
			label: "FACEBOOK",
			href: "https://facebook.com/knoliapp",
		},
	];

	return (
		<footer className="w-full py-8 px-6 mt-auto">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest text-gray-500 font-medium uppercase">
				<nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
					{links.map((link) => {
						if (link.href.startsWith("/")) {
							return (
								<Link
									key={link.label}
									to={link.href}
									className="hover:text-gray-900 transition-colors"
								>
									{link.label}
								</Link>
							);
						}
						return (
							<a
								key={link.label}
								href={link.href}
								className="hover:text-gray-900 transition-colors"
							>
								{link.label}
							</a>
						);
					})}
				</nav>

				<div className="flex items-center gap-1">
					<span>&copy; Knoli</span>
				</div>
			</div>
		</footer>
	);
}
