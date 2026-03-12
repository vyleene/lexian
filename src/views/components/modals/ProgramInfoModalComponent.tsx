import { BuildingLibraryIcon, DocumentTextIcon, TagIcon, UserGroupIcon } from '@heroicons/react/24/outline'


function ProgramInfoModalComponent() {
  return (
    <div
      className="modal fade"
      id="programInfoModal"
      tabIndex={-1}
      aria-labelledby="programInfoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="programInfoModalLabel">
              Program Information
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body" id="programInfoModalBody">
            <div className="student-info">
              <div className="student-info__header">
                <div>
                  <div className="student-info__label">
                    <TagIcon className="heroicon-url" aria-hidden="true" />
                    Program Code
                  </div>
                  <div className="student-info__value" id="program-info-code"></div>
                </div>
                <div>
                  <div className="student-info__label">
                    <DocumentTextIcon className="heroicon-url" aria-hidden="true" />
                    Program Name
                  </div>
                  <div className="student-info__value" id="program-info-name"></div>
                </div>
              </div>

              <div className="student-info__meta mt-3">
                <div className="student-info__meta-item">
                  <div className="student-info__label">
                    <UserGroupIcon className="heroicon-url" aria-hidden="true" />
                    Students
                  </div>
                  <div className="student-info__value student-info__chip" id="program-info-student-count"></div>
                </div>
              </div>

              <div className="row g-3 mt-3">
                <div className="col-12">
                  <div className="student-info__label">
                    <BuildingLibraryIcon className="heroicon-url" aria-hidden="true" />
                    College
                  </div>
                  <div className="student-info__inline">
                    <span
                      className="badge rounded-pill text-bg-secondary student-info__badge"
                      id="program-info-college-code"
                    ></span>
                    <div className="student-info__value" id="program-info-college-name"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramInfoModalComponent
