import React from 'react'

const Timestamp: React.FC<{ timestamp: Date }> = props => {
  return <div>{props.timestamp.toString()}</div>
}

export default Timestamp
