import { AcademicCapIcon, BuildingLibraryIcon, CalendarDaysIcon, IdentificationIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline'


function StudentInfoModalComponent() {
  return (
    <div
      className="modal fade"
      id="studentInfoModal"
      tabIndex={-1}
      aria-labelledby="studentInfoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="studentInfoModalLabel">
              Student Information
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body" id="studentInfoModalBody">
            <div className="student-info">
              <div className="student-info__header">
                <div>
                  <div className="student-info__label">
                    <IdentificationIcon className="heroicon-url" aria-hidden="true" />
                    Student ID
                  </div>
                  <div className="student-info__value" id="student-info-id"></div>
                </div>

                <div>
                  <div className="student-info__label">
                    <UserIcon className="heroicon-url" aria-hidden="true" />
                    Name
                  </div>
                  <div className="student-info__value" id="student-info-name"></div>
                </div>
              </div>

              <div className="student-info__meta mt-3">
                <div className="student-info__meta-item">
                  <div className="student-info__label">
                    <UsersIcon className="heroicon-url" aria-hidden="true" />
                    Gender
                  </div>
                  <div className="student-info__value student-info__chip" id="student-info-gender"></div>
                </div>
                <div className="student-info__meta-item">
                  <div className="student-info__label">
                    <CalendarDaysIcon className="heroicon-url" aria-hidden="true" />
                    Year Level
                  </div>
                  <div className="student-info__value student-info__chip" id="student-info-year"></div>
                </div>
              </div>

              <div className="row g-3 mt-2">
                <div className="col-12">
                  <div className="student-info__label">
                    <AcademicCapIcon className="heroicon-url" aria-hidden="true" />
                    Program
                  </div>
                  <div className="student-info__inline">
                    <span
                      className="badge rounded-pill text-bg-secondary student-info__badge"
                      id="student-info-program-code"
                    ></span>
                    <div className="student-info__value" id="student-info-program-name"></div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="student-info__label">
                    <BuildingLibraryIcon className="heroicon-url" aria-hidden="true" />
                    College
                  </div>
                  <div className="student-info__inline">
                    <span
                      className="badge rounded-pill text-bg-secondary student-info__badge"
                      id="student-info-college-code"
                    ></span>
                    <div className="student-info__value" id="student-info-college-name"></div>
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

export default StudentInfoModalComponent
