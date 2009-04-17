var Widget = new JS.Class({
    include: Ojay.Observable,
    
    initialize: function(element) {
        this._element = Ojay(element);
    },
    
    setup: function(url) {
        var self = this;
        var chain = new JS.MethodChain();
        
        Ojay.HTTP.GET(url, {}, function(response) {
            response.insertInto(self._element);
            var pager = new Ojay.Paginator(self._element, {
                rows:       3,
                columns:    4,
                direction:  'horizontal'
            }).setup();
            
            pager.addControls('after');
            self._pager = pager;
            chain.fire(self);
        });
        return chain;
    },
    
    setPage: function(n) {
        this._pager.setPage(n);
        this.notifyObservers('pagechange', n);
        return this;
    }
});

