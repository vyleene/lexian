import type { AppViewProps } from '../models/AppModel'
import ProgramDirectoryCard from './components/cards/ProgramDirectoryCardComponent'
import StudentDirectoryCard from './components/cards/StudentDirectoryCardComponent'
import CollegeDirectoryCard from './components/cards/CollegeDirectoryCardComponent'
import DirectoryNav from './components/NavigationBarComponent'
import TitleBar from './components/TitleBarComponent'
import CollegeAddModal from './components/modals/CollegeAddModalComponent'
import CollegeDeleteModal from './components/modals/CollegeDeleteModalComponent'
import CollegeInfoModal from './components/modals/CollegeInfoModalComponent'
import ImportResultsModal from './components/modals/ImportResultsModalComponent'
import ProgramAddModal from './components/modals/ProgramAddModalComponent'
import ProgramDeleteModal from './components/modals/ProgramDeleteModalComponent'
import ProgramInfoModal from './components/modals/ProgramInfoModalComponent'
import StudentAddModal from './components/modals/StudentAddModalComponent'
import StudentDeleteModal from './components/modals/StudentDeleteModalComponent'
import StudentInfoModal from './components/modals/StudentInfoModalComponent'

function AppView({
  activePanel,
  theme,
  showSplash,
  hideSplash,
  onToggleTheme,
  onSelectPanel,
}: AppViewProps) {
  return (
    <>
      {showSplash && <div id="splash-screen" className={hideSplash ? 'hide' : ''}></div>}

      <TitleBar theme={theme} onToggleTheme={onToggleTheme} />

      <DirectoryNav activePanel={activePanel} onSelectPanel={onSelectPanel} />

      <div className="toast-container" aria-live="polite" aria-atomic="true"></div>

      <main className="container py-4 app-content">
        <div className="card shadow-sm app-card">
          <div className="card-body">
            <StudentDirectoryCard isActive={activePanel === 'students'} />
            <ProgramDirectoryCard isActive={activePanel === 'programs'} />
            <CollegeDirectoryCard isActive={activePanel === 'colleges'} />
          </div>
        </div>
      </main>

      <StudentAddModal />
      <StudentDeleteModal />
      <StudentInfoModal />
      <ProgramAddModal />
      <ProgramDeleteModal />
      <ProgramInfoModal />
      <CollegeAddModal />
      <CollegeDeleteModal />
      <CollegeInfoModal />
      <ImportResultsModal />
    </>
  )
}

export default AppView