import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
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

// Admission Pages
import AdmissionProcedure from "./pages/admissions/AdmissionProcedure";
import OnlineApplication from "./pages/admissions/OnlineApplication";
import AdmissionFeeStructure from "./pages/admissions/AdmissionFeeStructure";
import Scholarships from "./pages/admissions/Scholarships";

// Student Life Pages
import AntiRagging from "./pages/student-life/AntiRagging";
import Achievements from "./pages/student-life/Achievements";
import AlumniClubs from "./pages/student-life/AlumniClubs";
import StudentUnion from "./pages/student-life/StudentUnion";

// Placements Pages
import PlacementEvents from "./pages/placements/PlacementEvents";
import PlacementContact from "./pages/placements/PlacementContact";

// Information Pages
import Events from "./pages/information/Events";
import CollegeCirculars from "./pages/information/CollegeCirculars";
import Contact from "./pages/information/Contact";
import DepartmentalCirculars from "./pages/information/DepartmentalCirculars";
import DTEK from "./pages/information/DTEK";
import MandatoryFiles from "./pages/information/MandatoryFiles";
import Procurement from "./pages/information/Procurement";
import CCTEK from "./pages/information/CCTEK";
import FAQ from "./pages/information/FAQ";

// Admin Pages
import AdminLayout from "./components/admin/AdminLayout";
import ProtectedAdminRoute from "./components/admin/ProtectedAdminRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ContentEditor from "./pages/admin/ContentEditor";
import Announcements from "./pages/admin/Announcements";
import Faculty from "./pages/admin/Faculty";
import Settings from "./pages/admin/Settings";
import UsersManagement from "./pages/admin/UsersManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
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
            
            {/* Admission Routes */}
            <Route path="/admissions/procedure" element={<AdmissionProcedure />} />
            <Route path="/admissions/online-application" element={<OnlineApplication />} />
            <Route path="/admissions/fee-structure" element={<AdmissionFeeStructure />} />
            <Route path="/admissions/scholarships" element={<Scholarships />} />
            
            {/* Student Life Routes */}
            <Route path="/student-life/anti-ragging" element={<AntiRagging />} />
            <Route path="/student-life/achievements" element={<Achievements />} />
            <Route path="/student-life/alumni-clubs" element={<AlumniClubs />} />
            <Route path="/student-life/student-union" element={<StudentUnion />} />
            
            {/* Placements Routes */}
            <Route path="/placements/events" element={<PlacementEvents />} />
            <Route path="/placements/contact" element={<PlacementContact />} />
            
            {/* Information Routes */}
            <Route path="/information/events" element={<Events />} />
            <Route path="/information/college-circulars" element={<CollegeCirculars />} />
            <Route path="/information/contact" element={<Contact />} />
            <Route path="/information/departmental-circulars" element={<DepartmentalCirculars />} />
            <Route path="/information/dtek" element={<DTEK />} />
            <Route path="/information/mandatory-files" element={<MandatoryFiles />} />
            <Route path="/information/procurement" element={<Procurement />} />
            <Route path="/information/cctek" element={<CCTEK />} />
            <Route path="/information/faq" element={<FAQ />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<ProtectedAdminRoute />}>
              <Route element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path=":section/:page" element={<ContentEditor />} />
                <Route path="announcements" element={<Announcements />} />
                <Route path="faculty" element={<Faculty />} />
                <Route path="users" element={<UsersManagement />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
