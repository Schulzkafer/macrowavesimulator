import React from 'react';

export default class Buttonone extends React.Component {
   render() {
      return <div className="buttons" onClick={this.props.handleTimeSet} ><p>0</p></div>
   }
}