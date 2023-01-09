const Button = ({ title, backgroundColor = "#7C5DFA", color }) => {
  return <button style={{ backgroundColor, color }}>{title}</button>;
};

export default Button