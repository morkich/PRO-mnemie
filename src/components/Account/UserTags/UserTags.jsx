import React from 'react';
import style from './UserTags.module.css';

class UserTags extends React.Component {
  state = {
    activeInput: false,
  }

  addTagsReady = () => {
    this.setState({
      activeInput: true,
    })    
  }
  tagsOnlyRead = () => {
    this.setState({
      activeInput: false,
    })    
  }

  render() {
    return (
      <div className={style.wrap} onClick={this.addTagsReady}>
        <div className={style.tag}>
          Планирование и управление
          <button className={style.delete}>&times;</button>
        </div>
        <div className={style.tag}>
          Плановые показатели
          <button className={style.delete}>&times;</button>
        </div>
        {this.state.activeInput ? <input className={style.input} type="text" onBlur={this.tagsOnlyRead} autoFocus={true}/> : null}
      </div>
    )
  }
}

export default UserTags