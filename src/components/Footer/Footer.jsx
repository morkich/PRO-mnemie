import React from 'react';
import style from './Footer.module.css';


const Footer = () => {
    return (
    <footer className={style.main}>
        <p className={style.pharagraph}>auto-fit будет вести себя почти как auto-fill, но если есть только одна строка и есть место для дополнительных колонок, но нет элементов, которые можно вставить эти колонки, то тогда он сделает ширину пустых колонок равную нулю. А если выставить максимальную ширину колонок на 1fr, то браузер разделит оставшееся место поровну между ними.
          Вы можете поиграться с этим на Codepen:
        </p>
    </footer>
    );
}

export default Footer;