import Image from "next/image";
import { siteConfig, type ClientEngagement } from "@/lib/site-config";

type ClientLogoProps = {
  client: Pick<ClientEngagement, "id" | "name" | "logoExt">;
  className?: string;
  height?: number;
};

export function ClientLogo({
  client,
  className = "",
  height = 28,
}: ClientLogoProps) {
  const width = client.logoExt === "png" ? 180 : 160;

  return (
    <Image
      src={`/clients/${client.id}.${client.logoExt}`}
      alt={`${client.name} logo`}
      width={width}
      height={height}
      className={`h-auto w-auto max-w-full opacity-70 transition-opacity duration-300 hover:opacity-100 ${className}`}
      style={{ height, width: "auto" }}
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
          <ClientLogo client={client} height={client.id === "wattwatchers" ? 32 : 22} />
        </div>
      ))}
    </div>
  );
}
