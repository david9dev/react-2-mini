import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor()
  {
    super();

    this.state = {
      fontColor: "black",
      fontSize: 12,
      fontFamily: "monospace",
      allowEdit: "true"
    }

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  }

   updateColor(value)
   {
     this.setState({
       fontColor: value
     })
   }

   updateSize(value)
   {
     this.setState({
       fontSize: parseInt(value, 10)
     })
   }

   updateFamily(value)
   {
     this.setState({
       fontFamily: value
     })
   }

   updateEditStatus(value)
   {
     this.setState({
       allowEdit: value
     })
   }

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          <EditToggle
          method={(value) => this.updateEditStatus(value)}/>
          { /* Render ColorChanger */ }
          <ColorChanger
          edit={this.state.allowEdit}
          method={(value) => this.updateColor(value)}/>
          { /* Render SizeChanger */ }
          <SizeChanger
          edit={this.state.allowEdit}
          method={(value) => this.updateSize(value)}/>
          { /* Render FamilyChanger */ }
          <FamilyChanger
          edit={this.state.allowEdit}
          method={(value) => this.updateFamily(value)}/>
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
          <TextContainer 
          fontColor={this.state.fontColor}
          fontSize={this.state.fontSize}
          fontFamily={this.state.fontFamily}
          />
        </div>
      </div>
    )
  }
}

export default App;
