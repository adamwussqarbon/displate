import './Button.style.css'

export function Button({ children, handleClick }) {

  return (
    <button
      className="button btn btn-primary"
      onClick={() => handleClick(children)}
    >
      {children}
    </button>
  )
}
