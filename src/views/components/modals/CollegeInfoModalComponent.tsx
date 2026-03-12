import { BuildingLibraryIcon, ClipboardDocumentIcon, TagIcon, UserGroupIcon } from '@heroicons/react/24/outline'


function CollegeInfoModalComponent() {
  return (
    <div
      className="modal fade"
      id="collegeInfoModal"
      tabIndex={-1}
      aria-labelledby="collegeInfoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="collegeInfoModalLabel">
              College Information
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body" id="collegeInfoModalBody">
            <div className="student-info">
              <div className="student-info__header">
                <div>
                  <div className="student-info__label">
                    <TagIcon className="heroicon-url" aria-hidden="true" />
                    College Code
                  </div>
                  <div className="student-info__value" id="college-info-code"></div>
                </div>
                <div>
                  <div className="student-info__label">
                    <BuildingLibraryIcon className="heroicon-url" aria-hidden="true" />
                    College Name
                  </div>
                  <div className="student-info__value" id="college-info-name"></div>
                </div>
              </div>

              <div className="student-info__meta mt-3">
                <div className="student-info__meta-item">
                  <div className="student-info__label">
                    <ClipboardDocumentIcon className="heroicon-url" aria-hidden="true" />
                    Programs
                  </div>
                  <div className="student-info__value student-info__chip" id="college-info-program-count"></div>
                </div>
                <div className="student-info__meta-item">
                  <div className="student-info__label">
                    <UserGroupIcon className="heroicon-url" aria-hidden="true" />
                    Students
                  </div>
                  <div className="student-info__value student-info__chip" id="college-info-student-count"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollegeInfoModalComponent
