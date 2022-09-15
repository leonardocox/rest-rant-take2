const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: uh-oh! You weren't supposed to see this...</h1>
                <p>Let's hurry up and leave before he gets any more angry!</p>
                <div>
                    <img className='phillip' src='/images/phillip.webp' alt='Angry Cat'/>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404