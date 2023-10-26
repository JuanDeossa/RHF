export const RequirementsList = ({ requirements }) => {
  return (
    <ul className="requirements-list">
      {requirements.map((requirement) => (
        <li
          style={{ color: requirement.ok && "#5CE5B4" }}
          key={requirement.key}
        >
          {requirement.message}
        </li>
      ))}
    </ul>
  );
};
