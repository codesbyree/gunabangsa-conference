import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import HomePage from './pages/HomePage';
import VenuePage from './pages/VenuePage';
import CommitteePage from './pages/CommitteePage';
import RegistrationPage from './pages/RegistrationPage';
import ProgramPage from './pages/ProgramPage';
import InitialSubmissionPage from './pages/InitialSubmissionPage';
import RevisedSubmissionPage from './pages/RevisedSubmissionPage';
import FinalCameraReadyPage from './pages/FinalCameraReadyPage';
import PresentationInstructionsPage from './pages/PresentationInstructionsPage';
import PaperUploadFaqsPage from './pages/PaperUploadFaqsPage';
import FaqPage from './pages/FaqPage';
import GalleryPage from './pages/GalleryPage';
import PartnersPage from './pages/PartnersPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="venue" element={<VenuePage />} />
          <Route path="committee" element={<CommitteePage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="program" element={<ProgramPage />} />
          <Route path="initial-submission" element={<InitialSubmissionPage />} />
          <Route path="revised-submission" element={<RevisedSubmissionPage />} />
          <Route path="final-camera-ready" element={<FinalCameraReadyPage />} />
          <Route path="presentation-instructions" element={<PresentationInstructionsPage />} />
          <Route path="paper-upload-faqs" element={<PaperUploadFaqsPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="partners" element={<PartnersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
