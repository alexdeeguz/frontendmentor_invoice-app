const Button = ({ title, backgroundColor = "#7C5DFA", color, style }) => {
  return <button className="action-button" style={{ backgroundColor, color, ...style }}>{title}</button>;
};

export default Button