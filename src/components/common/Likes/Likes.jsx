import React from 'react';
import Preloader from '../Preloader/Preloader';
import style from './Likes.module.css';

const Likes = (props) => {

  let ariphmetic = (Math.sign(props.count) === '1') ? `+` :null;

  return (
    <div className={style.wrap}>      
      <button className={style.like} disabled={props.like} onClick={props.likeFunk}>
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0H19.8018V19H0V0ZM0 0H19.8018V19H0V0Z" fill="#AECAD5" />
          <path fillRule="evenodd" clipRule="evenodd" d="M10.8251 1.6306L6.25419 6.01642C5.94891 6.30934 5.77564 6.71309 5.77564 7.13267V15.0414C5.77564 15.9122 6.51821 16.6247 7.42579 16.6247H14.8515C15.5115 16.6247 16.1056 16.2447 16.3696 15.6668L19.0593 9.64224C19.7524 8.07475 18.556 6.33309 16.7821 6.33309H12.1205L12.9043 2.70727C12.9868 2.31143 12.863 1.90769 12.566 1.62269C12.0792 1.16352 11.3036 1.16352 10.8251 1.6306ZM2.47534 16.6247C3.38293 16.6247 4.12549 15.9122 4.12549 15.0414V8.70808C4.12549 7.83725 3.38293 7.12475 2.47534 7.12475C1.56776 7.12475 0.825195 7.83725 0.825195 8.70808V15.0414C0.825195 15.9122 1.56776 16.6247 2.47534 16.6247Z" fill="#AECAD5" />
        </svg>
      </button>
      <button className={style.dislike} disabled={props.dislike} onClick={props.dislikeFunk}>
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.8022 19L0.000205994 19L0.000203559 1.18095e-06L19.8022 0L19.8022 19ZM19.8022 19L0.000205994 19L0.000203559 1.18095e-06L19.8022 0L19.8022 19Z" fill="#AECAD5" />
          <path fillRule="evenodd" clipRule="evenodd" d="M8.97703 17.3691L13.548 12.9833C13.8533 12.6904 14.0265 12.2866 14.0265 11.867L14.0265 3.95819C14.0265 3.08735 13.284 2.37484 12.3764 2.37484L4.95061 2.37485C4.29055 2.37485 3.69649 2.75485 3.43246 3.33277L0.742684 9.35741C0.0496131 10.9249 1.24599 12.6666 3.01992 12.6666L7.68164 12.6666L6.89781 16.2925C6.81531 16.6883 6.93907 17.0921 7.2361 17.3771C7.7229 17.8362 8.49848 17.8362 8.97703 17.3691ZM17.3269 2.37484C16.4193 2.37484 15.6767 3.08735 15.6767 3.95819L15.6767 10.2916C15.6767 11.1624 16.4193 11.8749 17.3269 11.8749C18.2345 11.8749 18.977 11.1624 18.977 10.2916L18.977 3.95819C18.977 3.08735 18.2345 2.37484 17.3269 2.37484Z" fill="#AECAD5" />
        </svg>
      </button>
      <div className={style.likeCount}>
        {props.loading ? <Preloader />: null}
        <span>{ariphmetic}{props.count}</span>
      </div>
    </div>
  );
}

export default Likes;