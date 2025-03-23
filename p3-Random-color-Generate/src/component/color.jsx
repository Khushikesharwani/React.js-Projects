import React from 'react';

class Color extends React.Component {
  render() {
    const style = {
      backgroundColor: this.props.hexCode,
    };

    return (
      <div 
        className='color' 
        style={style} 
        onClick={() => this.props.Update(this.props.index)}
      >
        <p>{this.props.hexCode}</p>
      </div>
    );
  }
}

export default Color;
