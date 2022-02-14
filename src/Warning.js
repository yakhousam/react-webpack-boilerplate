import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function Warning({ dep = false }) {
  const [name, setName] = useState('')
  useEffect(() => {
    if (dep) {
      setName('samir')
    }
  }, [dep])
  return <span className="warning">Take it easy {name}</span>
}

Warning.propTypes = {
  dep: PropTypes.bool,
}
