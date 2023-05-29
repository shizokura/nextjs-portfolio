import workStyle from './Works.module.scss';
import React from 'react'

const Works = () => {
  return (
    <div className={ workStyle.container }>
      <div>
          <h2 className={ workStyle.title }>Works</h2>
      </div>
    </div>
  )
}

export default Works