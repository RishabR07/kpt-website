import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About Pages
import AboutPage from "./pages/about/AboutPage";
import GoverningBody from "./pages/about/GoverningBody";
import Administration from "./pages/about/Administration";
import StatutoryCommittee from "./pages/about/StatutoryCommittee";
import AcademicCouncil from "./pages/about/AcademicCouncil";
import IIIC from "./pages/about/IIIC";
import IQAC from "./pages/about/IQAC";
import LifeAtKPT from "./pages/about/LifeAtKPT";

// Department Pages
import CSE from "./pages/departments/CSE";
import Automobile from "./pages/departments/Automobile";
import Chemical from "./pages/departments/Chemical";
import Civil from "./pages/departments/Civil";
import ECE from "./pages/departments/ECE";
import EEE from "./pages/departments/EEE";
import Mechanical from "./pages/departments/Mechanical";
import Polymer from "./pages/departments/Polymer";
import Science from "./pages/departments/Science";

// Academic Pages
import FeeStructure from "./pages/academics/FeeStructure";
import TimeTable from "./pages/academics/TimeTable";
import Calendar from "./pages/academics/Calendar";
import Curriculum from "./pages/academics/Curriculum";
import Courses from "./pages/academics/Courses";

// Admin Pages
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ContentEditor from "./pages/admin/ContentEditor";
import Announcements from "./pages/admin/Announcements";
import Faculty from "./pages/admin/Faculty";
import Settings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/governing-body" element={<GoverningBody />} />
          <Route path="/about/administration" element={<Administration />} />
          <Route path="/about/statutory-committee" element={<StatutoryCommittee />} />
          <Route path="/about/academic-council" element={<AcademicCouncil />} />
          <Route path="/about/iiic" element={<IIIC />} />
          <Route path="/about/iqac" element={<IQAC />} />
          <Route path="/about/life-at-kpt" element={<LifeAtKPT />} />
          
          {/* Department Routes */}
          <Route path="/departments/cse" element={<CSE />} />
          <Route path="/departments/automobile" element={<Automobile />} />
          <Route path="/departments/chemical" element={<Chemical />} />
          <Route path="/departments/civil" element={<Civil />} />
          <Route path="/departments/ece" element={<ECE />} />
          <Route path="/departments/eee" element={<EEE />} />
          <Route path="/departments/mechanical" element={<Mechanical />} />
          <Route path="/departments/polymer" element={<Polymer />} />
          <Route path="/departments/science" element={<Science />} />
          
          {/* Academic Routes */}
          <Route path="/academics/fee-structure" element={<FeeStructure />} />
          <Route path="/academics/time-table" element={<TimeTable />} />
          <Route path="/academics/calendar" element={<Calendar />} />
          <Route path="/academics/curriculum" element={<Curriculum />} />
          <Route path="/academics/courses" element={<Courses />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path=":section/:page" element={<ContentEditor />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
