import Image from "next/image";
import { siteConfig, type ClientEngagement } from "@/lib/site-config";

type ClientLogoProps = {
  client: Pick<ClientEngagement, "id" | "name">;
  className?: string;
  height?: number;
};

export function ClientLogo({
  client,
  className = "",
  height = 28,
}: ClientLogoProps) {
  return (
    <Image
      src={`/clients/${client.id}.svg`}
      alt={`${client.name} logo`}
      width={160}
      height={32}
      className={`brightness-0 invert opacity-40 transition-opacity duration-300 hover:opacity-75 ${className}`}
      style={{ height, width: "auto", maxWidth: "100%" }}
    />
  );
}

export function ClientLogoBar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 items-center gap-x-8 gap-y-10 ${className}`}
    >
      {siteConfig.clients.map((client) => (
        <div key={client.id} className="flex items-center justify-center px-2">
          <ClientLogo client={client} height={24} />
        </div>
      ))}
    </div>
  );
}
