import { AcademicCapIcon, CalendarDaysIcon, IdentificationIcon, UserIcon, UserPlusIcon, UsersIcon } from '@heroicons/react/24/outline'


function StudentAddModalComponent() {
  return (
    <div className="modal fade" id="studentModal" tabIndex={-1} aria-labelledby="studentModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title d-flex align-items-center gap-2" id="studentModalLabel">
              <UserPlusIcon className="heroicon-url" aria-hidden="true" />
              Add Student
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form id="student-form" data-mode="add">
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="student-id-number">
                  Student ID
                </label>
                <div className="row g-2 align-items-center">
                  <div className="col-4 col-md-4">
                    <div className="input-group">
                      <span className="input-group-text">
                        <IdentificationIcon className="heroicon-url" aria-hidden="true" />
                      </span>
                      <select className="form-select" id="student-id-year" name="studentIdYear" required defaultValue="">
                        <option value="" hidden>
                          Year
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-1 text-center">-</div>
                  <div className="col-7 col-md-7">
                    <input
                      className="form-control"
                      id="student-id-number"
                      name="studentIdNumber"
                      type="text"
                      inputMode="numeric"
                      maxLength={4}
                      pattern="[0-9]{4}"
                      placeholder="NNNN"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="student-first-name">
                    First Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <UserIcon className="heroicon-url" aria-hidden="true" />
                    </span>
                    <input
                      className="form-control"
                      id="student-first-name"
                      name="firstName"
                      type="text"
                      maxLength={16}
                      pattern="[A-Za-z ]+"
                      placeholder="First name"
                      required
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="student-last-name">
                    Last Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <UserIcon className="heroicon-url" aria-hidden="true" />
                    </span>
                    <input
                      className="form-control"
                      id="student-last-name"
                      name="lastName"
                      type="text"
                      maxLength={16}
                      pattern="[A-Za-z ]+"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label" htmlFor="student-program">
                  Program Code
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <AcademicCapIcon className="heroicon-url" aria-hidden="true" />
                  </span>
                  <select className="form-select" id="student-program" name="programCode" required defaultValue="">
                    <option value="" hidden>
                      Select program code
                    </option>
                  </select>
                </div>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-6 col-md-6">
                  <label className="form-label" htmlFor="student-year">
                    Year
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <CalendarDaysIcon className="heroicon-url" aria-hidden="true" />
                    </span>
                    <select className="form-select" id="student-year" name="year" required defaultValue="">
                      <option value="" hidden>
                        Select year
                      </option>
                      <option value="I">1st Year</option>
                      <option value="II">2nd Year</option>
                      <option value="III">3rd Year</option>
                      <option value="IV">4th Year</option>
                    </select>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <label className="form-label" htmlFor="student-gender">
                    Gender
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <UsersIcon className="heroicon-url" aria-hidden="true" />
                    </span>
                    <select className="form-select" id="student-gender" name="gender" required defaultValue="">
                      <option value="" hidden>
                        Select gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="submit" className="btn btn-success" id="student-submit">
                Add Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StudentAddModalComponent
