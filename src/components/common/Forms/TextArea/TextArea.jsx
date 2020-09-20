import React from 'react';
import style from '../Forms.module.css';

class TextArea extends React.Component {
  state = {
    height: 200,
  }

  updateTextArea = (e) => {
    this.setState({
      height: e.target.scrollHeight,
    })
  }

  render() {
    const autoSize = this.state.height;
    const hasError = this.props.meta.touched && this.props.meta.error;
    return (
      <div className={`${style.formControl} ${hasError && style.error}`}>
        <textarea
          {...this.props.input}
          onFocus={this.updateTextArea}
          onChange={(e) => {
            this.props.input.onChange(e);
            this.updateTextArea(e);
          }}
          name={this.props.input.name}
          placeholder={this.props.placeholder}
          style={{ height: autoSize }}
          className={style.textarea}
        />
        {hasError && <span>{this.props.meta.error}</span>}
      </div>
    )
  }
}

export default TextArea