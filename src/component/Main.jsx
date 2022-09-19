import { characterLength, title } from '../shared/data/data'
import '../shared/style/main.css'

import { Fragment, useEffect, useState } from 'react'
import clipBoardIcon from '../shared/icon/clipboard.svg'
import Button from '../shared/input/Button'
import RadioGroup from '../shared/input/RadioGroup'
import Slider from '../shared/input/Slider'

const labels = [
  { label: 'Include Uppercase Letters', checked: false },
  { label: 'Include Lowercase Letters', checked: false },
  { label: 'Include Numbers', checked: false },
  { label: 'Include Symbols', checked: false },
]

function Main() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(10)
  const [strength, setStrength] = useState('TOO WEAK!')
  const [count, setCount] = useState(0)

  // Generate password of given length
  const generatePassword = () => {}

  // Determine strength of the password on given conditions
  const determineStrength = () => {
    if (
      !labels[0].checked &&
      !labels[1].checked &&
      !labels[2].checked &&
      !labels[3].checked
    ) {
      setStrength('TOO WEAK!')
    } else if (
      length <= 10 &&
      !labels[0].checked &&
      !labels[1].checked &&
      !labels[2].checked &&
      !labels[3].checked
    ) {
      setStrength('TOO WEAK!')
    } else if (
      length > 10 &&
      labels[0].checked &&
      !labels[1].checked &&
      !labels[2].checked &&
      !labels[3].checked
    ) {
      setStrength('WEAK')
    } else if (
      length > 10 &&
      labels[0].checked &&
      labels[1].checked &&
      !labels[2].checked &&
      !labels[3].checked
    ) {
      setStrength('MEDIUM')
    } else if (
      length > 10 &&
      labels[0].checked &&
      labels[1].checked &&
      labels[2].checked &&
      labels[3].checked
    ) {
      setStrength('STRONG')
    }
  }

  useEffect(() => {
    setPassword('PTx1f5DaFX')
  }, [])

  useEffect(() => {
    determineStrength()
  }, [count])

  useEffect(() => {
    determineStrength()
  }, [length])

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
                    setCount(count + 1)
                  }}
                />
              </Fragment>
            ))}
          </div>
          <div
            className='tool-row'
            id='strength-row'
          >
            <div id='strength-left'>
              <p id='strength-heading'>STRENGTH</p>
            </div>
            <div id='strength-right'>
              <p id='strength-value'>{strength}</p>
              {strength === 'TOO WEAK!' ? (
                <div className='strength-box-wrapper'>
                  <div className='strength-box too-weak'></div>
                  <div className='strength-box'></div>
                  <div className='strength-box'></div>
                  <div className='strength-box'></div>
                </div>
              ) : strength === 'WEAK' ? (
                <div className='strength-box-wrapper'>
                  <div className='strength-box weak'></div>
                  <div className='strength-box weak'></div>
                  <div className='strength-box'></div>
                  <div className='strength-box'></div>
                </div>
              ) : strength === 'MEDIUM' ? (
                <div className='strength-box-wrapper'>
                  <div className='strength-box medium'></div>
                  <div className='strength-box medium'></div>
                  <div className='strength-box medium'></div>
                  <div className='strength-box'></div>
                </div>
              ) : strength === 'STRONG' ? (
                <div className='strength-box-wrapper'>
                  <div className='strength-box strong'></div>
                  <div className='strength-box strong'></div>
                  <div className='strength-box strong'></div>
                  <div className='strength-box strong'></div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div
            className='tool-row'
            id='generate-button-row'
          >
            <Button onClick={generatePassword} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
