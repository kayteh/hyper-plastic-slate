exports.decorateConfig = config => {
  // const colors = {
  //   black: '#21252B',
  //   red: '#15ab9c',
  //   green: '#98C379',
  //   yellow: '#c5a7d9',
  //   blue: '#61AFEF',
  //   magenta: '#B57EDC',
  //   cyan: '#56B6C2',
  //   white: '#A9B2C3',
  //   lightBlack: '#5F6672',
  //   lightRed: '#E34234',
  //   lightGreen: '#66FF00',
  //   lightYellow: '#E5C07B',
  //   lightBlue: '#007FFF',
  //   lightMagenta: '#8B00FF',
  //   lightCyan: '#08E8DE',
  //   lightWhite: '#D4D7D9',
  // }

  const colors = {
    black: '#21252b',
    blue: '#264b49',
    cyan: '#15ab9c',
    green: '#81d778',
    magenta: '#a481d3',
    red: '#e2a8bf',
    white: '#35b1d2',
    yellow: '#c4c9c0',
    lightBlack: '#e0e0e0',
    lightBlue: '#7ab0d2',
    lightCyan: '#8cdfe0',
    lightGreen: '#beffa8',
    lightMagenta: '#c5a7d9',
    lightRed: '#ffcdd9',
    lightWhite: '#efefef',
    lightYellow: '#d0ccca',
  }

  const backgroundColor = '#21252b'
  const foregroundColor = '#35b1d2'
  const borderColor = '#080A0F'
  const cursorColor = '#A9B2C3'
  const cursorAccentColor = '#21252b'
  const selectionColor = '#A9B2C333'

  const css = `
    ${config.css || ''}

    .header_header {
      background-color: #181A1F;
      border-bottom: 1px solid #080A0F;
    }

    .tabs_borderShim {
      border: 0;
    }

    .tab_tab {
      border: 0;
      border-left: 1px solid #080A0F;
      background-color: transparent;
      color: #5F6672;
    }

    .tab_active {
      background-color: #21252b;
      color: #A9B2C3;
    }
  `

  return Object.assign({}, config, {
    colors,
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor,
    selectionColor,
    css,
  })
}
