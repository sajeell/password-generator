import { characterLength, title } from '../shared/data/data'
import '../shared/style/main.css'

import { Fragment, useEffect, useRef, useState } from 'react'
import clipBoardIcon from '../shared/icon/clipboard.svg'
import Slider from '../shared/input/Slider'
import RadioGroup from '../shared/input/RadioGroup'

function Main() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(10)

  const labels = [
    { label: 'Include Uppercase Letters', checked: false },
    { label: 'Include Lowercase Letters', checked: false },
    { label: 'Include Numbers', checked: false },
    { label: 'Include Symbols', checked: false },
  ]

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
            <p id='character-length-label'>{characterLength}</p>
            <p id='character-length-value'>{length}</p>
          </div>
          <div
            className='tool-row'
            id='slider-row'
          >
            <Slider
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div
            className='tool-row'
            id='radiogroups-wrapper'
          >
            {labels.map((label, index) => (
              <Fragment key={index}>
                <RadioGroup
                  label={label.label}
                  onChange={(e) => {
                    labels[index].checked = e.target.checked
                  }}
                />
              </Fragment>
            ))}
          </div>
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
