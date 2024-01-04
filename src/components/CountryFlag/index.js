import './index.css'

const CountryFlag = props => {
  const {countryDetails} = props
  const {name, flag, population} = countryDetails

  return (
    <li className="flag-container">
      <div className="inner-container">
        <img className="flag" src={flag} alt={name} />
        <h1 className="country-name">{name}</h1>
        <p className="population-count">{population}</p>
      </div>
    </li>
  )
}

export default CountryFlag
