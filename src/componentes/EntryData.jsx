import React from 'react'
import '../Page/style.css'

const EntryData = ({nationData}) => {
    const {left_image, name} = nationData
  return (
    <div className='header_main'>
        <img src={`https://www.aoepulse.com/static/${left_image}`} alt="" style={{ width: '50px', marginRight: '10px' }} />
        <p className='main_name'>{name}</p>
    </div>
  )
}

export default EntryData
