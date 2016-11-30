let Dashboard = Dashboard || {};

Dashboard.create_water_report = React.createClass({

  getInitialState: function() {
    return {
      current_user: this.props.current_user,
      report: {
        date: (new Date()).toDateString(),
        reporter: this.props.current_user.name,
        type: "",
        x_location: "",
        y_location: "",
        cond: ""
      }
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

  handleTypeChange: function(e) {
    let report = this.state.report
    report.type = e.target.value;
    this.setState({report: report});
  },

  handleXLocationChange: function(e) {
    let report = this.state.report
    report.x_location = e.target.value;
    this.setState({report: report});
  },

  handleYLocationChange: function(e) {
    let report = this.state.report
    report.y_location = e.target.value;
    this.setState({report: report});
  },

  handleConditionChange: function(e) {
    let report = this.state.report
    report.cond = e.target.value;
    this.setState({report: report});
  },

  handleSubmitReport: function(e) {
    var self = this;
    var data = {
      water_report: {
        date: this.state.report.date,
        reporter: this.state.report.reporter,
        water_type: this.state.report.type,
        location: (this.state.report.x_location + "," + this.state.report.y_location),
        cond: this.state.report.cond
      }
    };
    
    $.ajax({type: 'POST', url: '/water_reports/', data: JSON.stringify(data), dataType: 'json', contentType: 'application/json'})
      .done(function () {
        window.location.href = "/dashboard/" + this.state.current_user.id;
      })
  },

  renderHeader: function() {
    return (
      <div className='panel-header text-center bb1'>
        <div className='row'>
          <h1>New Report</h1>
        </div>
      </div>
    );
  },

  renderReportFields: function() {
    return (
      <div className='panel-body'>
        
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Reporter:</p>
          </div>
          <div className='col-xs-3'>
            <p>{ this.state.report.reporter }</p>
          </div>
        </div>
        
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Date:</p>
          </div>
          <div className='col-xs-3'>
            <p>{ this.state.report.date }</p>
          </div>
        </div>
        
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Type:</p>
          </div>
          <div className='col-xs-3 text-left'>
            <select id='Condition' 
                    className='form-control input-lg' 
                    defaultValue={ this.state.report.type } 
                    onChange={ this.handleTypeChange }>
              <option key="Bottled" value="Bottled">Bottled</option>
              <option key="Well" value="Well">Well</option>
              <option key="Stream" value="Stream">Stream</option>
              <option key="Lake" value="Lake">Lake</option>
              <option key="Worker" value="Worker">Spring</option>
              <option key="Other" value="Other">Other</option>
            </select>
          </div>
        </div>
        
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>X Location:</p>
          </div>
          <div className='col-xs-3 text-left'>
            <input type="text"
              className='form-control input-lg'
              onChange={ this.handleXLocationChange }
              value={ this.state.report.x_location }
            />
          </div>
        </div>
        
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Y Location:</p>
          </div>
          <div className='col-xs-3 text-left'>
            <input type="text"
              className='form-control input-lg'
              onChange={ this.handleYLocationChange }
              value={ this.state.report.y_location }
            />
          </div>
        </div>
        
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Condition:</p>
          </div>
          <div className='col-xs-3 text-left'>
            <select id='Condition' 
                    className='form-control input-lg' 
                    defaultValue={ this.state.report.cond } 
                    onChange={ this.handleConditionChange }>
              <option key="Waste" value="Waste">Waste</option>
              <option key="Treatable-muddy" value="Treatable-muddy">Treatable-muddy</option>
              <option key="Treatable-clear" value="Treatable-clear">Treatable-clear</option>
              <option key="Potable" value="Potable">Potable</option>
            </select>
          </div>
        </div>
      
      </div>
    );
  },

  renderFooter: function() {
    return (
      <div className='panel-footer text-center bb1'>
        <div className='row'>
          <button type="button"
            className="btn btn-primary text-center inline-block mt6"
            onClick={this.handleSubmitReport}>Submit</button>
        </div>
      </div>
    );
  },

  render: function() {
    return (
      <div className='col-xs-9 panel panel-default row mb10 relative container800'>
          { this.renderHeader() }
          { this.renderReportFields() }
          { this.renderFooter() }
      </div>
    );
  }
});