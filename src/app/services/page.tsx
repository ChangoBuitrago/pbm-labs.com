import type { Metadata } from "next";
import { ServicesView } from "@/components/views/ServicesView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, identity infrastructure, IoT platform engineering, and security architecture for enterprise B2B teams.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
