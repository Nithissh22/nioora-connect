import { useQuery } from "@tanstack/react-query";
import type { ServiceItem } from "@shared/services";
import * as Icons from "lucide-react";
import React from "react";

type ServicesResponse = {
  services: ServiceItem[];
  categories: string[];
};

export function useServices() {
  return useQuery<ServicesResponse>({
    queryKey: ["/api/services"],
  });
}

// Helper component to dynamically render a lucide-react icon by name
export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  // Try to find the exact icon component in lucide-react, fallback to HelpCircle if not found
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}
