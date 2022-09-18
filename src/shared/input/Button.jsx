import '../style/main.css'

import arrowRightIcon from '../icon/right-arrow.svg'

function Button() {
  return (
    <div className='button-wrapper'>
      <button className='custom-button'>
        GENERATE
        <img
          src={arrowRightIcon}
          alt='Arrow Right Icon'
        />
      </button>
    </div>
  )
}

export default Button
