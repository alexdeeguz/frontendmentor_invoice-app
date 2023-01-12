const COLORS = {
  primary: {
    backgroundColor: "#7C5DFA",
    color: "#ffffff",
  },
  secondary: {
    backgroundColor: "#F9FAFE",
    color: "#7E88C3",
  },
  danger: {
    backgroundColor: "#EC5757",
    color: "#ffffff",
  },
  dark: {
    backgroundColor: "#373B53",
    color: "#888EB0",
  },
};

const BUTTON_STYLES = {
    padding: "17px 24px",
    marginLeft: "8px",
    borderRadius: "24px",
    border: "none",
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "15px",
    textAlign: "center",
    letterSpacing: "-0.25px"
}

const Button = ({ children, color, onClick }) => {
    return <button onClick={onClick} style={{ ...COLORS[color], ...BUTTON_STYLES }}>{children}</button>
}

export default Button