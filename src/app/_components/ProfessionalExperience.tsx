import React from 'react'
import CareerHalight from './CareerHalight'
import CareerTia from './CareerTia'

export default function ProfessionalExperience() {
  return (
    <section id="professional-experience">
      <h1>Professional Experience</h1>
      <div className="flex flex-col gap-2 xl:flex-row xl:gap-24">
        <CareerTia />
        <CareerHalight />
    </div>
    </section>
  )
}
