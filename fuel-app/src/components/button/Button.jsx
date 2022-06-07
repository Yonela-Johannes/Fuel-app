import './button.css'

export const Button = ({name}) => {
  return (
    <div className='button'>
        <div className="name">{name}</div>
    </div>
  )
}
