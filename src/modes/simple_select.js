

const SimpleSelect = {};


SimpleSelect.onSetup = function() {
  this.setActionableState(); // default actionable state is false for all actions
  return {};
};

SimpleSelect.toDisplayFeatures = function(state, geojson, display) {
  display(geojson);
};

export default SimpleSelect;
