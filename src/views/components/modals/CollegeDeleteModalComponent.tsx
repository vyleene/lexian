function CollegeDeleteModalComponent() {
  return (
    <div
      className="modal fade"
      id="deleteCollegeModal"
      tabIndex={-1}
      aria-labelledby="deleteCollegeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteCollegeModalLabel">
              Delete College
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className="mb-0">Are you sure you want to delete this college?</p>
            <p className="text-muted small mb-0" id="delete-college-warning"></p>
            <input type="hidden" id="delete-college-id" name="collegeId" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="btn btn-danger" id="confirm-delete-college">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollegeDeleteModalComponent
