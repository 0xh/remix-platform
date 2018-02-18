import React from "react"
import styled from "styled-components"
import styles from "../utilities/styles"
import { bind } from "decko"

const tiers = {
  title: {
    size: 24,
    weight: 900,
    spacing: -0.8,
    color: styles.colors.grey[600],
  },
  thintitle: {
    size: 25,
    weight: 600,
    spacing: -0.5,
    color: styles.colors.grey[600],
  },
  subtitle: {
    size: 16,
    weight: 500,
    spacing: 0,
    color: styles.colors.grey[400],
  },
  body: {
    size: 16,
    weight: 500,
    spacing: 0,
    color: styles.colors.grey[600],
  },
  largebody: {
    size: 17,
    weight: 500,
    spacing: -0.2,
    color: styles.colors.grey[600],
  },
  emphasis: {
    size: 17,
    weight: 400,
    spacing: 0,
    color: styles.colors.grey[500],
  },
  emphasisSubtitle: {
    size: 16,
    weight: 300,
    // TODO
  },
  requestTitle: {
    size: 16,
    weight: 700,
    spacing: -0.3,
  },
  requestSubtitle: {
    size: 13,
    color: "rgba(0,0,0,0.5)",
  },
  messageName: {
    size: 15,
    weight: 600,
    spacing: 0,
    color: styles.colors.grey[400],
  },
  messageRead: {
    size: 15,
    weight: 400,
    spacing: 0,
    color: styles.colors.grey[300],
  },
}

export default styled.p`
  font-size: ${({ tier, small }) => tiers[tier].size - (small ? 2 : 0)}px;
  font-weight: ${({ tier }) => tiers[tier].weight || 500};
  letter-spacing: ${({ tier }) => tiers[tier].spacing || 0};
  color: ${({ tier, color }) => color || tiers[tier].color || "black"};
  margin: 0;
  padding: 0;
  ${({ center }) => center && "text-align: center"};
  ${({ opacity }) => opacity && `opacity: ${opacity}`};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`

export const EditableText = class EditableText extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.originalText,
    }
  }

  @bind
  onChange(event) {
    this.setState({
      text: event.target.value,
    })

    console.log("ON CHANGE", event.target.value)

    this.props.onTextChange(event.target.value)
  }

  render() {
    const { tier } = this.props
    const { text } = this.state

    return (
      <EditableTextInput value={text} tier={tier} onChange={this.onChange} />
    )
  }
}

const EditableTextInput = styled.input`
  font-size: ${({ tier, small }) => tiers[tier].size - (small ? 2 : 0)}px;
  font-weight: ${({ tier }) => tiers[tier].weight || 500};
  letter-spacing: ${({ tier }) => tiers[tier].spacing || 0};
  color: ${({ tier, color }) => color || tiers[tier].color || "black"};
  margin: 0;
  padding: 0;
  ${({ center }) => center && "text-align: center"};
  ${({ opacity }) => opacity && `opacity: ${opacity}`};
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  outline: none;
  border-right-width: 0;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${styles.colors.grey[300]};
  padding-bottom: 3px;
`
