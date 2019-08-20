import React from 'react'
import './mainStyle.css'

class BannerSection extends React.Component {
    constructor(){
        super();
    }




    render(){
        return(
            <div className="banner-wrapper">
                <div className="banner">
                    <p className="text1"> Your dog can smell your feelings </p>
                    <p className="text2"> Dogs and cats both slurp water the same way </p>
                    <p className="text3"> Some cats actually like water </p>
                    <p className="text4"> Your dog misses you when you’re gone </p>
                    <p className="text5"> A Group Of Cats Is Called a Clowder </p>
                    <div className="banner-logo"></div>
             </div>
            </div>
        )
    }
}

export default BannerSection