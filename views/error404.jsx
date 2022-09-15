const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: uh-oh no page here!</h1>
                <p>Yikes, looks like we can't find that page anywhere!</p>
            </main>
        </Def>
    )
}

module.exports = error404