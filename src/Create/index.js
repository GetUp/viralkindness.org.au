import React from 'react'
import s from './index.module.scss'
import PageHeader from '../components/PageHeader'
import ContentWithSidebar from '../components/ContentWithSidebar'
import color from '../assets/images/color.jpg'
import bw from '../assets/images/bw.jpg'
import htmltoimage from 'html-to-image'
import ScaleText from 'react-scale-text'
import { Download } from '../components/Icons'
import Footer from '../components/Footer'

export default () => {
  const [isColor, setIsColor] = React.useState(true)
  const placeholder = {
    name: 'Chandi',
    loc: 'Forest Lodge',
    phone: '499 999 999',
    other: ''
  }

  const [data, setData] = React.useState({
    name: '',
    loc: '',
    phone: '',
    help: {
      shopping: true,
      phone: false,
      supplies: false
    },
    other: ''
  })

  const handleChange = e => {
    return setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleCheckbox = e => {
    return setData({
      ...data,
      help: { ...data.help, [e.target.name]: e.target.checked }
    })
  }

  const handlePngDownload = e => {
    e.preventDefault()
    htmltoimage
      .toPng(document.getElementById('node'), {
        scale: 2,
        quality: 1
      })
      .then(function (dataUrl) {
        var link = document.createElement('a')
        link.download = 'image.png'
        link.href = dataUrl
        link.click()
      })
  }

  return (
    <>
      <PageHeader>
        <h1>Make your postcard</h1>
      </PageHeader>
      <ContentWithSidebar className={`${s.contentWithSidebar} ${s.headers}`}>
        <div></div>
        <div className={s.preview}>PREVIEW</div>
      </ContentWithSidebar>
      <ContentWithSidebar className={s.contentWithSidebar}>
        <div className={s.form}>
          <label htmlFor='name'>My name is:</label>
          <input
            type='text'
            id='name'
            placeholder={placeholder.name}
            value={data.name}
            name='name'
            onChange={handleChange}
          />
          <label htmlFor='loc'>I live locally in:</label>
          <input
            type='text'
            id='loc'
            placeholder={placeholder.loc}
            value={data.loc}
            name='loc'
            onChange={handleChange}
          />
          <label htmlFor='phone'>My phone number is:</label>
          <input
            type='text'
            id='phone'
            placeholder={placeholder.phone}
            value={data.phone}
            name='phone'
            onChange={handleChange}
          />
          <div className={s.checkboxContainer}>
            <p>I can help with:</p>
            <label className={s.checkbox}>
              <input
                type='checkbox'
                checked={data.help.shopping}
                name='shopping'
                onChange={handleCheckbox}
              />
              Picking up shopping
            </label>
            <label className={s.checkbox}>
              <input
                type='checkbox'
                checked={data.help.phone}
                name='phone'
                onChange={handleCheckbox}
              />
              A friendly phone call
            </label>
            <label className={s.checkbox}>
              <input
                type='checkbox'
                checked={data.help.supplies}
                name='supplies'
                onChange={handleCheckbox}
              />
              Urgent supplies
            </label>
          </div>
          <label htmlFor='other'>Other</label>
          <input
            type='text'
            id='other'
            placeholder={placeholder.other}
            value={data.other}
            name='other'
            onChange={handleChange}
          />

          <hr className={s.hr} />

          <div className={s.bottomBar}>
            <Tabs {...{ isColor, setIsColor, s, handlePngDownload }} />
          </div>
        </div>
        <div id='node'>
          <div className={s.imagePreviewContainer}>
            {isColor ? (
              <img src={color} className={s.imagePreview} />
            ) : (
              <img src={bw} className={s.imagePreview} />
            )}
            <div className={s.imagePreviewData}>
              <div className={`${s.name} ${s.dataContainer}`}>
                <ScaleText maxFontSize='52'>
                  <div className={s.text}>
                    {data.name === '' ? placeholder.name : data.name}
                  </div>
                </ScaleText>
              </div>
              <div className={`${s.location} ${s.dataContainer}`}>
                <ScaleText maxFontSize='52'>
                  <div className={s.text}>
                    {data.loc === '' ? placeholder.loc : data.loc}
                  </div>
                </ScaleText>
              </div>
              <div className={`${s.phone} ${s.dataContainer}`}>
                <ScaleText maxFontSize='52'>
                  <div className={s.text}>
                    {data.phone === '' ? placeholder.phone : data.phone}
                  </div>
                </ScaleText>
              </div>
              <div className={`${s.helpShopping} ${s.dataContainer}`}>
                <ScaleText maxFontSize='52'>
                  <div className={s.text}>{data.help.shopping && '✓'}</div>
                </ScaleText>
              </div>
              <div className={`${s.helpPhone} ${s.dataContainer}`}>
                <ScaleText maxFontSize='52'>
                  <div className={s.text}>{data.help.phone && '✓'}</div>
                </ScaleText>
              </div>
              <div className={`${s.helpSupplies} ${s.dataContainer}`}>
                <ScaleText maxFontSize='52'>
                  <div className={s.text}>{data.help.supplies && '✓'}</div>
                </ScaleText>
              </div>
              <div className={`${s.helpOther} ${s.dataContainer}`}>
                <ScaleText maxFontSize='52'>
                  <div className={s.text}>{data.other !== '' && '✓'}</div>
                </ScaleText>
              </div>
              <div className={`${s.helpOtherText} ${s.dataContainer}`}>
                <ScaleText maxFontSize='52'>
                  <div className={s.text}>{data.other}</div>
                </ScaleText>
              </div>
            </div>
          </div>
        </div>
      </ContentWithSidebar>
      <Footer />
    </>
  )
}

const Tabs = ({ isColor, setIsColor, s, handlePngDownload }) => (
  <>
    <div className={s.tabs}>
      <div
        className={`${s.tab} ${isColor && s.active}`}
        onClick={() => setIsColor(true)}
      >
        Color
      </div>
      <div
        className={`${s.tab} ${!isColor && s.active}`}
        onClick={() => setIsColor(false)}
      >
        Black & White
      </div>
    </div>
    <div className={s.downloadPostcard} onClick={handlePngDownload}>
      <Download />
      Download
    </div>
  </>
)
