import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TasksCreated = () => {
  return (
    <div className="d-flex justify-content-center mt-4" style={{ width: '100%' }}>
      <div className="d-flex" style={{ width: '95%' }}>
        {/* Table Section */}
        <div
          className="bg-white shadow-sm rounded p-3 me-3"
          style={{ flex: 1, maxWidth: '72%' }}
        >
          <h6 className="fw-bold text-uppercase text-danger mb-3">Recent Tasks Created</h6>
          <Table borderless size="sm" className="mb-0">
            <thead className="text-muted small">
              <tr>
                <th>NO</th>
                <th>Assigned</th>
                <th>Task</th>
                <th>Subtask</th>
                <th>Element</th>
                <th>Date Created</th>
                <th>Due Date</th>
                <th>Time</th>
                <th>Project Phase</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="small align-middle">
              <tr>
                <td>1.</td>
                <td>Juliana C</td>
                <td>Chapter 3</td>
                <td>Developments</td>
                <td>Peopleware</td>
                <td>Feb 4, 2025</td>
                <td>Feb 7, 2025</td>
                <td>8:30 AM</td>
                <td>Analysis</td>
                <td>
                  <span className="badge bg-primary">To Review</span>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>John Reagan S</td>
                <td>Chapter 3</td>
                <td>Implementation</td>
                <td>Hardware</td>
                <td>Feb 7, 2025</td>
                <td>Feb 11, 2025</td>
                <td>11:50 AM</td>
                <td>Analysis</td>
                <td>
                  <span className="badge bg-success">In Progress</span>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Justine P</td>
                <td>Chapter 3</td>
                <td>Implementation</td>
                <td>Software</td>
                <td>Feb 11, 2025</td>
                <td>Feb 13, 2025</td>
                <td>10:00 AM</td>
                <td>Analysis</td>
                <td>
                  <span className="badge bg-warning text-dark">To Do</span>
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Addrialene G</td>
                <td>Chapter 3</td>
                <td>Implementation</td>
                <td>Peopleware</td>
                <td>Feb 12, 2025</td>
                <td>Feb 15, 2025</td>
                <td>11:00 AM</td>
                <td>Analysis</td>
                <td>
                  <span className="badge bg-warning text-dark">To Do</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Calendar Section */}
        <div
          className="bg-white shadow-sm rounded p-3"
          style={{ width: '28%', minWidth: '260px' }}
        >
          <h6 className="fw-bold text-uppercase text-danger mb-3">Calendar</h6>
          <div className="border rounded p-2">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="small fw-bold">January 2025</span>
              <div>
                <Button variant="link" size="sm" className="text-dark p-0 me-2">&lt;</Button>
                <Button variant="link" size="sm" className="text-dark p-0">&gt;</Button>
              </div>
            </div>
            <table className="table table-sm text-center mb-0 small">
              <thead>
                <tr className="text-muted">
                  <th>S</th>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-muted"> </td>
                  <td className="text-muted"> </td>
                  <td className="text-muted"> </td>
                  <td className="text-muted"> </td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>
                    <span className="bg-danger text-white rounded-circle px-2">7</span>
                  </td>
                  <td>
                    <span className="bg-dark text-white rounded-circle px-2">8</span>
                  </td>
                  <td>9</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>
                    <span className="bg-dark text-white rounded-circle px-2">15</span>
                  </td>
                  <td>16</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksCreated;
