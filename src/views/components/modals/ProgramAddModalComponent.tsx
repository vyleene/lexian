import { BuildingLibraryIcon, ClipboardDocumentIcon, DocumentTextIcon, TagIcon } from '@heroicons/react/24/outline'


function ProgramAddModalComponent() {
  return (
    <div className="modal fade" id="programModal" tabIndex={-1} aria-labelledby="programModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title d-flex align-items-center gap-2" id="programModalLabel">
              <ClipboardDocumentIcon className="heroicon-url" aria-hidden="true" />
              Add Program
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form id="program-form" data-mode="add">
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="program-code">
                  Program Code
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <TagIcon className="heroicon-url" aria-hidden="true" />
                  </span>
                  <input className="form-control" id="program-code" name="programCode" type="text" required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="program-name">
                  Program Name
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <DocumentTextIcon className="heroicon-url" aria-hidden="true" />
                  </span>
                  <input className="form-control" id="program-name" name="programName" type="text" required />
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="program-college">
                  College Code
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <BuildingLibraryIcon className="heroicon-url" aria-hidden="true" />
                  </span>
                  <select className="form-select" id="program-college" name="collegeCode" required defaultValue="">
                    <option value="" hidden>
                      Select college code
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="submit" className="btn btn-success" id="program-submit">
                Add Program
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProgramAddModalComponent
