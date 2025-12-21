import { ReactNode } from "react";

interface PageWrapperProps {
    children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#3B82F6] selection:text-white font-sans antialiased">
            {children}
        </main>
    );
};
