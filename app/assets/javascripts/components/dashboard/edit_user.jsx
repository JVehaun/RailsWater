let Dashboard = Dashboard || {};

Dashboard.edit_user = React.createClass({

  getInitialState: function() {
    return {
      current_user: this.props.current_user,
      isEditing: false
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState(this.getStateFromProps(nextProps));
  },

  getStateFromProps: function(props) {
    return {
      current_user: props.current_user
    }
  },

  handleNameChange: function(e) {
    let user = this.state.current_user;
    user.name = e.target.value;
    this.setState({current_user: user});
  },

  handlePasswordChange: function(e) {
    let user = this.state.current_user;
    user.password = e.target.value;
    this.setState({current_user: user});
  },

  handleEditUser: function(e) {
    let self = this;
    console.log(this.state);
    if (!this.state.isEditing) {
      this.setState({isEditing: true});
    } else {
      console.log("starting ajax");
      $.ajax({
        method: 'PUT',
        url: '/users/' + this.state.current_user.id,
        data: {user: this.state.current_user}
      }).done(function () {
        console.log("ajax done");
        self.setState({isEditing: false});
      });
    }
  },

  renderHeader: function() {
    return (
      <div className='panel-header text-center bb1'>
        <div className='row'>
          <h1>Welcome Back USER!</h1>
        </div>
      </div>
    );
  },

  renderReadUserFields: function() {
    return (
      <div className='panel-body'>
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Name:</p>
          </div>
          <div className='col-xs-3 text-left'>
            <p>{ this.state.current_user.name }</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Username:</p>
          </div>
          <div className='col-xs-3 text-left'>
            <p>{ this.state.current_user.username }</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Password:</p>
          </div>
          <div className='col-xs-3 text-left'>
            <p>{ this.state.current_user.password }</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Role:</p>
          </div>
          <div className='col-xs-3 text-left'>
            <p>{ this.state.current_user.role}</p>
          </div>
        </div>
      </div>
    );
  },

  renderEditUserFields: function() {
    return (
      <div className='panel-body'>
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Name:</p>
          </div>
          <div className='col-xs-3 text-left'>
            <input type="text"
              className='form-control input-lg'
              onChange={ this.handleNameChange }
              value={ this.state.current_user.name }
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Username:</p>
          </div>
          <div className='col-xs-3'>
            <p>{ this.state.current_user.username }</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Password:</p>
          </div>
          <div className='col-xs-3'>
            <input type="text"
              className='form-control input-lg'
              onChange={ this.handlePasswordChange }
              value={ this.state.current_user.password }
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Role:</p>
          </div>
          <div className='col-xs-3 text-left'>
            <p>{ this.state.current_user.role }</p>
          </div>
        </div>
      </div>
    );
  },

  renderUserFields: function() {
    return this.state.isEditing ? this.renderEditUserFields() : this.renderReadUserFields();
  },

  renderFooter: function() {
    console.log("Rendering footer: " + this.state.isEditing);
    let editingText = this.state.isEditing ? "Save" : "Edit";
    return (
      <div className='panel-footer text-center bb1'>
        <div className='row'>
          <button type="button"
            className="btn btn-primary text-center inline-block mt6"
            onClick={this.handleEditUser}>{editingText}</button>
        </div>
      </div>
    );
  },

  render: function() {
    return (
      <div className='col-xs-9 panel panel-default row mb10 relative container800'>
          { this.renderHeader() }
          { this.renderUserFields() }
          { this.renderFooter() }
      </div>
    );
  }

});
