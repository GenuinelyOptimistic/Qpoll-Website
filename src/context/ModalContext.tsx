import { createContext, useContext, useState, startTransition } from "react";

interface ModalContextType {
	isOpen: boolean;
	open: () => void;
	close: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<ModalContext.Provider
			value={{
				isOpen,
				open: () => startTransition(() => setIsOpen(true)),
				close: () => setIsOpen(false),
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}

export function useModal() {
	const ctx = useContext(ModalContext);
	if (!ctx) throw new Error("useModal must be used within ModalProvider");
	return ctx;
}
