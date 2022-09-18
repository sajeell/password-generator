import '../style/main.css'

function Slider({ value = 10, onChange = () => {} }) {
  return (
    <div className='slider-wrapper'>
      <input
        type='range'
        id='character-length-slider'
        value={value}
        min='10'
        max='100'
        onChange={onChange}
      />
    </div>
  )
}

export default Slider
