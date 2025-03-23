import React from 'react';
import Color from './Color';

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      colorNum: 400,
      colors: [],
    };

    for (let i = 0; i < this.state.colorNum; i++) {
      this.state.colors.push({ hexCode: this.generateColor() });
    }
  }

  generateColor() {
    return '#' + Math.random().toString(16).substring(2, 8);
  }

  updateColor(index) {
    const currentColor = this.generateColor();
    this.setState((prevState) => {
      const colors = [...prevState.colors];
      colors[index].hexCode = currentColor;
      return { colors };
    });
  }

  render() {
    return (
      <div className='color-container'>
        {this.state.colors.map((color, index) => (
          <Color
            key={`color-${index}`}
            index={index}
            Update={this.updateColor.bind(this)}
            hexCode={color.hexCode}
          />
        ))}
      </div>
    );
  }
}

export default MyApp;
