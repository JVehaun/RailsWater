let Login = Login || {};

Login.main_page = React.createClass({

  getInitialState: function() {
    return this.getStateFromProps(this.props);
  },

  getStateFromProps: function(props) {
    return {
      error_text: "",
      username: "",
      password: "",
      logged_in: false
    }
  },

  handleUsernameChange: function(e) {
    this.state.username = e.target.value;
    console.log(this.state.username);
  },

  handlePasswordChange: function(e) {
    this.state.password = e.target.value;
  },

  handleLogin: function(e) {
    let self = this;
    (this.props.users).forEach(function(user) {
      if (self.state.username == user.username) {
        if (self.state.password == user.password) {
          self.setState({logged_in: true})
          $.ajax({
            method: 'POST',
            url: '/users/' + user.id + "/login/"
          }).done(function () {
            window.location.href = "/dashboard/" + user.id;
          });
        }
      }
    });

    self.setState({error_text: "Username Invalid"});
  },

  handleRegister: function(e) {
    window.location.href = "/registration/";
  },

  renderHeader: function() {
    return (
      <div className='col-xs-12'>
        <h1>Welcome!</h1>
      </div>
    );
  },

  renderLoginFields: function() {
    return (
      <div className='col-xs-12'>
        <div className='row'>
          <div className='col-xs-6 text-right mt8 font-size20'>
            <p>Username</p>
          </div>
          <div className='col-xs-4'>
            <input type="text"
              className='form-control input-lg'
              onChange={ this.handleUsernameChange }
              placeholder='Username'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-6 text-right mt8 font-size20'>
            <p>Password</p>
          </div>
          <div className='col-xs-4'>
            <input type="text"
              className='form-control input-lg'
              onChange={ this.handlePasswordChange }
              placeholder='password'
            />
          </div>
        </div>
      </div>
    );
  },

  renderFooter: function() {
    return (
      <div className='row'>
        <div className='col-xs-4'/>
        <div className='col-xs-2'>
          <button type="button"
            className="btn btn-primary pull-right mt6"
            onClick={this.handleLogin}>Login</button>
        </div>
        <div className='col-xs-2'>
          <button type="button"
            className="btn btn-primary pull-right mt6"
            onClick={this.handleRegister}>Register</button>
        </div>
      </div>
    );
  },

  render: function () {
    return (
      <div className='container mb-box1 container800'>
        <div className='col-xs-12 panel panel-default row mb10 relative text-center'>
          <div className='panel-header'>
            <div className="row text-center">
              { this.renderHeader() }
            </div>
          </div>
          <div className='panel-body inline'>
            <div className="row text-danger">
              <p>{ this.state.error_text }</p>
            </div>
            <div className="row">
              { this.renderLoginFields() }
            </div>
          </div>
          <div className='panel-footer'>
            <div className="row">
              { this.renderFooter() }
            </div>
          </div>
        </div>
      </div>
    );
  }

});
