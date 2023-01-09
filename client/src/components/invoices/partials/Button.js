const Button = ({ title, backgroundColor = "#7C5DFA", color, style, onClick }) => {
  return <button onClick={onClick} className="action-button" style={{ backgroundColor, color, ...style }}>{title}</button>;
};

export default Button