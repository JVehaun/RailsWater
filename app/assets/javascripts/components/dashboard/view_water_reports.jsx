let Dashboard = Dashboard || {};

Dashboard.view_water_reports = React.createClass({

  getInitialState: function() {
    console.log(this.props.water_reports);
    return {
      loading: false,
      water_reports: this.props.water_reports
    }
  },

  renderHeader: function() {
    return (
      <div className='panel-header text-center bb1'>
        <div className='row'>
          <h1>All Water Reports</h1>
        </div>
      </div>
    );
  },

  renderWaterReport: function(water_report, index) {
    return (
      <div key={ water_report.report_num } className='row'>
        <div className='col-xs-2 text-right'>
          <p>{ water_report.report_num }</p>
        </div>
        <div className='col-xs-2 text-right'>
          <p>{ water_report.reporter }</p>
        </div>
        <div className='col-xs-2 text-right'>
          <p>{ water_report.date }</p>
        </div>
        <div className='col-xs-2 text-right'>
          <p>{ water_report.location }</p>
        </div>
        <div className='col-xs-2 text-right'>
          <p>{ water_report.water_type }</p>
        </div>
        <div className='col-xs-2 text-right'>
          <p>{ water_report.cond }</p>
        </div>
      </div>
    );
  },

  renderReports: function() {
    let self = this;
    return _.map(this.state.water_reports, function(water_report, index) {
      return self.renderWaterReport(water_report, index);
    });
  },

  renderLoading: function() {
    return (
      <div className='panel-body'>
        
        <div className='row'>
          <div className='col-xs-3'/>
          <div className='col-xs-3 text-right'>
            <p>Loading</p>
          </div>
        </div>
        
      </div>
    );
  },

  renderTableHeader: function() {
    return (
      <div key={ "table header" } className='row'>
        <div className='col-xs-2 text-right'>
          <p>report_num</p>
        </div>
        <div className='col-xs-2 text-right'>
          <p>reporter</p>
        </div>
        <div className='col-xs-2 text-right'>
          <p>date</p>
        </div>
        <div className='col-xs-2 text-right'>
          <p>location</p>
        </div>
        <div className='col-xs-2 text-right'>
          <p>water_type</p>
        </div>
        <div className='col-xs-2 text-right'>
          <p>cond</p>
        </div>
      </div>
    );
  },

  renderBody: function() {
    return (
      <div className='panel-body'>
        { this.renderTableHeader() }
        { this.renderReports() }
        }
      </div>
    );
  },

  render: function() {
    return (
      <div className='col-xs-9 panel panel-default row mb10 relative container800'>
          { this.renderHeader() }
          { this.renderBody() }
      </div>
    );
  }
});