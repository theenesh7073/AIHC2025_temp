import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Submission from "./pages/Submission";
import Workshops from "./pages/Workshops";
import Speakers from "./pages/Speakers";
import Sponsorship from "./pages/Sponsorship";
import NotFound from "./pages/NotFound";
import Visa from "./pages/Visa";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import ProgramCommittee from "./pages/ProgramCommittee";
import Registration from "./pages/Registration";

import Accommodation from "./pages/Accommodation";
import Venue from "./pages/Venue";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/organizing-committee" element={<OrganizingCommittee />} />
          <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
          <Route path="/program-committee" element={<ProgramCommittee />} />

          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/venue" element={<Venue />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
