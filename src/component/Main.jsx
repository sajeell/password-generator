import { title } from '../shared/data/data'
import '../shared/style/main.css'

import { useEffect, useState } from 'react'
import clipBoardIcon from '../shared/icon/clipboard.svg'

function Main() {
  const [password, setPassword] = useState('')

  useEffect(() => {
    setPassword('PTx1f5DaFX')
  }, [])

  return (
    <div className='main-wrapper'>
      <p id='heading'>{title}</p>
      <div className='box-wrapper'>
        <div className='password-box'>
          <p id='password'>{password}</p>
          <img
            src={clipBoardIcon}
            alt='copy'
            id='copy-button'
            onClick={() => {
              navigator.clipboard.writeText(password)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Main
