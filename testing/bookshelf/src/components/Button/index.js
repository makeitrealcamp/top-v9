import React from 'react'

class Button extends React.Component {
  render() {
    const { children, type } = this.props

    return (
      <button
        type={type}
        disabled={children.length < 5}
        data-testid="button"
      >
        {children}
      </button>
    )
  }
}

export default Button
