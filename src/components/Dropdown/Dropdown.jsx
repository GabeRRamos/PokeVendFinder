import React from 'react'

const Dropdown = () => {
  return (
    <div className="App">
        <div className="content">
            <Dropdown buttonText="Dropdown button" 
              content= {<p>HelloWorld!</p>}/>
        </div>
    </div>
  )
}

export default Dropdown