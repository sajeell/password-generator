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
        <div className='tools-box'>
          <div
            className='tool-row'
            id='character-length-row'
          >
            <p id='character-length-label'>Character Length</p>
            <p id='character-length-value'>10</p>
          </div>
          <div
            className='tool-row'
            id='slider-row'
          ></div>
          <div
            className='tool-row'
            id='radiogroups-wrapper'
          ></div>
          <div
            className='tool-row'
            id='strength-row'
          ></div>
          <div
            className='tool-row'
            id='generate-button-row'
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Main
