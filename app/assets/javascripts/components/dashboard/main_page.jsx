let Dashboard = Dashboard || {};

Dashboard.main_page = React.createClass({

  getInitialState: function() {
    console.log(this.props)
    return {
      user: this.props.current_user,
      screen: 'edit_user'
    }
  },

  handleNavigation: function(screen, e) {
    this.setState({screen: screen});
    console.log(this.state);
  },

  handleLogout: function(screen, e) {
    window.location.href = "/login/";
  },

  renderSidebar: function() {
    let self = this;
    return (
      <div className='col-xs-3 panel panel-default row mb10 relative'>
        <div className='panel-body bb1'>
          <button type="button"
            className="btn btn-primary pull-right text-center mt6 pc-width-100"
            onClick={this.handleNavigation.bind(self, "edit_user")}>View/Edit Profile</button>
          <button type="button"
            className="btn btn-primary pull-right text-center mt6 pc-width-100"
            onClick={this.handleNavigation.bind(self, "create_water_report")}>Submit Water Report</button>
          <button type="button"
            className="btn btn-primary pull-right text-center mt6 pc-width-100"
            onClick={this.handleNavigation.bind(self, "view_water_reports")}>View Water Reports</button>
          <button type="button"
            className="btn btn-primary pull-right text-center mt6 pc-width-100"
            onClick={this.handleNavigation.bind(self, "view_water_map")}>View Water Map</button>
          <button type="button"
            className="btn btn-primary pull-right text-center mt6 pc-width-100"
            onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    );
  },

  renderBody: function() {
    if (this.state.screen == 'edit_user') {
      return(
        <Dashboard.edit_user
          current_user={ this.props.current_user }
        />
      );
    } else if (this.state.screen == 'create_water_report') {
      return(
        <Dashboard.create_water_report
          current_user={ this.props.current_user }
        />
      );
    } else if (this.state.screen == 'view_water_reports') {
      return(
        <Dashboard.view_water_reports
          current_user={ this.props.current_user }
        />
      );
    } else if (this.state.screen == 'view_water_map') {
      return(
        <Dashboard.view_water_map
          current_user={ this.props.current_user }
        />
      );
    }
  },

  render: function () {
    return (
      <div className='container mb-box1 row'>
        { this.renderSidebar() }
        { this.renderBody() }
      </div>
    );
  }

});