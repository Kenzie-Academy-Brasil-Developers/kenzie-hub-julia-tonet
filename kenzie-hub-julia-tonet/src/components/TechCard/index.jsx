export const TechCard = ({ tech }) => {
  return (
    <li>
      <h3>{tech.title}</h3>
      <p>{tech.status}</p>
      <button>Remover Tecnologia</button>
    </li>
  );
};
