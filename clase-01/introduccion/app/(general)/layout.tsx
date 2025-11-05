import { Navbar } from "@/components";
import React from "react";

export default function GeneralLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
        <>
            <Navbar />
        	<section style={{ padding: "2rem" }}>
                <header>
                    <h1>Zona General</h1>
                </header>
                <main>{children}</main>
            </section>
        </>
	);
}
