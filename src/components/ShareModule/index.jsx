import React from 'react'
import s from './index.module.scss'

export default ({ className }) => (
  <div className={className}>
    <div id='super-share-with-progress'>
      <div className='share--btns'>
        <div className='share-btn--wrapper'>
          <span className='check-icon fb checked'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='bg'
                d='M12 4.8939e-05C18.6274 4.8939e-05 24 5.37264 24 12C24 18.6274 18.6274 24 12 24C5.37264 24 4.97744e-05 18.6274 4.97744e-05 12C-0.0188081 5.39143 5.32318 0.0189068 11.9317 4.8939e-05C11.9545 -1.6313e-05 11.9773 -1.6313e-05 12 4.8939e-05Z'
                fill='#E2E3E3'
              ></path>
              <path
                d='M18.648 8.69326L10.1253 17.216L5.35254 12.4774L7.29574 10.5683L10.1253 13.3637L16.7048 6.78418L18.648 8.69326Z'
                fill='white'
              ></path>
            </svg>
          </span>
          <a
            className='share-btn active'
            href='https://www.facebook.com/dialog/share?app_id=138155566223&display=page&href=https%3A%2F%2Fviralkindness.org.au&redirect_uri=https%3A%2F%2Fviralkindness.org.au%2Fthanks&quote=There%E2%80%99s%20lots%20of%20ways%20we%20can%20stick%20together%20when%20we%20are%20apart!&hashtag=%23ViralKindness'
            id='fb'
            role='button'
          >
            <svg
              className='icon'
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='bg'
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M10.5339 0C11.3431 0 12 0.656953 12 1.46611V10.5339C12 11.343 11.343 12 10.5339 12H8.03855V7.47855H9.59948L9.89648 5.54213H8.03855V4.28548C8.03855 3.75572 8.29807 3.23932 9.13027 3.23932H9.975V1.59073C9.975 1.59073 9.20836 1.4599 8.47542 1.4599C6.94523 1.4599 5.94511 2.3873 5.94511 4.06624V5.54213H4.24418V7.47855H5.94511V12H1.46611C0.656953 12 0 11.343 0 10.5339V1.46611C0 0.656953 0.65693 0 1.46611 0H10.5339V0Z'
                fill='#1777F2'
              ></path>
            </svg>
            Share on Facebook
          </a>
        </div>
        <div className='share-btn--wrapper'>
          <span className='check-icon em'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='bg'
                d='M12 4.8939e-05C18.6274 4.8939e-05 24 5.37264 24 12C24 18.6274 18.6274 24 12 24C5.37264 24 4.97744e-05 18.6274 4.97744e-05 12C-0.0188081 5.39143 5.32318 0.0189068 11.9317 4.8939e-05C11.9545 -1.6313e-05 11.9773 -1.6313e-05 12 4.8939e-05Z'
                fill='#E2E3E3'
              ></path>
              <path
                d='M18.648 8.69326L10.1253 17.216L5.35254 12.4774L7.29574 10.5683L10.1253 13.3637L16.7048 6.78418L18.648 8.69326Z'
                fill='white'
              ></path>
            </svg>
          </span>
          <a
            className='share-btn'
            href='mailto:?subject=#ViralKindness&amp;body=There%E2%80%99s%20lots%20of%20ways%20we%20can%20stick%20together%20when%20we%20are%20apart!%20%23ViralKindness%20https%3A%2F%2Fviralkindness.org.au'
            id='em'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              className='icon'
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.8628 4.89069L6.468 0.175696C6.19275 -0.0594943 5.808 -0.0586943 5.52825 0.178896L0.13725 4.89069C0.05025 4.96669 0 5.08029 0 5.20028V11.2C0 11.6416 0.33675 12 0.75 12H11.25C11.664 12 12 11.6416 12 11.2V5.20028C12 5.08029 11.9498 4.96669 11.8628 4.89069Z'
                fill='#1C1C1C'
              ></path>
              <path
                d='M0 5.20029L10.5 12H0.75C0.336 12 0 11.6416 0 11.2V5.20029Z'
                fill='#464646'
              ></path>
              <path
                d='M12 5.20029L1.5 12H11.25C11.664 12 12 11.6416 12 11.2V5.20029Z'
                fill='#727272'
              ></path>
              <path
                d='M6.5 6.8369L4.30057 4.63746L5.44944 3.48859L6.5 4.53915L10.8006 0.238586L11.9494 1.38746L6.5 6.8369Z'
                fill='#DEDEDE'
              ></path>
            </svg>
            Send an email
          </a>
        </div>
        <div className='share-btn--wrapper'>
          <span className='check-icon tw'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='bg'
                d='M12 4.8939e-05C18.6274 4.8939e-05 24 5.37264 24 12C24 18.6274 18.6274 24 12 24C5.37264 24 4.97744e-05 18.6274 4.97744e-05 12C-0.0188081 5.39143 5.32318 0.0189068 11.9317 4.8939e-05C11.9545 -1.6313e-05 11.9773 -1.6313e-05 12 4.8939e-05Z'
                fill='#E2E3E3'
              ></path>
              <path
                d='M18.648 8.69326L10.1253 17.216L5.35254 12.4774L7.29574 10.5683L10.1253 13.3637L16.7048 6.78418L18.648 8.69326Z'
                fill='white'
              ></path>
            </svg>
          </span>
          <a
            className='share-btn'
            href='https://twitter.com/intent/tweet?text=There%E2%80%99s+lots+of+ways+we+can+stick+together+when+we+are+apart!+%23ViralKindness+https%3A%2F%2Fviralkindness.org.au'
            id='tw'
            role='button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              className='icon'
              width='12'
              height='10'
              viewBox='0 0 12 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='bg'
                d='M3.76951 9.7575C8.29772 9.7575 10.7755 6.0024 10.7755 2.7515C10.7755 2.64586 10.7755 2.54022 10.7707 2.43457C11.2509 2.08884 11.6687 1.65186 12 1.15726C11.5582 1.35414 11.0828 1.48379 10.5834 1.54622C11.0924 1.2437 11.4814 0.758703 11.6687 0.182473C11.1933 0.465786 10.6651 0.667467 10.1032 0.777911C9.65186 0.297719 9.0132 0 8.30732 0C6.94838 0 5.84394 1.10444 5.84394 2.46339C5.84394 2.65546 5.86795 2.84274 5.90636 3.02521C3.86074 2.92437 2.04562 1.93998 0.830732 0.45138C0.619448 0.816326 0.4994 1.2389 0.4994 1.69028C0.4994 2.54502 0.936374 3.29892 1.59424 3.7407C1.19088 3.72629 0.811525 3.61585 0.480192 3.43337V3.46699C0.480192 4.65786 1.33013 5.65666 2.45378 5.88235C2.2473 5.93998 2.03121 5.96879 1.80552 5.96879C1.64706 5.96879 1.4934 5.95438 1.34454 5.92557C1.65666 6.90516 2.56903 7.61585 3.64466 7.63505C2.79952 8.29772 1.7383 8.69148 0.585834 8.69148C0.388956 8.69148 0.192077 8.68187 0 8.65786C1.08523 9.34934 2.38175 9.7575 3.76951 9.7575'
                fill='#1DA1F2'
              ></path>
            </svg>
            Share on Twitter
          </a>
        </div>
        <div className='share-btn--wrapper'>
          <span className='check-icon wa'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='bg'
                d='M12 4.8939e-05C18.6274 4.8939e-05 24 5.37264 24 12C24 18.6274 18.6274 24 12 24C5.37264 24 4.97744e-05 18.6274 4.97744e-05 12C-0.0188081 5.39143 5.32318 0.0189068 11.9317 4.8939e-05C11.9545 -1.6313e-05 11.9773 -1.6313e-05 12 4.8939e-05Z'
                fill='#E2E3E3'
              ></path>
              <path
                d='M18.648 8.69326L10.1253 17.216L5.35254 12.4774L7.29574 10.5683L10.1253 13.3637L16.7048 6.78418L18.648 8.69326Z'
                fill='white'
              ></path>
            </svg>
          </span>
          <a
            className='share-btn'
            href='https://wa.me/?text=There%E2%80%99s%20lots%20of%20ways%20we%20can%20stick%20together%20when%20we%20are%20apart!%20%23ViralKindness%20https%3A%2F%2Fviralkindness.org.au'
            id='wa'
            rel='noopener noreferrer'
            role='button'
            target='_blank'
          >
            <svg
              className='icon'
              width='12'
              height='13'
              viewBox='0 0 12 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='bg'
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0.958737 9.25326C0.352421 8.316 0 7.19874 0 6C0 2.68863 2.68863 0 6 0C9.31137 0 12 2.68863 12 6C12 9.31137 9.31137 12 6 12C4.87768 12 3.82737 11.6912 2.92863 11.1543L0 12.1301L0.958737 9.25326V9.25326Z'
                fill='#F3F3F3'
              ></path>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.08105 8.78337C1.52147 7.99768 1.19242 7.03705 1.19242 6C1.19242 3.34674 3.34674 1.19242 6 1.19242C8.65326 1.19242 10.8076 3.34674 10.8076 6C10.8076 8.65326 8.65326 10.8069 6 10.8069C4.99579 10.8069 4.06358 10.4987 3.29179 9.97137L1.48421 10.5739L2.08105 8.78337V8.78337Z'
                fill='#2BD349'
              ></path>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M4.55622 7.24805C3.84633 6.38026 3.37264 5.31794 3.22422 4.16594C3.18443 3.8451 3.29117 3.52299 3.51538 3.28994C3.73959 3.05689 4.05727 2.93752 4.37938 2.96468L4.41033 2.96784C4.41033 2.96784 4.76464 3.06257 4.95854 3.11499C5.03559 3.13584 5.09685 3.19331 5.12275 3.26847C5.20991 3.52741 5.4158 4.13563 5.51306 4.42173C5.54464 4.51457 5.51559 4.61752 5.44106 4.68068C5.29391 4.80447 5.05075 5.0091 4.89917 5.13731C4.81769 5.20615 4.7918 5.32047 4.83601 5.4171C5.01222 5.8011 5.23706 6.15984 5.50359 6.48447C5.77769 6.80152 6.09285 7.08384 6.44148 7.32257C6.52991 7.38257 6.64675 7.37626 6.72822 7.30741C6.88043 7.17984 7.12359 6.9752 7.27012 6.85141C7.34527 6.78826 7.45138 6.77752 7.53791 6.82426C7.80317 6.96826 8.3678 7.27394 8.6078 7.40405C8.67791 7.44194 8.72464 7.51268 8.73159 7.59163C8.74991 7.79184 8.78401 8.15689 8.78401 8.15689L8.78148 8.18784C8.75369 8.50994 8.58254 8.80299 8.31475 8.98426C8.04696 9.16615 7.71159 9.21668 7.40212 9.1232C6.28296 8.77899 5.3097 8.12468 4.57327 7.26826L4.55622 7.24805Z'
                fill='#FFFFFF'
              ></path>
            </svg>
            Send on WhatsApp
          </a>
        </div>
        <div className='share-btn--wrapper'>
          <span className='check-icon sms'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='bg'
                d='M12 4.8939e-05C18.6274 4.8939e-05 24 5.37264 24 12C24 18.6274 18.6274 24 12 24C5.37264 24 4.97744e-05 18.6274 4.97744e-05 12C-0.0188081 5.39143 5.32318 0.0189068 11.9317 4.8939e-05C11.9545 -1.6313e-05 11.9773 -1.6313e-05 12 4.8939e-05Z'
                fill='#E2E3E3'
              ></path>
              <path
                d='M18.648 8.69326L10.1253 17.216L5.35254 12.4774L7.29574 10.5683L10.1253 13.3637L16.7048 6.78418L18.648 8.69326Z'
                fill='white'
              ></path>
            </svg>
          </span>
          <a
            className='share-btn'
            href='sms:?&body=There%E2%80%99s%20lots%20of%20ways%20we%20can%20stick%20together%20when%20we%20are%20apart!%20%23ViralKindness%20https%3A%2F%2Fviralkindness.org.au'
            id='sms'
            role='button'
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0)'>
                <path
                  d='M9.35714 0H2.64286C1.18325 0 0 1.18325 0 2.64286V9.35714C0 10.8168 1.18325 12 2.64286 12H9.35714C10.8168 12 12 10.8168 12 9.35714V2.64286C12 1.18325 10.8168 0 9.35714 0Z'
                  fill='url(#paint0_linear)'
                />
                <path
                  d='M6 2.07732C4.83186 2.07732 3.71158 2.46384 2.88558 3.15184C2.05958 3.83984 1.59554 4.77296 1.59553 5.74594C1.5966 6.37881 1.7942 7.00069 2.16914 7.55114C2.54408 8.1016 3.08361 8.5619 3.73528 8.88731C3.56172 9.27588 3.3014 9.64026 2.96513 9.96535C3.61725 9.85087 4.22941 9.61038 4.75397 9.2626C5.15843 9.36271 5.57806 9.41388 6 9.41457C7.16814 9.41456 8.28843 9.02804 9.11442 8.34004C9.94042 7.65204 10.4045 6.71892 10.4045 5.74594C10.4045 4.77296 9.94042 3.83984 9.11442 3.15184C8.28843 2.46384 7.16814 2.07732 6 2.07732V2.07732Z'
                  fill='white'
                />
              </g>
              <defs>
                <linearGradient
                  id='paint0_linear'
                  x1='6.09524'
                  y1='11.2034'
                  x2='6.09524'
                  y2='1.48926'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#0CBD2A' />
                  <stop offset='1' stop-color='#5BF675' />
                </linearGradient>
                <clipPath id='clip0'>
                  <rect width='12' height='12' fill='white' />
                </clipPath>
              </defs>
            </svg>
            Send via SMS
          </a>
        </div>
      </div>
      {/* <hr />
      <div className='share-link'>
        <button className='tiny-btn' id='copy-link'>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.09917 6.90083C3.22125 7.02292 3.38125 7.08417 3.54125 7.08417C3.70125 7.08417 3.86125 7.02292 3.98333 6.90083L6.90083 3.98333C7.145 3.73917 7.145 3.34333 6.90083 3.09917C6.65667 2.855 6.26083 2.855 6.01667 3.09917L3.09917 6.01667C2.855 6.26083 2.855 6.65667 3.09917 6.90083ZM4.55792 8.18333C3.8025 8.93917 2.5725 8.93917 1.81625 8.18333C1.06042 7.4275 1.06042 6.19792 1.81625 5.44208L3.18708 4.07125L2.30333 3.1875L0.9325 4.55833C-0.310833 5.80167 -0.310833 7.82458 0.9325 9.06792C1.55417 9.68917 2.37083 10 3.1875 10C4.00417 10 4.82083 9.68917 5.44208 9.0675L6.81292 7.69667L5.92875 6.8125L4.55792 8.18333ZM9.0675 0.9325C7.82458 -0.310833 5.80125 -0.310833 4.55792 0.9325L3.18708 2.30333L4.07125 3.1875L5.44208 1.81667C5.82 1.43875 6.31625 1.25 6.8125 1.25C7.30875 1.25 7.80542 1.43917 8.18333 1.81708C8.93917 2.57292 8.93917 3.8025 8.18333 4.55833L6.8125 5.92917L7.69667 6.81333L9.0675 5.4425C10.3108 4.19875 10.3108 2.17583 9.0675 0.9325Z'
              fill='#1777F2'
            ></path>
          </svg>

          <span>Copy link</span>
        </button>
        <div className='share-link--text'>http://getup.to/zPFxFli2</div>
      </div>
      <div className='privacy-policy'>
        <div className='privacy_policy_disclaimer'>
          In taking action, I agree to GetUp's Privacy Policy.
        </div>
      </div> */}
    </div>
  </div>
)
