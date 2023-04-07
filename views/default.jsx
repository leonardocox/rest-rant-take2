const React = require('react')

function Def (html) {
  return (
      <html>
          <head>
              <title>Title</title>
              <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css' />
              <link rel='stylesheet' href='/css/style.css' />
          </head>
          <body>
            <nav className='container red top-bottom-borders-in'>
                <div>
                    <a href='/'>Home</a>
                    <a href='/places'>Places</a>
                    <a href='/places/new'>Add Place</a>
                </div>
            </nav>
              {html.children}
          </body>
      </html>
  )
}


module.exports = Def