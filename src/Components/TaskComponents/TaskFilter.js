const TaskFilter = ({ filter, label = "", dataCy, setFilter }) => {
  return (
    <button data-cy={dataCy} onClick={() => setFilter(filter)}>
      {label}
    </button>
  );
};

export default TaskFilter;
