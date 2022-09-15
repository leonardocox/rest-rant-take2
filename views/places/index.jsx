const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className='col-sm-6'>
                <h2>{place.name}</h2>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                <img className='places-pics' src={place.pic} alt={place.name} width={600} height={337} />
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
        return (
            <Def>
                <main>
                    <h1>All da places!</h1>
                    <div className='row'>
                    {placesFormatted}
                    </div>
                </main>
            </Def>
        )
    }

module.exports = index