Template.station.onCreated(function() {
  var self = this
  self.autorun(function() {
    var stationId = FlowRouter.getParam('stationId')
    // Meteor.subscribe('mart/stations')
    Meteor.subscribe("mart/storefront", stationId);
    console.log("subscribed");
  });
})

Template.station.helpers({
  station: function() {
    var stationId = FlowRouter.getParam('stationId')
    var station = Mart.Storefronts.findOne(stationId)
    console.log(stationId)
    return station
  }
});
