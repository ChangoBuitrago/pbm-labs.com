import type { Metadata } from "next";
import { WorkView } from "@/components/views/WorkView";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Anonymized enterprise consulting and software development engagements across energy infrastructure, identity platforms, and IoT.",
};

export default function WorkPage() {
  return <WorkView />;
}
