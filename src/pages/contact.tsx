import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/qbbang',
  },
  // {
  //   Comp: LinkedIn,
  //   alt: 'linkedin icon',
  //   link: 'https://www.linkedin.com/in/jj-kasper-0b5392166/',
  // },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:qbbang@gmail.com',
  },
]

export default () => (
  <>
    <Header titlePre="About" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
      </div>

      <h1 style={{ marginTop: 0 }}>👀 한눈에 보기</h1>

      <div className={contactStyles.about}>
        <pre>
          <strong>👨🏻‍💻 지금은? 2020. 10 </strong><br/>
          - KST모빌리티, 마카롱M 앱 iOS 개발자<br/>
        </pre>

        <pre>
          <strong>🕵🏻‍♂️ 예전에는?</strong><br/>
          - Bejewel,  아몬즈 앱 iOS 개발자<br/>
          19.07 ~ 20.08<br/>
          - 케어랩스,  굿닥 앱 iOS 인턴<br/>
          19.02 ~ 19.05<br/>
          - 패스트캠퍼스,  iOS 개발 스쿨 8기<br/>
          18.09 ~ 18.12<br/>
          - 한국이엔이,  셀프주유기 QT 개발자<br/>
          15.08 ~ 18.08<br/>
        </pre>
      </div>

      .name

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
