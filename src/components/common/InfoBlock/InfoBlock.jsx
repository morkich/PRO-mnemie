import React from 'react';
import style from './InfoBlock.module.css';

const InfoBlock = (props) => {

  const colorTheme = props.darkTheme ? 'rgba(124, 155, 169, 1)' : 'white';  
  let iconViews;
  let iconComments;
  if(props.size === 'medium'){
    iconViews = <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00045 3.60107C7.64634 3.60107 6.5459 4.67705 6.5459 6.00105C6.5459 7.32505 7.64634 8.40102 9.00045 8.40102C10.3546 8.40102 11.455 7.32505 11.455 6.00105C11.455 4.67705 10.3545 3.60107 9.00045 3.60107Z" fill={colorTheme}/><path d="M9 0C4.90908 0 1.41547 2.48798 0 6C1.41547 9.51199 4.90908 12 9 12C13.095 12 16.5845 9.51199 18 6C16.5845 2.48798 13.095 0 9 0ZM9 9.99998C6.74182 9.99998 4.90908 8.20796 4.90908 5.99996C4.90908 3.79196 6.74182 1.99999 9 1.99999C11.2582 1.99999 13.0909 3.792 13.0909 6C13.0909 8.208 11.2582 9.99998 9 9.99998Z" fill="#7C9BA9"/></svg>;
    iconComments = <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 0.5C0 0.223858 0.223858 0 0.5 0H15.5C15.7761 0 16 0.223858 16 0.5V9.5C16 9.77614 15.7761 10 15.5 10H5.99698L1.99737 12.0004L1.99737 10H0.5C0.223858 10 0 9.77614 0 9.5V0.5ZM1.99874 2.00114H13.9987V3.00114H1.99874V2.00114ZM13.9987 3.99923H1.99874V4.99923H13.9987V3.99923ZM1.99874 6.99929H9.99874V5.99929H1.99874V6.99929Z" fill={colorTheme}/></svg>;  
  }else{
    iconViews = <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00013 2.4657C5.0974 2.4657 4.36377 3.18302 4.36377 4.0657C4.36377 4.94837 5.0974 5.6657 6.00013 5.6657C6.90287 5.6657 7.63649 4.94837 7.63649 4.0657C7.63649 3.18302 6.90284 2.4657 6.00013 2.4657Z" fill={colorTheme}/><path d="M6 0.0654297C3.27272 0.0654297 0.943644 1.72408 0 4.06543C0.943644 6.40675 3.27272 8.06543 6 8.06543C8.72999 8.06543 11.0564 6.40675 12 4.06543C11.0564 1.72408 8.72999 0.0654297 6 0.0654297ZM6 6.73208C4.49455 6.73208 3.27272 5.5374 3.27272 4.0654C3.27272 2.5934 4.49455 1.39875 6 1.39875C7.50545 1.39875 8.72728 2.59343 8.72728 4.06543C8.72728 5.53743 7.50545 6.73208 6 6.73208Z" fill={colorTheme}/></svg>;
    iconComments = <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.864746 0.565307C0.864746 0.289165 1.0886 0.0653076 1.36475 0.0653076H12.4154C12.6915 0.0653076 12.9154 0.289165 12.9154 0.565308V7.06515C12.9154 7.34129 12.6915 7.56515 12.4154 7.56515H5.3813L2.36906 9.06536L2.36906 7.56515H1.36475C1.0886 7.56515 0.864746 7.34129 0.864746 7.06515V0.565307ZM2.37021 1.56604H11.4082V2.31602H2.37021V1.56604ZM11.4081 3.06458H2.37012V3.81456H11.4081V3.06458ZM2.37012 5.31469H8.39543V4.56471H2.37012V5.31469Z" fill={colorTheme}/></svg>;    
  }

  return (
    <div className={style.info_block}>
      <div className={style.info_block_box}>
        {iconViews}
        <div style={{ color: colorTheme }} className={style.views}>{props.views ? props.views : 0}</div>
      </div>
      
      <div className={style.info_block_box}>
        {iconComments}
        <div style={{ color: colorTheme }} className={style.comments}>{props.comment}</div>
      </div>
      
    </div>
  );
}

export default InfoBlock;