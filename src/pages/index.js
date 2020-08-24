import React, { useRef, useEffect } from 'react'
import AnimLink from 'components/animLink'
import gsap from 'gsap'

import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => {
  const logo = useRef()
  const desc = useRef()

  const animatePage = () => {
    gsap.from(logo.current, {
      duration: 2,
      x: 350,
      ease: 'elastic',
    })
    gsap.from(desc.current, {
      duration: 3,
      x: -350,
    })
  }

  useEffect(() => {
    animatePage()
  }, [])

  return (
    <>
      <SEO title="Home" />
      <div ref={desc}>
        <p>Simple Gatsby Starter </p>
        <div>Included in the package</div>
        <ol>
          <li>
            <b>gatsby-plugin-resolve-src</b> for absolute import path
          </li>
          <li>
            <b>gatsby-plugin-transition-link</b> with <b>gsap</b> for page
            transition and animation
          </li>
          <li>
            Customized <b>{'<AnimLink/>'}</b> component wrapper for page
            switching and transition settings inside components folder
          </li>
        </ol>
      </div>
      <div ref={logo} style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <AnimLink to="/page-2/">Go to page 2</AnimLink> <br />
      <AnimLink to="/using-typescript/">Go to "Using TypeScript"</AnimLink>
    </>
  )
}

export default IndexPage
