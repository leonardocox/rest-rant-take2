const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img className='ramen-home' src='/images/ramen.jpg' alt='Ramen'/>
                    <div className='ramen-home'>
                        Photo by <a href="https://unsplash.com/@susannschuster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Susann Schuster</a> on <a href="https://unsplash.com/s/photos/ramen-noodle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <div className='fill-button'>
                <a href='/places'>
                    <button type="button" className='btn-primary'>Places Page</button>
                </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home