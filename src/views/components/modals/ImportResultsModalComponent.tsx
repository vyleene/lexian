function ImportResultsModalComponent() {
  return (
    <div
      className="modal fade"
      id="importResultModal"
      tabIndex={-1}
      aria-labelledby="importResultModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="importResultModalLabel">
              Import Results
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div id="importResultSummary" className="mb-3 ms-3 alert alert-info py-2"></div>
            <div className="table-responsive">
              <table id="importResultTable" className="table table-striped table-hover align-middle w-100">
                <thead className="table-light">
                  <tr>
                    <th>Record</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImportResultsModalComponent
