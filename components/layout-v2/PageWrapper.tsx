import { ReactNode } from "react";

interface PageWrapperProps {
    children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground font-sans antialiased">
            {children}
        </main>
    );
};
