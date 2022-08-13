import './Button.style.css'

export function Button({ content }) {

  return (
    <button className="button btn btn-primary">
      {content}
    </button>
  )
}
