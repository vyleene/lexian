function ProgramDeleteModalComponent() {
  return (
    <div
      className="modal fade"
      id="deleteProgramModal"
      tabIndex={-1}
      aria-labelledby="deleteProgramModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteProgramModalLabel">
              Delete Program
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className="mb-0">Are you sure you want to delete this program?</p>
            <p className="text-muted small mb-0" id="delete-program-warning"></p>
            <input type="hidden" id="delete-program-id" name="programId" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="btn btn-danger" id="confirm-delete-program">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramDeleteModalComponent
