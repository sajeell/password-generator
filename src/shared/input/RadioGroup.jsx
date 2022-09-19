import '../style/main.css'

function RadioGroup({
  label = 'Include Uppercase Letters',
  onChange = () => {},
}) {
  return (
    <div className='radiogroup-wrapper'>
      <label className='main-checkbox'>
        {label}
        <input
          type='checkbox'
          className='password-checkbox'
          onChange={onChange}
        />
        <span className='mark'>✓</span>
      </label>
    </div>
  )
}

export default RadioGroup
