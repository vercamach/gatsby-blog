import React from 'react'

const Sidebar = ({ title, description }) => (
  // instead of ({props}).... or as he had it (props)
  <div
    style={{
      border: '2px solid #e6e6e6',
      maxWidth: 960,
      padding: '0.5rem',
      marginBottom: '25px',
    }}
  >
    <strong>{title}</strong> {description}
    {/* not      <strong>{props.title}</strong> {props.description}*/}
  </div>
)
export default Sidebar
