function StudentDeleteModalComponent() {
  return (
    <div
      className="modal fade"
      id="deleteStudentModal"
      tabIndex={-1}
      aria-labelledby="deleteStudentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteStudentModalLabel">
              Delete Student
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className="mb-0">Are you sure you want to delete this student?</p>
            <input type="hidden" id="delete-student-id" name="studentId" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="btn btn-danger" id="confirm-delete-student">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDeleteModalComponent
