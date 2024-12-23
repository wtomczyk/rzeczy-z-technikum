import React from 'react';

class Aaa extends React.Component {
      constructor(props) {
        super(props);
        this.state={
            data:props
        }
    }
    
    render() {
      if(this.state.data.anyprop){
      console.log(this.props)
      return (
       <div className="student_cont"><a>name: {this.state.data.anyprop.name}</a><br/><a>exam: {this.state.data.anyprop.scores[0].score}</a><br/><a>quiz: {this.state.data.anyprop.scores[1].score}</a><br/><a>homework: {this.state.data.anyprop.scores[2].score}</a><br/><a>homework: {this.state.data.anyprop.scores[3].score}</a></div>  
      
      );
      }
      else{
        return(<div></div>)
      }
    }
  }

export default Aaa;