export type ServiceItem = {
  id: string;
  name: string;
  category: string;
  icon: string;
};

export const serviceCatalog: ServiceItem[] = [
  { id: "tv", name: "TV", category: "Electronics", icon: "Tv" },
  { id: "home-theatre", name: "Home Theatre System", category: "Electronics", icon: "Monitor" },
  { id: "projector", name: "Projector", category: "Electronics", icon: "Projector" },
  { id: "set-top-box", name: "Set Top Box", category: "Electronics", icon: "Box" },
  { id: "refrigerator", name: "Refrigerator", category: "Appliances", icon: "Refrigerator" },
  { id: "washing-machine", name: "Washing Machine", category: "Appliances", icon: "Waves" },
  { id: "dishwasher", name: "Dishwasher", category: "Appliances", icon: "UtensilsCrossed" },
  { id: "microwave", name: "Microwave Oven", category: "Appliances", icon: "Microwave" },
  { id: "water-purifier", name: "Water Purifier", category: "Appliances", icon: "Droplets" },
  { id: "kitchen-chimney", name: "Kitchen Chimney", category: "Appliances", icon: "CookingPot" },
  { id: "ac", name: "Air Conditioner", category: "Appliances", icon: "AirVent" },
  { id: "air-cooler", name: "Air Cooler", category: "Appliances", icon: "Wind" },
  { id: "geyser", name: "Geyser / Water Heater", category: "Appliances", icon: "Thermometer" },
  { id: "laptop", name: "Laptop", category: "Electronics", icon: "Laptop" },
  { id: "printer", name: "Printer", category: "Electronics", icon: "Printer" },
  { id: "cctv", name: "CCTV Camera", category: "Electronics", icon: "Cctv" },
  { id: "router", name: "Wi-Fi Router", category: "Electronics", icon: "Router" },
  { id: "inverter", name: "Inverter", category: "Electronics", icon: "BatteryCharging" },
  { id: "electrical", name: "Electrical", category: "Home Services", icon: "Zap" },
  { id: "plumbing", name: "Plumbing", category: "Home Services", icon: "Wrench" },
  { id: "wiring", name: "Wiring", category: "Home Services", icon: "Cable" },
  { id: "fan", name: "Fan", category: "Home Services", icon: "Fan" },
  { id: "grinder", name: "Grinder", category: "Appliances", icon: "Blend" },
];

export const serviceCategories = ["All", "Appliances", "Electronics", "Home Services"];
