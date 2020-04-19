import React from 'react'

import BackgroundImage from 'gatsby-background-image'


export default function products({img, heroclass}) {
  return (
    <div>
      <BackgroundImage  fluid={img} className={heroclass}>
      </BackgroundImage>
    </div>
  )
}