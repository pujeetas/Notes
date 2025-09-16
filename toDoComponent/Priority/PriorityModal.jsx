import "./PriorityModal.css";

const PriorityModal = ({ isOpen, onClose, task }) => {
  if (!isOpen) return null;

  const getModalContent = () => {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <h2>Task Details</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="task-detail-section">
            <label>Title</label>
            <p>{task?.title}</p>
          </div>
          <div className="task-detail-section">
            <label>Priority</label>
            <span className={`priority-tag ${task?.priority}`}>
              {task?.priority?.toUpperCase()}
            </span>
          </div>
          <div className="task-detail-section">
            <label>Status</label>
            <span className={`status-tag ${task?.statusType}`}>
              {task?.status}
            </span>
          </div>
          <div className="task-detail-section">
            <label>Due Date</label>
            <p>{task?.dueDate}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {getModalContent()}
      </div>
    </div>
  );
};

export default PriorityModal;
