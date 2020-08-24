import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import gsap from 'gsap'

export default function animLink({ to = '/', children, ...props }) {
  const pageExitTransitions = (node) => {
    gsap.to(node, { duration: 0.5, opacity: 0 })
  }

  const pageEntryTransitions = (node) => {
    gsap.from(node, { duration: 1, opacity: 0 })
  }

  return (
    <TransitionLink
      {...props}
      to={to}
      exit={{
        trigger: ({ node }) => pageExitTransitions(node),
        length: 1,
      }}
      entry={{
        trigger: ({ node }) => pageEntryTransitions(node),
        delay: 0.6,
      }}
    >
      {children}
    </TransitionLink>
  )
}
