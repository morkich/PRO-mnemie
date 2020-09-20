import React from 'react';
import style from '../Forms.module.css';

class InputList extends React.Component {

  state = {
    inFocus: false
  }

  openInput = (event) => {
    this.setState({
      inFocus: true
    })
  }

  render() {
    let optionReady = this.props.datalist
      .map((item, i) => <option value={item} key={i} />);
    const hasError = this.props.meta.touched && this.props.meta.error;
    return (
      <div className={`${style.formControl} ${style.formControlFixed} ${hasError && style.error}`}>
        <input              
          {...this.props.input}
          name={this.props.input.name}
          placeholder={this.props.placeholder}
          className={`${style.input} ${style.inputIcon}`}
          list={this.props.input.name}
        />
        <div className={`${style.formIconBox} ${style.deltaIcon}`} onClick={this.openInput}></div>
        <datalist id={this.props.input.name}>
          {optionReady}
        </datalist>
        {hasError && <span>{this.props.meta.error}</span>}
      </div>
    )
  }
}

export default InputList;