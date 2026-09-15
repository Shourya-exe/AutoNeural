import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Seo } from '@/components/Seo';
import { ScrollToTop } from '@/components/ScrollToTop';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';

import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Industries from '@/pages/Industries';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Aivora from '@/pages/Aivora';
import AiChatbots from '@/pages/AiChatbots';
import WebsiteDevelopment from '@/pages/WebsiteDevelopment';
import Founders from '@/pages/Founders';
import TeamMembers from '@/pages/TeamMembers';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * Every path here must also appear in src/lib/seo.ts — that file is what makes
 * a route prerendered and listed in the sitemap.
 */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/industries" component={Industries} />
      <Route path="/about" component={About} />
      <Route path="/founders" component={Founders} />
      <Route path="/team-members" component={TeamMembers} />
      <Route path="/contact" component={Contact} />
      <Route path="/aivora" component={Aivora} />
      <Route path="/ai-chatbots" component={AiChatbots} />
      <Route path="/website-development" component={WebsiteDevelopment} />
      <Route component={NotFound} />
    </Switch>
  );
}

type AppProps = {
  /** Set by the prerenderer so wouter resolves the route without a browser. */
  ssrPath?: string;
};

function App({ ssrPath }: AppProps = {}) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter
          base={import.meta.env.BASE_URL.replace(/\/$/, '')}
          ssrPath={ssrPath}
        >
          <Seo />
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <FloatingWhatsApp />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
