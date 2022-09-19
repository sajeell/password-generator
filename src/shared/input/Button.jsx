import '../style/main.css'

import arrowRightIcon from '../icon/right-arrow.svg'

function Button({ onClick = () => {} }) {
  return (
    <div className='button-wrapper'>
      <button
        className='custom-button'
        onClick={onClick}
      >
        GENERATE
        <img
          src={arrowRightIcon}
          alt='Arrow Right Icon'
          width={15}
          height={15}
        />
      </button>
    </div>
  )
}

export default Button
