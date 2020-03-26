import React from 'react'
import bw from '../assets/images/bw.jpg'
import colour from '../assets/images/colour.jpg'

export const Color = ({ className }) => (
  <img src={colour} className={className} />
)

export const BlackWhite = ({ className }) => (
  <img src={bw} className={className} />
)
