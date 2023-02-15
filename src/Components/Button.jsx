function Button({ children, onClick }) {
  return <button onClick={onClick} className="px-2 border text-sm rounded">{children}</button>
}

export default Button;
