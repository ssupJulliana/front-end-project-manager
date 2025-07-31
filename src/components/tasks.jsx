// Tasks.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTasks, FaUsers } from 'react-icons/fa';
import { MdEventNote } from 'react-icons/md';

const Tasks = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'Title Defense', icon: <MdEventNote size={35} />, route: '/titledefense' },
    { title: 'Oral Defense', icon: <MdEventNote size={35} /> },
    { title: 'Final Defense', icon: <MdEventNote size={35} /> },
    { title: 'Tasks Allocation', icon: <FaUsers size={35} /> },
  ];

  return (
    <div className="px-5">
      <h5 className="fw-bold mt-3 mb-2" style={{ color: '#3a0000' }}>
        <FaTasks className="me-2" />
        Tasks
      </h5>
      <hr style={{ borderTop: '2px solid #5c0000', marginTop: '-5px' }} />
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap gap-4 mt-3">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => {
                if (card.route) navigate(card.route);
              }}
              className="position-relative shadow-sm text-center"
              style={{
                width: '140px',
                height: '180px',
                borderRadius: '10px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                overflow: 'hidden',
                cursor: card.route ? 'pointer' : 'default',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '28px',
                  backgroundColor: '#5c0000',
                  borderTopLeftRadius: '10px',
                  borderBottomLeftRadius: '10px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  right: 0,
                  height: '20px',
                  backgroundColor: '#5c0000',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}
              />
              <div
                className="d-flex flex-column align-items-center justify-content-center text-dark"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="mb-2">{card.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 500 }}>{card.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
