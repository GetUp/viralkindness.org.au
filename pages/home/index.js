import React from 'react'
import s from './index.module.scss'
import Link from 'next/link'
import { Add, Create, Find } from '../../components/Icons'
import ContentWithSidebar from '../../components/ContentWithSidebar'
import GroupSearch from '../../components/GroupSearch'
import illustration from '../../assets/images/vk-illustration.svg'
import wave from '../../assets/images/wave.svg'
import { attributes } from '../../content/home.md'
import Markdown from '../../components/Markdown'

const scrollFocus = (el) => {
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  el.focus({ preventScroll: true })
}

const src = (id) =>
  `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FGetUpAustralia%2Fvideos%2F${id}%2F&show_text=0`

export default () => {
  return (
    <>
      <div className={s.headerContainer}>
        <div className={s.header}>
          <h1>{attributes.title}</h1>
          <h2>{attributes.subtitle}</h2>
          <Markdown>{attributes.blurb1}</Markdown>
          {attributes.fbVideoId && attributes.fbVideoId.length > 0 && (
            <iframe
              className={s.fbVideo}
              src={src(attributes.fbVideoId)}
              scrolling='no'
              frameBorder='0'
              allowFullScreen={true}
            />
          )}
          <Markdown>{attributes.blurb2}</Markdown>
          <div className={s.links}>
            <Link href='/add-a-group'>
              <a className={s.link}>
                <Add />
                <div>
                  <div className={s.linkText}>
                    <span>{attributes.addagroupLink}</span>
                  </div>
                </div>
              </a>
            </Link>
            {/* <Link href='#groupSearch' scroll={scrollFocus}> */}
            <Link href='#groupSearch'>
              <a className={s.link}>
                <Find />
                <div>
                  <div className={s.linkText}>
                    <span>{attributes.findagroupLink}</span>
                  </div>
                </div>
              </a>
            </Link>
            <Link href='/start-a-group'>
              <a className={s.link}>
                <Create />
                <div>
                  <div className={s.linkText}>
                    <span>{attributes.startagroupLink}</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className={s.illustrationWrapper}>
          <img
            src={illustration}
            alt='Raised hands holding objects, offering help'
          />
        </div>
      </div>
      <div className={s.waveContainer}>
        <img src={wave} alt='' />
      </div>
      <div className={s.contentWithSidebar}>
        <ContentWithSidebar>
          <GroupSearch
            content={attributes.groupSearch}
            className={s.groupSearch}
          />
          <div className={s.sidebarContainer}>
            <Link href='/postcards'>
              <a className={s.sidebarLink}>
                <h4 className={s.sidebarLinkHeader}>
                  <span>{attributes.postcardsLink.title}</span>
                </h4>
                <div className={s.sidebarLinkSubtitle}>
                  {attributes.postcardsLink.blurb}
                </div>
              </a>
            </Link>
            <Link href='/ways-to-help'>
              <a className={s.sidebarLink}>
                <h4 className={s.sidebarLinkHeader}>
                  <span>{attributes.waystohelpLink.title}</span>
                </h4>
                <div className={s.sidebarLinkSubtitle}>
                  {attributes.waystohelpLink.blurb}
                </div>
              </a>
            </Link>
          </div>
        </ContentWithSidebar>
      </div>
    </>
  )
}
