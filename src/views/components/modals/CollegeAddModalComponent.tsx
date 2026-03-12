import { BuildingLibraryIcon, DocumentTextIcon, TagIcon } from '@heroicons/react/24/outline'


function CollegeAddModalComponent() {
  return (
    <div className="modal fade" id="collegeModal" tabIndex={-1} aria-labelledby="collegeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title d-flex align-items-center gap-2" id="collegeModalLabel">
              <BuildingLibraryIcon className="heroicon-url" aria-hidden="true" />
              Add College
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <form id="college-form" data-mode="add">
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="college-code">
                  College Code
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <TagIcon className="heroicon-url" aria-hidden="true" />
                  </span>
                  <input className="form-control" id="college-code" name="collegeCode" type="text" required />
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="college-name">
                  College Name
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <DocumentTextIcon className="heroicon-url" aria-hidden="true" />
                  </span>
                  <input className="form-control" id="college-name" name="collegeName" type="text" required />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="submit" className="btn btn-success" id="college-submit">
                Add College
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CollegeAddModalComponent
