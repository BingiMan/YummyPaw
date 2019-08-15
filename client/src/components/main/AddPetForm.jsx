import React from 'react'

export default class AddPetForm extends React.Component {
  constructor() {
    super()
    this.state = {
      // pets_form: this.props.pets_form
    }
  }

  handleRedirect = async (e) => {
    e.preventDefault()
    await this.props.handlePetSubmit(e);
    // this.props.history.push('/')
  }
  
  handleClose = (e) => {
    e.preventDefault();
    // this.props.hideRegister();
  }
  

  render() {
    return (
      <div className="register-dialog">
        <div className="close-thik" onClick={this.handleClose} ></div>
        <form className="register-form">
          <div className="flex">
            <h1 className="form-title">Add PawPaw</h1>
          </div>
          <input className="modern-input-text" onChange={this.props.handlePetChange} type="text" name="title" value={this.props.pets_form.title} placeholder="Video Title" />
          <input className="modern-input-text" onChange={this.props.handlePetChange} type="text" name="video_url" value={this.props.pets_form.video_url} placeholder="Video URL" />
          <select onChange={this.props.handlePetChange} name="is_cat">
            <option>Please Select Pet</option>
            <option value={true}>Cat</option>
            <option value={false}>Dog</option>
          </select>
          <div className="flex">
            <button className="btn form-btn" onClick={this.handleRedirect}>Paw's up</button>
          </div>
        </form>
      </div>
    )
  }
}