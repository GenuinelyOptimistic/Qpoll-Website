import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import { useModal } from "../context/ModalContext";

const INDUSTRIES = [
	"Agriculture",
	"Architecture & Design",
	"Arts & Creative",
	"Consulting & Professional Services",
	"Construction & Trades",
	"Education",
	"Engineering",
	"Finance & Banking",
	"Food & Hospitality",
	"Government & Public Sector",
	"Healthcare & Medicine",
	"Human Resources",
	"Legal Services",
	"Manufacturing",
	"Marketing & Advertising",
	"Media & Entertainment",
	"Non-profit & Social Services",
	"Real Estate",
	"Retail & E-commerce",
	"Science & Research",
	"Sports & Fitness",
	"Technology & Software",
	"Transportation & Logistics",
	"Student",
	"Unemployed",
	"Other",
];

const AGE_RANGES = [
	"Under 18",
	"18–24",
	"25–34",
	"35–44",
	"45–54",
	"55–64",
	"65+",
];

const GENDERS = ["Male", "Female", "Other"];

const selectClass =
	"w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-700 bg-white appearance-none cursor-pointer";

export function BetaAccessModal() {
	const { isOpen, close } = useModal();
	const [form, setForm] = useState({
		email: "",
		age: "",
		gender: "",
		industry: "",
	});
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		if (!isOpen) {
			setForm({ email: "", age: "", gender: "", industry: "" });
			setStatus("idle");
			setErrorMessage("");
		}
	}, [isOpen]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");
		setErrorMessage("");

		try {
			const res = await fetch("/api/beta-signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			const data = await res.json();
			if (!res.ok) {
				setErrorMessage(
					data.error || "Something went wrong. Please try again.",
				);
				setStatus("error");
				return;
			}
			setStatus("success");
		} catch {
			setErrorMessage(
				"Unable to submit your request. Please check your connection and try again.",
			);
			setStatus("error");
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) close();
	};

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm${isOpen ? "" : " hidden"}`}
			onClick={handleBackdropClick}
		>
			<div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
				<button
					onClick={close}
					className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
					aria-label="Close"
				>
					<X className="w-5 h-5" />
				</button>

				{status === "success" ? (
					<div className="text-center p-10">
						<div className="flex justify-center mb-4">
							<CheckCircle className="w-14 h-14 text-green-500" />
						</div>
						<h3 className="text-xl font-bold text-gray-900 mb-2">
							You're on the list!
						</h3>
						<p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
							Thanks for signing up. We'll be in touch as soon as
							your early access is ready.
						</p>
						<button
							onClick={close}
							className="mt-6 px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
						>
							Done
						</button>
					</div>
				) : (
					<div className="p-8">
						<div className="mb-6">
							<h2 className="text-xl font-bold text-gray-900 mb-2">
								Request Beta Access
							</h2>
							<p className="text-sm text-gray-500 leading-relaxed">
								Thank you for your interest in Knoli. Fill out
								the details below and we'll be in touch shortly.
							</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1.5">
									Email address
								</label>
								<input
									type="email"
									name="email"
									required
									value={form.email}
									onChange={handleChange}
									placeholder="you@example.com"
									className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder:text-gray-400"
								/>
							</div>

							<div className="grid grid-cols-2 gap-3">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1.5">
										Age range
									</label>
									<select
										name="age"
										required
										value={form.age}
										onChange={handleChange}
										className={selectClass}
									>
										<option value="" disabled>
											Select age range
										</option>
										{AGE_RANGES.map((range) => (
											<option key={range} value={range}>
												{range}
											</option>
										))}
									</select>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1.5">
										Gender
									</label>
									<select
										name="gender"
										required
										value={form.gender}
										onChange={handleChange}
										className={selectClass}
									>
										<option value="" disabled>
											Select gender
										</option>
										{GENDERS.map((g) => (
											<option key={g} value={g}>
												{g}
											</option>
										))}
									</select>
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1.5">
									Industry / Occupation
								</label>
								<select
									name="industry"
									required
									value={form.industry}
									onChange={handleChange}
									className={selectClass}
								>
									<option value="" disabled>
										Select your industry
									</option>
									{INDUSTRIES.map((ind) => (
										<option key={ind} value={ind}>
											{ind}
										</option>
									))}
								</select>
							</div>

							{status === "error" && errorMessage && (
								<p className="text-red-500 text-xs">
									{errorMessage}
								</p>
							)}

							<button
								type="submit"
								disabled={status === "loading"}
								className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium text-sm hover:bg-gray-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
							>
								{status === "loading"
									? "Submitting..."
									: "Request Beta Access"}
							</button>

							<p className="text-xs text-gray-400 text-center leading-relaxed pt-1 font-light">
								This information is necessary to ensure a
								diverse group of early access users across the
								Knoli community.
							</p>
						</form>
					</div>
				)}
			</div>
		</div>
	);
}
