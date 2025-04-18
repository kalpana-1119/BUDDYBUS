
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UserSelection from "./pages/UserSelection";
import PassengerView from "./pages/PassengerView";
import DriverLogin from "./pages/DriverLogin";
import OwnerLogin from "./pages/OwnerLogin";
import BusTracker from "./pages/BusTracker";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/select-user" element={<UserSelection />} />
            <Route path="/passenger" element={<PassengerView />} />
            <Route path="/driver-login" element={<DriverLogin />} />
            <Route path="/owner-login" element={<OwnerLogin />} />
            <Route path="/track/:busId" element={<BusTracker />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
