import React from 'react';
import AsideNavContainer from '../Aside/AsideNav/AsideNavContainer';
import Preloader from '../common/Preloader/Preloader';
import Raiting from '../Profile/Raiting/Raiting';
import style from './Account.module.css';
import AccountDataReduxForm from './AccountDataForm/AccountDataForm';

const Account = (props) => {
  console.log(props);
  return (
    <section className={`${style.wrap} container`}>
      <div key={props.userId} className={style.profile_card}>
        <div className={style.avatar}>
          <img src={props.avatar} alt="" />
        </div>
        <div className={style.discription}>
          <h2>{props.lastname} {props.firstname} {props.secondname}</h2>
          <div className={style.work}>
            <span>{props.position ? props.position : 'Странник'}</span>
            <span>{props.workplace ? props.workplace : 'Всё и Вся'}</span>
          </div>
        </div>
        <Raiting />
      </div>
      <div className={style.form_wrap}>
        {props.loadingAcc ? <Preloader /> : null}
        <AccountDataReduxForm 
          initialValues={props.initialValues}
          onSubmit={props.onFormSubmit}          
        />
      </div>
      
      <div className={style.extra}>
        <AsideNavContainer />
      </div>
    </section>
  )
}

export default Account