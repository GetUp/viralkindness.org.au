import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.scss'
import ReactGA from 'react-ga'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import ContentWithSidebar from '../components/ContentWithSidebar'

export default () => {
  useEffect(
    () => ReactGA.pageview(window.location.pathname + window.location.search),
    []
  )

  const states = [
    {
      name: 'New South Wales',
      href: 'https://preview.nsw.gov.au/covid-19/public-health-orders'
    },
    {
      name: 'Victoria',
      href: 'https://www.vic.gov.au/coronavirusresponse'
    },
    {
      name: 'Queensland',
      href:
        'https://www.qld.gov.au/health/conditions/health-alerts/coronavirus-covid-19/current-status/current-status-and-contact-tracing-alerts'
    },
    {
      name: 'South Australia',
      href:
        'https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/health+topics/health+topics+a+-+z/covid+2019/latest+updates/latest+updates+-+covid-19#ForPublicAction'
    },
    {
      name: 'Western Australia',
      href:
        'https://www.wa.gov.au/organisation/department-of-the-premier-and-cabinet/covid-19-coronavirus-latest-updates'
    },
    {
      name: 'Tasmania',
      href: 'https://www.coronavirus.tas.gov.au/'
    },
    {
      name: 'ACT',
      href: 'https://www.covid19.act.gov.au/updates'
    },
    {
      name: 'Northern Territory',
      href: 'https://coronavirus.nt.gov.au/'
    }
  ]

  return (
    <>
      <PageHeader>
        <h1 className={s.pageHeader}>Following the rules</h1>
        <p>Advice on latest rules and health guidelines</p>
      </PageHeader>
      <ContentWithSidebar>
        <div>
          <br />
          <br />
          <p>
            It’s vital that we continue to safely reach out to our friends and
            neighbours to provide essential care during the coronavirus crisis.
          </p>
          <p>
            We can meet the needs of isolated or vulnerable people in our
            community whilst following the latest health guidelines and physical
            distancing rules.
          </p>
          <p>
            Before you begin, check the latest rules and advice in your state:
          </p>
          <ul>
            {states.map(({ href, name }) => (
              <li key={name}>
                <a href={href} target='_blank' rel='noopener noreferrer'>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <p>
            If you are feeling unwell or have symptoms do not provide support or
            care to others.
          </p>
          <p>
            Follow the current health guidelines at all times, such as washing
            your hands regularly, keeping 1.5 metres distance from others and
            using tap and pay.
          </p>
          <p>Reaching out to people in need:</p>
          <ul>
            <li>
              Wherever possible reach out to people in your community online or
              on the phone
            </li>
            <li>
              Use your exercise walk to distribute community care postcards
            </li>
            <li>Put up posters or signs on your way to do your shopping</li>
            <li>
              Get the job done while following the current rules at all times
            </li>
          </ul>
          <p>
            Providing essential care to someone who is unable to leave the house
            is an essential activity if they can’t get it done without your
            help.
          </p>
          <p>Essential activities include:</p>
          <ul>
            <li>Shopping for and delivering groceries and other essentials </li>
            <li>Delivering home cooked meals</li>
            <li>Getting a prescription filled at the pharmacy</li>
            <li>Walking the dog</li>
          </ul>
          <p>
            <Link to='/resources#how-to-use-postcards'>
              Read our tips for safely preparing and delivering community care
              postcards and providing essential care to your friends and
              neighbours.
            </Link>
          </p>
          <p>We can stay together, even when we’re apart.</p>
        </div>
      </ContentWithSidebar>
      <Footer />
    </>
  )
}
