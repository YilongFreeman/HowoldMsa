import * as React from 'react';
import DropArea from '../Components/DropArea/DropArea'
import Header from '../Components/Header/Header'
import Result from '../Components/Result/Result'
import '../Page/Howold.css'



interface IState {
  result: string
  filelength: number
}

class Howold extends React.Component<{}, IState>{
  public constructor(props: any) {
    super(props)
    this.state = {
      result: "",
      filelength: 0,
    }
  }

  public render() {
    return (
      <div className="background">
        <Header />
        <DropArea setResults={this.resultstate} />
        <Result result={this.state.result} filelength={this.state.filelength} />
      </div>
    );
  }
  public resultstate = (resultString: string, filelen: any) => {
    console.log("hello")
    this.setState({ result: resultString, filelength: filelen })
  }

  
}

export default Howold;