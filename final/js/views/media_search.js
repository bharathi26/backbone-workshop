Echoes.Views.MediaSearch = Backbone.View.extend({
	el: '#media-explorer',

	events: {
		'submit': 'onExplore'
	},

	initialize: function(){
		this.model.on('change:query', this.render, this);
		// cache input field
		this.$search = this.$el.find('input');
		this.render(this.model, this.model.get('query'));
	},

	render: function(model, query) {
		this.$search.val(query);
		return this;
	},

	onExplore: function(ev) {
		ev.preventDefault();
		var query = this.$search.val();
		this.model.set({ query: query });
	}
});