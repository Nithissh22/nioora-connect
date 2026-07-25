import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Support from "@/pages/support";

// 1. Import both policy files using namespaces
import * as CustomerPolicies from "@/pages/privacy_policies_coustomers";
import * as PartnerPolicies from "@/pages/privacy_policies_partners";

function Router() {
  return (
    <Switch>
      {/* Standard Pages */}
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/support" component={Support} />
      
      {/* 2. CUSTOMER POLICY ROUTES */}
      <Route path="/terms-conditions" component={CustomerPolicies.Terms} />
      <Route path="/privacy-policy" component={CustomerPolicies.Privacy} />
      <Route path="/cancellation-refund" component={CustomerPolicies.Cancellation} />
      <Route path="/shipping-policy" component={CustomerPolicies.Shipping} />

      {/* 3. PARTNER POLICY ROUTES */}
      <Route path="/partner/terms-conditions" component={PartnerPolicies.Terms} />
      <Route path="/partner/privacy-policy" component={PartnerPolicies.Privacy} />
      <Route path="/partner/cancellation-refund" component={PartnerPolicies.Cancellation} />
      <Route path="/partner/shipping-policy" component={PartnerPolicies.Shipping} />
      
      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

import PageLoader from "@/components/ui/PageLoader";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLoader />
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;