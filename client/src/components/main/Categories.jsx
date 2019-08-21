import React from 'react'
import './mainStyle.css'
import {fetchPet} from '../../services/pet';
import {withRouter} from 'react-router-dom'
import ReactPlayer from 'react-player'


class Categories extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.pets);

        // this.state = {
        //     pets: {},
        // };
    }

    componentDidMount = async () => {
        // const pets = await fetchPet();
        // const cats = pets.cats;
        // const dogs = pets.dogs;
        // this.setState({
        //   cats: cats,
        //   dogs: dogs
        // })


    };

    updatePets = (parentState) => {
        // if (parentState) {
        //     this.setState(() => ({
        //         pets: parentState.pets
        //     }));
        // }
        //
        // return this.state;
    };

    handleAddRedirect = async (e) => {
        e.preventDefault();
        this.props.history.push('/addPet')
    };

    handleSeeMoreRedirect = async (e) => {
        e.preventDefault();
        this.props.history.push('/seeMore')
    };

    displayVideos = () => {
        return (
            <div>
                {
                    this.props.pets_form.is_cat === true ? this.displayCats() : this.displayDogs()
                }
            </div>
        )
    };

    displayCats = () => {
        return this.props.pets.cats.slice(0, 6).map(cat => {
            return (

                <div key={cat.id}>
                    <div className="video">
                    <ReactPlayer url={cat.video_url}/>
                    </div>
                    {/*<p>{cat.title}</p>*/}
                </div>
            );
        });
    };

    displayDogs = () => {
        return this.props.pets.dogs.slice(0, 6).map(dog => {
            return (
                <div className="video">
                <div key={dog.id}>
                    <ReactPlayer url={dog.video_url}/>
                </div>
                    {/*{dog.title}*/}
                </div>
            );
        })
    };

    displayCategoryView = () => {
        // console.log(this.props.pets);
        const videosView = Object.keys(this.props.pets).length > 0 ? this.displayVideos() : null;
        // console.log(videosView);
        return (
            <div className="categories-section">
                <button className="cat-section" onClick={this.props.displayCat}> Cats</button>
                <button className="dog-section" onClick={this.props.displayDog}>Dogs</button>
                <button className="addPet-section" onClick={this.handleAddRedirect}>Add Video</button>
                <button className="see-more-section" onClick={this.handleSeeMoreRedirect}>See more</button>
                {videosView}
            </div>
        )
    };

    render() {
        return this.displayCategoryView();
    }
}

export default withRouter(Categories);
