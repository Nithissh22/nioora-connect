import { serviceCatalog, serviceCategories } from "../shared/services";

export default function handler(req: any, res: any) {
  res.json({
    services: serviceCatalog,
    categories: serviceCategories,
  });
}
