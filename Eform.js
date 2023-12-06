import React  from 'react';

const EmployeeForm = () => {
  
  return (
      <>
      <div className='div'>
      <h4>Add Employee</h4>
      <div className="modal-body">
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">First Name <span class="text-danger">*</span></label>
												<input className="form-control" type="text"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Last Name</label>
												<input className="form-control" type="text"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Username <span className="text-danger">*</span></label>
												<input className="form-control" type="text"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Email <span className="text-danger">*</span></label>
												<input className="form-control" type="email"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Password</label>
												<input className="form-control" type="password"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Confirm Password</label>
												<input className="form-control" type="password"/>
											</div>
										</div>
										<div className="col-sm-6">  
											<div className="form-group">
												<label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="col-sm-6">  
											<div className="form-group">
												<label className="col-form-label">Joining Date <span className="text-danger">*</span></label>
												<div className="cal-icon"><input className="form-control datetimepicker" type="text"/>
                        </div>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Phone </label>
												<input className="form-control" type="text"/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<label className="col-form-label">Company</label>
												<select className="select">
													<option value="">Global Technologies</option>
													<option value="1">Delta Infotech</option>
												</select>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Department <span className="text-danger">*</span></label>
												<select className="select">
													<option>Select Department</option>
													<option>Web Development</option>
													<option>IT Management</option>
													<option>Marketing</option>
												</select>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Designation <span className="text-danger">*</span></label>
												<select className="select">
													<option>Select Designation</option>
													<option>Web Designer</option>
													<option>Web Developer</option>
													<option>Android Developer</option>
												</select>
											</div>
										</div>
									</div>
                  </div>
                   <hr/>
                  <div className="table-responsive m-t-15">
                    <table className="table table-striped custom-table">
                    <thead>
                        <tr>
                          <th>Module Permission</th>
                          <th className="text-center">Read</th>
                          <th className="text-center">Write</th>
                          <th className="text-center">Create</th>
                          <th className="text-center">Delete</th>
                          <th className="text-center">import</th>
                          <th className="text-center">export</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                      <td>Holidays</td>
                      <td className="text-center">
                        <input checked="" type="checkbox"/>
                      </td>
                      <td className="text-center">
                        <input type="checkbox"/>
                      </td>
                      <td className="text-center">
                        <input type="checkbox"/>
                      </td>
                      <td className="text-center">
                        <input type="checkbox"/>
                      </td>
                      <td className="text-center">
                        <input type="checkbox"/>
                      </td>
                      <td className="text-center">
                        <input type="checkbox"/>
                      </td>
                  </tr>
                  <tr>
                    <td>Leaves</td>
                    <td className="text-center">
                      <input checked="" type="checkbox"/>
                    </td>
                    <td className="text-center">
                      <input checked="" type="checkbox"/>
                    </td>
                    <td className="text-center">
                      <input checked="" type="checkbox"/>
                    </td>
                    <td className="text-center">
                      <input type="checkbox"/>
                    </td>
                    <td className="text-center">
                      <input type="checkbox"/>
                    </td>
                    <td className="text-center">
                      <input type="checkbox"/>
                    </td>
                  </tr>
            <tr>
              <td>Clients</td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
            </tr>
            <tr>
              <td>Projects</td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
            </tr>
            <tr>
              <td>Tasks</td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
            </tr>
            <tr>
              <td>Chats</td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
            </tr>
            <tr>
              <td>Assets</td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
            </tr>
            <tr>
              <td>Timing Sheets</td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input checked="" type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="submit-section">
        <button className="btn btn-primary submit-btn">Submit</button>
      </div>
    </div> 
</>
  )
}   

export default EmployeeForm;