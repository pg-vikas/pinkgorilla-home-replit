import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Core from "@/pages/Core";
import Apps from "@/pages/Apps";
import Industries from "@/pages/Industries";
import Pricing from "@/pages/Pricing";
import CaseStudies from "@/pages/CaseStudies";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/core" component={Core} />
        <Route path="/apps" component={Apps} />
        <Route path="/industries" component={Industries} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
