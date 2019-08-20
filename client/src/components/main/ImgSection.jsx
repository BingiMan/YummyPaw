import React from 'react'
import './mainStyle.css'
class ImgSection extends  React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="grid">
                <div className="item1 gallery__img"></div>
                <div className="item2 gallery__img"></div>
                <div className="item3 gallery__img"></div>
                <div className="item4 gallery__img"></div>
                <div className="item5 gallery__img"></div>
                <div className="item6 gallery__img"></div>
                <div className="item7 gallery__img"></div>
                <div className="item8 gallery__img"></div>
                <div className="item9 gallery__img"></div>
            </div>
        )
    }
}

export default ImgSection