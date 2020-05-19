import React from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import coronaImage from './images/image.png'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data: fetchedData, country })
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <picture className={styles.image}>
          <source media="(min-width: 650px)" srcSet={coronaImage} />
          <source media="(min-width: 465px)" srcSet={coronaImage} />
          <img
            className={styles.image}
            src={coronaImage}
            alt="corona_image"
            style={{ width: 'auto' }}
          />
        </picture>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
