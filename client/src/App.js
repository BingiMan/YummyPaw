import React from 'react';
import decode from 'jwt-decode';
import {loginUser, verifyUser, createUser} from './services/user'
import {createPet, fetchPet} from './services/pet';
import {Route, withRouter} from 'react-router-dom'
import SeeMoreVideos from './components/main/SeeMoreVideos'
import AddPetForm from './components/main/AddPetForm';
import Navigation from './components/header/Navigation'
import Categories from './components/main/Categories'
import './App.css';
import BannerSection from "./components/main/BannerSection";
import ImgSection from "./components/main/ImgSection";
import Contact from "./components/footer/Contact";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // -----------LOGIN----
            loginForm: {
                username: '',
                password: '',
            },
            registerForm: {
                username: '',
                email: '',
                password: '',
            },
            currentUser: {
                id: null,
                name: ""
            },
            loggedIn: null,
            // ----------E N D-----
            // -----------PETS-----
            pets: {},
            pets_form: {
                user_id: '',
                title: '',
                video_url: '',
                is_cat: true,
            },
            currentPet: {
                id: '',
                title: '',
                video_url: '',
                is_cat: '',
            },
            // ---------E N D-----
            // ---------COMMENTS--
            comments: [],
            comments_form: {
                pet_id: '',
                post: '',
            },
            // ---------E N D-----

        };
    }

    componentDidMount = async () => {
        const resp = await verifyUser();
        // const checkUser = localStorage.getItem("jwt");
        if (resp) {
            const user = (resp);
            this.setState({
                currentUser: {
                    id: resp.id,
                    name: resp.username
                }
                // pet_id: pet.id
            })
        }
        this.handleFetchPets();
    };
    // ------------------------  PET CONTROLLERS ---------------------------------------

    handleFetchPets = async () => {
        const _pets = await fetchPet();
        console.log(_pets);

        this.setState(() => ({
            pets: _pets
        }), () => {
            // this.CategoryRef.current.updatePets(this.state);
            console.log(this.state.pets);
        });
    };

    displayCat = async () => {
        this.setState(prevState => ({
            pets_form: {
                ...prevState.pets_form,
                is_cat: true,
            }
        }))
    };

    displayDog = async () => {
        this.setState(prevState => ({
            pets_form: {
                ...prevState.pets_form,
                is_cat: false,
            }
        }))
    };

    handlePetChange = (e) => {
        const {target: {name, value}} = e;
        this.setState(prevState => ({
            pets_form: {
                ...prevState.pets_form,
                [name]: value
            }
        }))
    };
    handlePetSubmit = async (ev) => {
        ev.preventDefault();
        const pet = await createPet(this.state.pets_form);
        this.setState(prevState => {
            const whichPet = pet.is_cat ? "cats" : "dogs";
            return {
                pets: {
                    ...prevState.pets,
                    [whichPet]: [...prevState.pets[whichPet], pet]
                },
                pets_form: {
                    title: '',
                    video_url: '',
                    is_cat: null,
                },
            }
        });
        console.log(pet);
        this.props.history.push(`/pets`)
    };

    // ------------------------END PET CONTROLLERS ---------------------------------

    handleRegisterSubmit = async (e) => {
        e.preventDefault();
        await createUser(this.state.registerForm);
        this.handleLogin();
        this.setState({
            registerForm: {
                username: '',
                email: '',
                password: '',
            }
        })
    };

    handleLogin = async () => {
        const userData = await loginUser(this.state.authFormData);
        this.setState({
            currentUser: decode(userData.token)
        });
        localStorage.setItem("jwt", userData.token)
    };


    // ------------------------END LOGIN- REGISTER------------------------------

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("authToken");
        this.setState({
            currentUser: null
        })
    };

    handleRedirect = async (e) => {
        // e.preventDefault();
        await this.handleLoginSubmit(e);
        this.props.history.push('/');
        // this.props.hideLogin();
    };

    handleLoginChange = (e) => {
        const {target: {name, value}} = e;
        this.setState(prevState => ({
            loginForm: {
                ...prevState.loginForm,
                [name]: value,
            }
        }))
    };
    handleLoginSubmit = async (e) => {
        // e.preventDefault()
        const resp = await loginUser({username: this.state.loginForm.username, password: this.state.loginForm.password})
        console.log(resp);
        this.setState({
            currentUser: {
                id: resp.id,
                name: resp.username
            },
            user: resp.username,
            loginForm: {
                username: '',
                password: '',
            }
        })
    };
    handleRegisterChange = (e) => {
        const { target: { name, value } } = e;
        this.setState(prevState => ({
            registerForm: {
                ...prevState.registerForm,
                [name]: value,
            }
        }))
    };
    // ------------------------ COMMENTS HERE -----------------------------------

    // ------------------------ END COMMENTS ------------------------------------

    render() {
        return (
            <div className="App">
                <header>

                    <Navigation
                        handleRedirect={this.handleRedirect}
                        currentUser={this.state.currentUser}
                        loggedIn={this.state.loggedIn}
                        handleLogout={this.handleLogout}
                        handleLoginChange={this.handleLoginChange}
                        handleLoginSubmit={this.handleLoginSubmit}
                        loginForm={this.state.loginForm}

                        handleRegisterSubmit={this.handleRegisterSubmit}
                        handleRegisterChange={this.handleRegisterChange}
                        registerForm={this.state.registerForm}
                    />
                    <BannerSection/>
                    <ImgSection/>
                </header>
                <main>

                    <Route exact path="/" render={() =>
                        <Categories
                            // ref={this.CategoryRef}
                            pets={this.state.pets}
                            displayCat={this.displayCat}
                            displayDog={this.displayDog}
                            pets_form={this.state.pets_form}
                        />}
                    />

                    <Route path="/addPet" render={() => (
                        <AddPetForm
                            pets_form={this.state.pets_form}
                            handlePetChange={this.handlePetChange}
                            handlePetSubmit={this.handlePetSubmit}
                        />
                    )}/>

                    <Route exact path="/seeMore" render={() => (
                        <SeeMoreVideos
                            pets={this.state.pets}
                            pets_form={this.state.pets_form}
                            handlePetChange={this.handlePetChange}
                            handlePetSubmit={this.handlePetSubmit}
                            //COMMENTS
                            comments_form={this.state.comments_form}
                            currentUser={this.state.currentUser}
                        />
                    )}/>

                </main>
                <footer>
                    <Contact/>
                </footer>
            </div>
        );
    }
}


export default withRouter(App);
