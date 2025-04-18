import { ReactElement } from 'react'
import styles from './footer.module.css'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'

export default function Footer(): ReactElement {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          github
          <GitHubLogoIcon></GitHubLogoIcon>
        </li>
        <li>
          piotrpopiolek.pl
          <GlobeIcon></GlobeIcon>
        </li>
      </ul>
    </div>
  )
}
