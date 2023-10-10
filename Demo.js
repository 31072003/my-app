import React from 'react'

const Demo = (props) => {
    return (
        <div>
            
            <div className='class-container'>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>1</span>
                        <span className='card-author subtle'>breakfast</span>
                        <h2 className='card-title'>maggie.</h2>
                        <span className='card-desscription subtle'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quasi obcaecati recusandae tempore, ab dignissimos.
                        </span>
                        <div className='card-read'>Read</div>
                    </div>
                    <img src={props.image} alt="images" className='card-media' />
                    <span className='card-tag subtle'>order now</span>
                </div>
            </div>

        </div>
    )
}

export default Demo;
