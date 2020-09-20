import React from 'react';
import style from './AsideTV.module.css';
import Title from '../../common/Title/Title';
import imageVideo from '../../../assets/img/photos/video.jpg';

const AsideTV = (props) => {
  return (
    <div className={style.wrap}>
      <Title title={'tv pro мнение'} uppercase={true} small={true} />
      <div className={style.item}>
        <div className={style.video}>
          <img src={imageVideo} alt=""/>
        </div>
        <div className={style.info}>
          <div className={style.date}>21 июля 2020 г.</div>
          <div className={style.extra}>
            <div className={style.view}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00012 2.40039C5.09739 2.40039 4.36377 3.11772 4.36377 4.0004C4.36377 4.88308 5.09739 5.60041 6.00012 5.60041C6.90285 5.60041 7.63647 4.88308 7.63647 4.0004C7.63647 3.11772 6.90283 2.40039 6.00012 2.40039Z" fill="#7C9BA9"/>
                <path d="M6 0C3.27272 0 0.943644 1.65865 0 4C0.943644 6.34133 3.27272 8 6 8C8.72999 8 11.0564 6.34133 12 4C11.0564 1.65865 8.72999 0 6 0ZM6 6.66665C4.49455 6.66665 3.27272 5.47197 3.27272 3.99997C3.27272 2.52797 4.49455 1.33333 6 1.33333C7.50545 1.33333 8.72728 2.528 8.72728 4C8.72728 5.472 7.50545 6.66665 6 6.66665Z" fill="#7C9BA9"/>
              </svg>
              <span>253</span>
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5C0 0.223857 0.223858 0 0.5 0H11.5C11.7761 0 12 0.223858 12 0.5V6.99984C12 7.27598 11.7761 7.49984 11.5 7.49984H4.49748L1.49793 9.00003L1.49794 7.49984H0.5C0.223858 7.49984 0 7.27598 0 6.99984V0.5ZM1.49902 1.50008H10.499V2.25006H1.49902V1.50008ZM10.4995 2.99936H1.49951V3.74935H10.4995V2.99936ZM1.49951 5.24948H7.49951V4.4995H1.49951V5.24948Z" fill="#7C9BA9"/>
              </svg>
              <span>125</span>
            </div>
          </div>
        </div>
        <div className={style.author}>Петр Петров</div>
        <div className={style.title}>Как контролировать время сотрудников через процессы</div>
      </div>

      <div className={style.item}>
        <div className={style.video}>
          <img src={imageVideo} alt=""/>
        </div>
        <div className={style.info}>
          <div className={style.date}>21 июля 2020 г.</div>
          <div className={style.extra}>
            <div className={style.view}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00012 2.40039C5.09739 2.40039 4.36377 3.11772 4.36377 4.0004C4.36377 4.88308 5.09739 5.60041 6.00012 5.60041C6.90285 5.60041 7.63647 4.88308 7.63647 4.0004C7.63647 3.11772 6.90283 2.40039 6.00012 2.40039Z" fill="#7C9BA9"/>
                <path d="M6 0C3.27272 0 0.943644 1.65865 0 4C0.943644 6.34133 3.27272 8 6 8C8.72999 8 11.0564 6.34133 12 4C11.0564 1.65865 8.72999 0 6 0ZM6 6.66665C4.49455 6.66665 3.27272 5.47197 3.27272 3.99997C3.27272 2.52797 4.49455 1.33333 6 1.33333C7.50545 1.33333 8.72728 2.528 8.72728 4C8.72728 5.472 7.50545 6.66665 6 6.66665Z" fill="#7C9BA9"/>
              </svg>
              <span>253</span>
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5C0 0.223857 0.223858 0 0.5 0H11.5C11.7761 0 12 0.223858 12 0.5V6.99984C12 7.27598 11.7761 7.49984 11.5 7.49984H4.49748L1.49793 9.00003L1.49794 7.49984H0.5C0.223858 7.49984 0 7.27598 0 6.99984V0.5ZM1.49902 1.50008H10.499V2.25006H1.49902V1.50008ZM10.4995 2.99936H1.49951V3.74935H10.4995V2.99936ZM1.49951 5.24948H7.49951V4.4995H1.49951V5.24948Z" fill="#7C9BA9"/>
              </svg>
              <span>125</span>
            </div>
          </div>
        </div>
        <div className={style.author}>Петр Петров</div>
        <div className={style.title}>Как контролировать время сотрудников через процессы</div>
      </div>

      <div className={style.item}>
        <div className={style.video}>
          <img src={imageVideo} alt=""/>
        </div>
        <div className={style.info}>
          <div className={style.date}>21 июля 2020 г.</div>
          <div className={style.extra}>
            <div className={style.view}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00012 2.40039C5.09739 2.40039 4.36377 3.11772 4.36377 4.0004C4.36377 4.88308 5.09739 5.60041 6.00012 5.60041C6.90285 5.60041 7.63647 4.88308 7.63647 4.0004C7.63647 3.11772 6.90283 2.40039 6.00012 2.40039Z" fill="#7C9BA9"/>
                <path d="M6 0C3.27272 0 0.943644 1.65865 0 4C0.943644 6.34133 3.27272 8 6 8C8.72999 8 11.0564 6.34133 12 4C11.0564 1.65865 8.72999 0 6 0ZM6 6.66665C4.49455 6.66665 3.27272 5.47197 3.27272 3.99997C3.27272 2.52797 4.49455 1.33333 6 1.33333C7.50545 1.33333 8.72728 2.528 8.72728 4C8.72728 5.472 7.50545 6.66665 6 6.66665Z" fill="#7C9BA9"/>
              </svg>
              <span>253</span>
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5C0 0.223857 0.223858 0 0.5 0H11.5C11.7761 0 12 0.223858 12 0.5V6.99984C12 7.27598 11.7761 7.49984 11.5 7.49984H4.49748L1.49793 9.00003L1.49794 7.49984H0.5C0.223858 7.49984 0 7.27598 0 6.99984V0.5ZM1.49902 1.50008H10.499V2.25006H1.49902V1.50008ZM10.4995 2.99936H1.49951V3.74935H10.4995V2.99936ZM1.49951 5.24948H7.49951V4.4995H1.49951V5.24948Z" fill="#7C9BA9"/>
              </svg>
              <span>125</span>
            </div>
          </div>
        </div>
        <div className={style.author}>Петр Петров</div>
        <div className={style.title}>Как контролировать время сотрудников через процессы</div>
      </div>

      <div className={style.item}>
        <div className={style.video}>
          <img src={imageVideo} alt=""/>
        </div>
        <div className={style.info}>
          <div className={style.date}>21 июля 2020 г.</div>
          <div className={style.extra}>
            <div className={style.view}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00012 2.40039C5.09739 2.40039 4.36377 3.11772 4.36377 4.0004C4.36377 4.88308 5.09739 5.60041 6.00012 5.60041C6.90285 5.60041 7.63647 4.88308 7.63647 4.0004C7.63647 3.11772 6.90283 2.40039 6.00012 2.40039Z" fill="#7C9BA9"/>
                <path d="M6 0C3.27272 0 0.943644 1.65865 0 4C0.943644 6.34133 3.27272 8 6 8C8.72999 8 11.0564 6.34133 12 4C11.0564 1.65865 8.72999 0 6 0ZM6 6.66665C4.49455 6.66665 3.27272 5.47197 3.27272 3.99997C3.27272 2.52797 4.49455 1.33333 6 1.33333C7.50545 1.33333 8.72728 2.528 8.72728 4C8.72728 5.472 7.50545 6.66665 6 6.66665Z" fill="#7C9BA9"/>
              </svg>
              <span>253</span>
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5C0 0.223857 0.223858 0 0.5 0H11.5C11.7761 0 12 0.223858 12 0.5V6.99984C12 7.27598 11.7761 7.49984 11.5 7.49984H4.49748L1.49793 9.00003L1.49794 7.49984H0.5C0.223858 7.49984 0 7.27598 0 6.99984V0.5ZM1.49902 1.50008H10.499V2.25006H1.49902V1.50008ZM10.4995 2.99936H1.49951V3.74935H10.4995V2.99936ZM1.49951 5.24948H7.49951V4.4995H1.49951V5.24948Z" fill="#7C9BA9"/>
              </svg>
              <span>125</span>
            </div>
          </div>
        </div>
        <div className={style.author}>Петр Петров</div>
        <div className={style.title}>Как контролировать время сотрудников через процессы</div>
      </div>

      <div className={style.item}>
        <div className={style.video}>
          <img src={imageVideo} alt=""/>
        </div>
        <div className={style.info}>
          <div className={style.date}>21 июля 2020 г.</div>
          <div className={style.extra}>
            <div className={style.view}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00012 2.40039C5.09739 2.40039 4.36377 3.11772 4.36377 4.0004C4.36377 4.88308 5.09739 5.60041 6.00012 5.60041C6.90285 5.60041 7.63647 4.88308 7.63647 4.0004C7.63647 3.11772 6.90283 2.40039 6.00012 2.40039Z" fill="#7C9BA9"/>
                <path d="M6 0C3.27272 0 0.943644 1.65865 0 4C0.943644 6.34133 3.27272 8 6 8C8.72999 8 11.0564 6.34133 12 4C11.0564 1.65865 8.72999 0 6 0ZM6 6.66665C4.49455 6.66665 3.27272 5.47197 3.27272 3.99997C3.27272 2.52797 4.49455 1.33333 6 1.33333C7.50545 1.33333 8.72728 2.528 8.72728 4C8.72728 5.472 7.50545 6.66665 6 6.66665Z" fill="#7C9BA9"/>
              </svg>
              <span>253</span>
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5C0 0.223857 0.223858 0 0.5 0H11.5C11.7761 0 12 0.223858 12 0.5V6.99984C12 7.27598 11.7761 7.49984 11.5 7.49984H4.49748L1.49793 9.00003L1.49794 7.49984H0.5C0.223858 7.49984 0 7.27598 0 6.99984V0.5ZM1.49902 1.50008H10.499V2.25006H1.49902V1.50008ZM10.4995 2.99936H1.49951V3.74935H10.4995V2.99936ZM1.49951 5.24948H7.49951V4.4995H1.49951V5.24948Z" fill="#7C9BA9"/>
              </svg>
              <span>125</span>
            </div>
          </div>
        </div>
        <div className={style.author}>Петр Петров</div>
        <div className={style.title}>Как контролировать время сотрудников через процессы</div>
      </div>

      <div className={style.item}>
        <div className={style.video}>
          <img src={imageVideo} alt=""/>
        </div>
        <div className={style.info}>
          <div className={style.date}>21 июля 2020 г.</div>
          <div className={style.extra}>
            <div className={style.view}>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00012 2.40039C5.09739 2.40039 4.36377 3.11772 4.36377 4.0004C4.36377 4.88308 5.09739 5.60041 6.00012 5.60041C6.90285 5.60041 7.63647 4.88308 7.63647 4.0004C7.63647 3.11772 6.90283 2.40039 6.00012 2.40039Z" fill="#7C9BA9"/>
                <path d="M6 0C3.27272 0 0.943644 1.65865 0 4C0.943644 6.34133 3.27272 8 6 8C8.72999 8 11.0564 6.34133 12 4C11.0564 1.65865 8.72999 0 6 0ZM6 6.66665C4.49455 6.66665 3.27272 5.47197 3.27272 3.99997C3.27272 2.52797 4.49455 1.33333 6 1.33333C7.50545 1.33333 8.72728 2.528 8.72728 4C8.72728 5.472 7.50545 6.66665 6 6.66665Z" fill="#7C9BA9"/>
              </svg>
              <span>253</span>
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5C0 0.223857 0.223858 0 0.5 0H11.5C11.7761 0 12 0.223858 12 0.5V6.99984C12 7.27598 11.7761 7.49984 11.5 7.49984H4.49748L1.49793 9.00003L1.49794 7.49984H0.5C0.223858 7.49984 0 7.27598 0 6.99984V0.5ZM1.49902 1.50008H10.499V2.25006H1.49902V1.50008ZM10.4995 2.99936H1.49951V3.74935H10.4995V2.99936ZM1.49951 5.24948H7.49951V4.4995H1.49951V5.24948Z" fill="#7C9BA9"/>
              </svg>
              <span>125</span>
            </div>
          </div>
        </div>
        <div className={style.author}>Петр Петров</div>
        <div className={style.title}>Как контролировать время сотрудников через процессы</div>
      </div>
    </div>
  )
}

export default AsideTV;