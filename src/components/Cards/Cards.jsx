import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...'
  }

  const covidInfoLabels = [
    { label: 'Infected', text: 'Number of active cases of COVID-19' },
    { label: 'Recovered', text: 'Number of recoveries from COVID-19' },
    { label: 'Deaths', text: 'Number of deaths caused by COVID-19' },
  ]

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {covidInfoLabels.map((info, i) => {
          return (
            <Grid
              key={i + 500}
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(
                styles.card,
                info.label === 'Infected'
                  ? styles.infected
                  : info.label === 'Recovered'
                  ? styles.recovered
                  : styles.deaths
              )}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {info.label}
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={
                      info.label === 'Infected'
                        ? confirmed.value
                        : info.label === 'Recovered'
                        ? recovered.value
                        : deaths.value
                    }
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">{info.text}</Typography>
              </CardContent>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Cards
