import contactStyle from './Contact.module.scss';
import React from 'react'

const Contact = () => {
  return (
    <div className={ contactStyle.container }>
      <div>
          <h2 className={ contactStyle.title }>Contact Me</h2>
      </div>
    </div>
  )
}

export default Contact