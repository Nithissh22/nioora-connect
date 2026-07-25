import { serviceCatalog, serviceCategories } from "@shared/services";
import * as Icons from "lucide-react";
import React from "react";

type ServicesResponse = {
  services: typeof serviceCatalog;
  categories: typeof serviceCategories;
};

export function useServices() {
  return {
    data: {
      services: serviceCatalog,
      categories: serviceCategories,
    } as ServicesResponse,
    isLoading: false,
    error: null,
  };
}

// Helper component to dynamically render a lucide-react icon by name
export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  // Try to find the exact icon component in lucide-react, fallback to HelpCircle if not found
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  return <IconComponent className={className} />;
}
