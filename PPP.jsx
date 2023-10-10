import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ExampleComponent from './Image'

const PPP = () => {
  const [item, setItem] = useState(ExampleComponent())

  return (
    <div>
      <h1 className='text-center'>enter your order ?</h1><hr />
      <div className='menu-tab container'>
        <div className='d-flex menu-tab justify-content-around'>
          <button className='btn btn-warning '>breakfast</button>
          <button className='btn btn-warning '>lunch</button>
          <button className='btn btn-warning '>dinner</button>
          <button className='btn btn-warning '>all</button>
        </div>
      </div>

      {/* //section */}
      <div className='menu-items container-fluid mt-5 my-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row my-5'>

              {
                item.map((elem) => {
                  const { id, title, description, price, thumbnail } = elem;

                  return (
                    <div className='iteam1 col-12 col-md-6 col-lg-6 col-xl-4'>
                      <div className='row Iteam-inside'>
                        <div className='col-12 col-md-12 col-lg-4 img-div'>
                          <img src={thumbnail} alt="menupic" className='img-fluid' />
                        </div>
                        {/* menu descraptions */}
                        <div className='col-12 col-md -12 col-lg-8'>
                          <div className='main-tite pt-4 pb-3'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                          </div>
                          <div className='menu-price-book'>
                            <div className='price-book-divide d-flex justify-content-between'>
                              <h3>{price}</h3>
                              <a href=""><button className='btn btn-primary'>order now</button></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }


            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default PPP;

