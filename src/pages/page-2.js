import React from 'react'
import AnimLink from 'components/animLink'

import SEO from '../components/seo'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <AnimLink to="/">Go back to the homepage</AnimLink>
  </>
)

export default SecondPage
