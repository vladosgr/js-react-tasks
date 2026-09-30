import React from 'react';

// BEGIN (write your solution here)
const initialForm = {
  email: '',
  password: '',
  address: '',
  city: '',
  country: '',
  acceptRules: false,
};
export default class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      form: initialForm,
      submitted: false,
    };
  }
  handleChange = (e)=>{
    const {name, type, value, checked} = e.target;
    this.setState(({form})=>({
      form: {...form, [name]: type === 'checkbox' ? checked : value},
    }));
  };
  handleSubmit = (e)=>{
    e.preventDefault();
    this.setState({submitted: true});
  };
  handleBack = ()=>{
    this.setState({submitted: false});
  };
  renderForm(){
    const {form} = this.state;
    return(
      <form name="myForm" onSubmit={this.handleSubmit}>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="password" className="col-form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">Address</label>
          <textarea
            className="form-control"
            name="address"
            id="address"
            placeholder="1234 Main St"
            value={form.address}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            id="city"
            value={form.city}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">Country</label>
          <select
            id="country"
            name="country"
            className="form-control"
            value={form.country}
            onChange={this.handleChange}
          >
            <option value="">Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                id="rules"
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
                checked={form.acceptRules}
                onChange={this.handleChange}
              />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
  renderTable(){
    const {form} = this.state;
    const rows = Object.keys(form).sort();
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
        <table className="table">
          <tbody>
            {rows.map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{form[key].toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  render(){
    const {submitted} = this.state;
    return submitted ? this.renderTable() : this.renderForm();
  }
}
// END
