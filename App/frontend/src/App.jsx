import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/NavBar";
import ClassesPage from "./pages/ClassesPage";
import MembersPage from "./pages/MembersPage";
import InstructorsPage from "./pages/InstructorsPage";
import SchedulesPage from "./pages/SchedulesPage";
import UpdateClassPage from "./pages/UpdateClassPage";
import UpdateMemberPage from "./pages/UpdateMemberPage";
import UpdateInstructorPage from "./pages/UpdateInstructorPage";
import UpdateSchedulePage from "./pages/UpdateSchedulePage";
import ScheduleClassPage from "./pages/ScheduleClassPage";
import MemberClassesPage from "./pages/MemberClassesPage";
import ScheduledMembersPage from "./pages/ScheduledMembersPage";
import classes from './data/classes';
import members from "./data/members";
import instructors from "./data/instructors";
import schedules from "./data/schedules";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classes" element={<ClassesPage classes={classes}/>} />
        <Route path="/members" element={<MembersPage members={members} />} />
        <Route path="/instructors" element={<InstructorsPage instructors={instructors}/>} />
        <Route path="/schedules" element={<SchedulesPage schedules={schedules} instructors={instructors} />} />
        <Route path="/update-class" element={<UpdateClassPage />} />
        <Route path="/update-member" element={<UpdateMemberPage />} />
        <Route path="/update-instructor" element={<UpdateInstructorPage classes={classes}/>} />
        <Route path="/update-schedule" element={<UpdateSchedulePage  />} />
        <Route path="/schedule-class" element={<ScheduleClassPage />} />
        <Route path="/member-classes" element={<MemberClassesPage  />} />
        <Route path="/scheduled-members" element={<ScheduledMembersPage />} />


      </Routes>
    </div>
  );
}

export default App;
