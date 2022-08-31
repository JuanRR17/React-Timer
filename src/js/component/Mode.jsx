import React from 'react'
import PropTypes from 'prop-types'

const Mode = ({mode, handleSetMode}) => {
  const modes = ["Timer", "Countdown", "Alert"];
  
  function handleSelectChange(event) {
    handleSetMode(event.target.value);
  }
  // console.log("modeName", modes[mode]);
  // console.log("mode", mode)
  return (
  <div className='text-center'>
    Select Mode:
    <select onChange={handleSelectChange} value={mode} name="mode" className="m-2">
        <option >Select Mode</option>
        <option value={modes[0]}>{modes[0]}</option>
        <option value={modes[1]}>{modes[1]}</option>
        <option value={modes[2]}>{modes[2]}</option>
    </select>
  </div>

  )
}

Mode.propTypes = {
  mode: PropTypes.string,
  // modes: PropTypes.array,
  handleSetMode: PropTypes.func
}

export default Mode