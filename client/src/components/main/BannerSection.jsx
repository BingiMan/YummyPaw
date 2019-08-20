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
                <div className="banner-description">
                    Yummy Paw is the perfect home for cats and/or dogs lovers, here you can watch and share with the community trending clips, the most entertaining and funniest pet videos online. You will also be able to add comments on yor favorite videos to share some of your love.
                    Let be filled with sweetness watching these beauties!
                </div>
            </div>
        )
    }
}

export default BannerSection