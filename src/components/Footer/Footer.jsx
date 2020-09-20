import React from 'react';
import style from './Footer.module.css';
import logo from '../../assets/img/logo-white.svg';
import FooterNav from './FooterNav/FooterNav';


const Footer = () => {
    return (
      <div className={`container ${style.wrap}`}>
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <nav className={style.menu}>
          <FooterNav />
        </nav>
        <div className={style.bottom}>
          <div className={style.text_block}>
            <p>
              Републикация материалов - 
              только с ссылкой на promnenie.com,
              с разрешения редакции сайта.
            </p>
            <p>
              Редакция не несет ответственности за высказывания пользователей на сайте.
            </p>
          </div>
          <div className={style.contact}>
            <a href="tel:8-800-800-00-00">8-800-800-00-00</a>
          <p>
            100000, г. Москва,
            ул. Тверская д. 58, офис 12556
          </p>  
          </div>          
        </div>
        <div className={style.dev}></div>
      </div>
    );
}

export default Footer;