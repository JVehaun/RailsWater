let Registration = Registration || {};

Registration.main_page = React.createClass({

  getInitialState: function() {
    return this.getStateFromProps(this.props);
  },

  getStateFromProps: function(props) {
    return {
      user: {
        name: "",
        username: "",
        password: "",
        role: "User"
      }
    }
  },

  submitForm: function () {
    var self = this;

    var data = {
      user: this.state.user
    };
    
    $.ajax({type: 'POST', url: '/users/', data: JSON.stringify(data), dataType: 'json', contentType: 'application/json'})
      .done(function () {
        window.location.href = "/login/";
      })
      .fail(function (xhr, status, message) {
        var errors;
        try {
          errors = JSON.parse(xhr.responseText);
        } catch (e) {
          errors = [xhr.responseText];
        }
        //self.setState({errors: errors, submitting: false});
      })
  },

  handleNameChange: function(e) {
    this.state.user.name = e.target.value;
    console.log(this.state.user.name);
    console.log(this.state.user.type);
  },

  handleUsernameChange: function(e) {
    this.state.user.username = e.target.value;
    console.log(this.state.user.id);
  },

  handlePasswordChange: function(e) {
    this.state.user.password = e.target.value;
    console.log(this.state.user.password);
  },

  handleRoleChange: function(e) {
    this.state.user.role = e.target.value;
    console.log(this.state.user.role);
  },

  handleCancel: function(e) {
    window.location.href = "/login/";
  },

  handleRegister: function(e) {
    this.submitForm();
  },

  renderHeader: function() {
    return (
      <div className='panel-header text-center'>
        <div className="row">
            <h1 className='mt10'>Registration</h1>
        </div>
      </div>
    );
  },

  renderUserFields: function() {
    return (
      <div className='panel-body row'>
        <div className='col-xs-12'>

          <div className='row mt10 mb10'>
            <div className='col-xs-5 text-right mt8 font-size20'>
              <p>Name: </p>
            </div>
            <div className='col-xs-4'>
              <input type="text"
                className='form-control input-lg'
                onChange={ this.handleNameChange }
                placeholder='name'
              />
            </div>
          </div>

          <div className='row mt10 mb10'>
            <div className='col-xs-5 text-right mt8 font-size20'>
              <p>Username: </p>
            </div>
            <div className='col-xs-4'>
              <input type="text"
                className='form-control input-lg'
                onChange={ this.handleUsernameChange }
                placeholder='username'
              />
            </div>
          </div>

          <div className='row mt10 mb10'>
            <div className='col-xs-5 text-right mt8 font-size20'>
              <p>Password: </p>
            </div>
            <div className='col-xs-4'>
              <input type="text"
                className='form-control input-lg'
                onChange={ this.handlePasswordChange }
                placeholder='password'
              />
            </div>
          </div>

          <div className='row mt10 mb10'>
            <div className='col-xs-5 text-right mt8 font-size20'>
              <p>Role: </p>
            </div>
            <div className='col-xs-4'>
              <select id='Role'
                      className='form-control input-lg' 
                      defaultValue={ this.state.user.role } 
                      onChange={ this.handleRoleChange }>
                <option key="User" value="User">User</option>
                <option key="Worker" value="Worker">Worker</option>
                <option key="Admin" value="Admin">Admin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderFooter: function() {
    return (
      <div className='panel-footer row'>
        <div className='col-xs-6'>
          <button type="button"
            className="btn btn-primary pull-right mt6"
            onClick={this.handleCancel}>Cancel</button>
        </div>
        <div className='col-xs-6'>
          <button type="button"
            className="btn btn-primary pull-left mt6"
            onClick={this.handleRegister}>Register</button>
        </div>
      </div>
    );
  },

  render: function () {
    return (
      <div className='container mb-box1 container800'>
        <div className='col-xs-12 panel panel-default row mb10 relative'>
          { this.renderHeader() }
          { this.renderUserFields() }
          { this.renderFooter() }
        </div>
      </div>
    );
  }

});
