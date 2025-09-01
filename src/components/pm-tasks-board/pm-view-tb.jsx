// src/components/pm-tasks-board/pm-view-tb.jsx

import React, { useState } from "react";
import profileIcon from "../../assets/profile-icon.png";
import boardIcon from "../../assets/tasks-board-icon.png"; // KEEP THIS ICON
import deleteIcon from "../../assets/delete-icon.png";
import attachmentIcon from "../../assets/attachment-icon.png";
import fileTypeIcon from "../../assets/file-type-icon.png";
import Attachment from "./pm-attachment";


export default function PMViewTB() {
  const [activeTab, setActiveTab] = useState("comments");

  return (
    <div className="page-wrapper">
      {/* Header with icon and bold title */}
      <h2 className="section-title">
        <img src={boardIcon} alt="Board Icon" className="icon-image" />
        Tasks Board &gt; To Review &gt; Julliana Castaneda
      </h2>
      <hr className="divider" />

      <div className="tasks-container">
        <div className="tasks-layout">
          {/* Left Column */}
          <div className="left-column">
            <div className="info-header">
              <div className="info-title">Chapter 3</div>
              <div className="info-status">
                <span className="status-dot" />
                <span className="status-text">To Review</span>
              </div>
            </div>
            <div className="info-grid">
              <div><strong>Subtasks:</strong></div><div>Implementation</div>
              <div><strong>Element:</strong></div><div>Peopleware</div>
              <div><strong>Date Created:</strong></div><div>Feb 4, 2025</div>
              <div><strong>Revision No:</strong></div><div className="danger-text">No Revision</div>
              <div><strong>Due Date:</strong></div><div className="warning-text">Feb 7, 2025</div>
              <div><strong>Time:</strong></div><div>8:00 AM</div>
              <div><strong>Methodology:</strong></div><div>Agile</div>
              <div><strong>Project Phase:</strong></div><div>Analysis</div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="tabs">
              <div
                className={`tab ${activeTab === "comments" ? "active" : ""}`}
                onClick={() => setActiveTab("comments")}
              >
                Comments
              </div>
              <div
                className={`tab ${activeTab === "attachment" ? "active" : ""}`}
                onClick={() => setActiveTab("attachment")}
              >
                Attachment
              </div>
            </div>

            {activeTab === "comments" && (
              <>
                <div className="new-comment">
                  <div className="comment-header">
                    <div className="profile-area">
                      <img src={profileIcon} alt="Profile" className="profile-icon" />
                      <span className="profile-name">Harzwel Zhen B. Lacson</span>
                    </div>
                    <img src={deleteIcon} alt="Delete" className="delete-icon" />
                  </div>
                  <textarea className="comment-input" placeholder="Leave a comment" />
                  <div className="comment-actions">
                    <button className="attach-button">
                      <img src={attachmentIcon} alt="Attach" className="attach-icon" />
                    </button>
                    <button className="send-button">Send</button>
                  </div>
                </div>

                <div className="comment-section">
                  <div className="comment-item">
                    <img src={profileIcon} alt="Juliana" className="comment-profile" />
                    <div className="comment-body">
                      <div className="comment-header-name">
                        <span className="comment-author">Juliana N Castaneda</span>
                        <span className="comment-time">• Feb 6, 2025 at 3:00 PM</span>
                      </div>
                      <div className="comment-text">
                        Good afternoon, Add. I have already completed my part. Attached is the file my part. Thank you!
                      </div>
                      <div className="comment-attachment">
                        <img src={fileTypeIcon} alt="File" className="file-icon" />
                        Castaneda Chapter 3.pdf
                      </div>
                      <div className="replied-text">Replied</div>
                    </div>
                  </div>

                  <div className="comment-item reply">
                    <img src={profileIcon} alt="Adriallene" className="comment-profile" />
                    <div className="comment-body">
                      <div className="comment-header-name">
                        <span className="comment-author">Adriallene G Mendoza</span>
                        <span className="comment-time">• Feb 7, 2025 at 6:00 PM</span>
                      </div>
                      <div className="comment-text">
                        Good evening, Jull. I have already reviewed your work, and it’s correct. I will be adding it to our manuscript.
                      </div>
                      <div className="replied-text">Reply</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "attachment" && <Attachment />}
          </div>
        </div>
      </div>


      {/* STYLES */}
      <style>{`
        * { box-sizing: border-box; }
        .page-wrapper {
          width: 100%;
          padding: 40px 20px;
        }
        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #3B0304;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-align: left;
        }
        .icon-image {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
        .divider {
          border: none;
          border-top: 2px solid #3B0304;
          margin-bottom: 20px;
        }
        .tasks-container {
          background: #fff;
          border-radius: 20px;
          width: 100%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          min-height: 500px;
          padding: 30px;
          border: 1px solid #B2B2B2;
          overflow: visible;
        }
        .tasks-layout {
          display: flex;
          gap: 30px;
        }
        .left-column {
          width: 35%;
          font-size: 14px;
          color: #000000;
        }
        .right-column {
          flex: 1;
        }
        .info-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #3B0304;
        }
        .info-title {
          font-weight: bold;
          font-size: 16px;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background: #578FCA;
          border-radius: 50%;
          margin-right: 6px;
        }
        .status-text {
          font-size: 14px;
          font-weight: bold;
          color: #3B0304;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 130px 1fr;
          row-gap: 6px;
          column-gap: 10px;
          line-height: 1.8;
        }
        .danger-text { color: #3B0304; font-weight: bold; }
        .warning-text { color: #3B0304; font-weight: bold; }

        .tabs {
          display: flex;
          font-size: 15px;
          margin-bottom: 18px;
          user-select: none;
        }
        .tab {
          margin-right: 30px;
          padding-bottom: 6px;
          cursor: pointer;
          color: #666;
          border-bottom: 3px solid transparent;
          transition: border-color 0.3s, color 0.3s;
        }
        .tab.active {
          font-weight: bold;
          border-bottom: 3px solid #3B0304;
          color: #000;
        }

        .new-comment {
          border: 1px solid #B2B2B2;
          border-radius: 6px;
          padding: 15px;
          margin-bottom: 24px;
          background: #ffffff;
        }
        .comment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .profile-area {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .profile-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .profile-name {
          font-weight: bold;
          font-size: 15px;
          color: #000000;
        }
        .delete-icon {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
        .comment-input {
          width: 100%;
          height: 80px;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #B2B2B2;
          resize: none;
          font-size: 14px;
          font-family: inherit;
          margin-bottom: 12px;
        }
        .comment-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .attach-button {
          background: none;
          border: none;
          cursor: pointer;
        }
        .attach-icon {
          width: 20px;
          height: 20px;
        }
        .send-button {
          background: #3B0304;
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }
        .send-button:hover {
          background: #571313;
        }

        .comment-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .comment-item {
          display: flex;
          gap: 15px;
        }
        .comment-item.reply {
          margin-left: 40px;
        }
        .comment-profile {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }
        .comment-body {
          flex: 1;
          font-size: 14px;
          color: #000000;
        }
        .comment-header-name {
          display: flex;
          gap: 10px;
          margin-bottom: 6px;
          font-weight: bold;
          font-size: 14px;
          color: #000000;
        }
        .comment-time {
          font-weight: normal;
          color: #777;
          font-size: 13px;
        }
        .comment-text {
          margin-bottom: 6px;
        }
        .comment-attachment {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #3B0304;
          margin-bottom: 6px;
          border: 1px solid #B2B2B2;
          background: #ffffff;
          padding: 4px 8px;
          border-radius: 4px;
          max-width: fit-content;
        }
        .file-icon {
          width: 18px;
          height: 18px;
        }
        .replied-text {
          font-size: 12px;
          color: #3B0304;
          font-weight: 600;
          cursor: pointer;
          user-select: none;
        }
      `}</style>
    </div>
  );
}
