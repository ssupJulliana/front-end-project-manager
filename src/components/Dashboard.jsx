import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const tasks = [
    { name: 'Mendoza, Et Al', chapter: 'Chapter 3', date: 'Feb 5, 2025', time: '8:00 AM', color: '#609637' },
    { name: 'Addrialene M', chapter: 'Chapter 2', date: 'Feb 2, 2025', time: '8:00 AM', color: '#F1B93B' },
    { name: 'Harzwel L', chapter: 'Chapter 3', date: 'Feb 5, 2025', time: '8:00 AM', color: '#2D7FC1' },
    { name: 'Julliana C', chapter: 'Chapter 3', date: 'Feb 5, 2025', time: '8:00 AM', color: '#A1C671' },
    { name: 'Alejandro F', chapter: 'Chapter 3', date: 'Feb 5, 2025', time: '8:00 AM', color: '#6B935D' },
  ];

  const legend = [
    { label: 'To Do', color: '#E5B33A' },
    { label: 'In Progress', color: '#609637' },
    { label: 'To Review', color: '#2D7FC1' },
    { label: 'Completed', color: '#B380E6' },
    { label: 'Missed', color: '#D33535' },
  ];

  const weeklyData = [4, 9, 14, 16, 2];

  return (
    <div className="container py-4" style={{ maxWidth: '1000px' }}>
      {/* UPCOMING TASKS */}
      <h6 className="fw-bold mb-3" style={{ color: '#530808' }}>UPCOMING TASKS</h6>
      <div className="d-flex gap-2 mb-4 flex-wrap">
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="shadow-sm rounded px-2 py-2"
            style={{
              backgroundColor: '#fff',
              borderTop: `5px solid ${task.color}`,
              width: '160px',
              fontSize: '0.8rem'
            }}
          >
            <div className="fw-bold text-truncate mb-1">
              <i className="bi bi-person-fill me-1"></i>
              {task.name}
            </div>
            <div className="text-muted">{task.chapter}</div>
            <div className="text-muted">{task.date}</div>
            <div className="text-muted">{task.time}</div>
          </div>
        ))}
      </div>

      {/* WEEKLY SUMMARY & TEAM PROGRESS */}
      <div className="row g-3">
        {/* WEEKLY SUMMARY */}
        <div className="col-md-6">
          <div className="bg-white shadow-sm rounded p-3">
            <h6 className="fw-bold mb-3" style={{ color: '#530808' }}>WEEKLY SUMMARY</h6>
            <div className="d-flex align-items-end" style={{ height: '180px' }}>
              <div className="d-flex flex-column justify-content-between me-2" style={{ height: '100%' }}>
                {[20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0].map((num, i) => (
                  <div key={i} style={{ fontSize: '0.65rem', lineHeight: '1.1' }}>{num}</div>
                ))}
              </div>
              <div className="d-flex align-items-end flex-grow-1">
                {weeklyData.map((value, i) => (
                  <div
                    key={i}
                    className="mx-1 d-flex flex-column justify-content-end"
                    style={{
                      width: '20px',
                      height: '160px',
                      backgroundColor: '#f0f0f0',
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        height: `${(value / 20) * 160}px`,
                        backgroundColor: legend[i].color,
                        width: '100%',
                        position: 'absolute',
                        bottom: '0'
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="ms-3">
                {legend.map((item, i) => (
                  <div key={i} className="d-flex align-items-center mb-1">
                    <div style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: item.color,
                      borderRadius: '50%',
                      marginRight: '6px'
                    }}></div>
                    <small style={{ fontSize: '0.75rem' }}>{item.label}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TEAM PROGRESS */}
        <div className="col-md-6">
          <div className="bg-white shadow-sm rounded p-3">
            <h6 className="fw-bold mb-3" style={{ color: '#530808' }}>TEAM PROGRESS</h6>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center justify-content-center" style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'conic-gradient(#2D7FC1 0% 20%, #E5B33A 20% 40%, #609637 40% 60%, #B380E6 60% 80%, #D33535 80% 100%)',
                position: 'relative',
              }}>
                <div className="position-absolute text-center fw-bold" style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  lineHeight: '60px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '1.1rem'
                }}>
                  40%
                </div>
              </div>
              <div className="ms-3">
                {legend.map((item, i) => (
                  <div key={i} className="d-flex align-items-center mb-1">
                    <div className="me-2" style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: item.color,
                      borderRadius: '50%'
                    }}></div>
                    <small style={{ fontSize: '0.75rem' }}>{item.label}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
