/* eslint-disable */
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Industry - Aluplan',
  description: 'Sektör sayfası yönlendirme',
}

export default function Page() {
  redirect("/");
}
