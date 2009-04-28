/**
 * @constructor
 * @class Panel
 */
var Panel = new JS.Class({
    /**
     * @param {String} classes
     * @param {Function|String|HTMLElement} block
     * @param {HtmlBuilder} HTML
     */
    initialize: function(classes, block, HTML) {
        this._classes = classes;
        this._block = block;
        this._HTML = HTML;
        this.getHTML();
    },
    
    /**
     * @returns {HTMLDivElement}
     */
    getHTML: function() {
        if (this._html) return this._html;
        var self = this, classes = self._classes, block = self._block, HTML = self._HTML;
        var builder = (typeof block == 'function');
        HTML = HTML || Ojay.HTML;
        this._html = Ojay( HTML.div({className: 'panel' + (classes ? ' ' + classes : '')}, function(HTML) {
            HTML.div({className: 'panel-c'}, function(HTML) {
                HTML.div({className: 'panel-t'});
                self._content = Ojay( HTML.div(function(HTML) {
                   if (builder) block(HTML);
                }) );
            });
            if (!builder) self._content.insert(block, 'bottom');
            HTML.div({className: 'panel-b'}, function(HTML) {
                HTML.div();
            });
        }) );
        return this.getHTML();
    },
    
    /**
     * @returns {Panel}
     */
    setContent: function() {
       this._content.setContent.apply(this._content, arguments);
       return this;
    },
    
    /**
     * @returns {Panel}
     */
    insert: function() {
       this._content.insert.apply(this._content, arguments);
       return this;
    }
});


/**
 * @param {String} classes
 * @param {Function|String|HTMLElement} block
 * @param {HtmlBuilder} HTML
 * @returns {Ojay.DomCollection}
 */
var panel = function(classes, block, HTML) {
    var p = new Panel(classes, block, HTML);
    return p.getHTML();
};
    

/**
 * @constructor
 * @class PanelOverlay
 */
var PanelOverlay = new JS.Class(Ojay.ContentOverlay, {
    /**
     * @param {Object} options
     */
    initialize: function(options) {
        this._panel = new Panel();
        var closeButton = Ojay( Ojay.HTML.div({className: 'close-button'}, 'Close') );
        
        this.callSuper();
        
        this.getContainer().insert(closeButton, 'top');
        closeButton.on('click')._(this).hide('fade');
        this.getContentElement().insert(this._panel.getHTML());
    },
    
    /**
     * @returns {PanelOverlay}
     */
    setContent: function() {
        this._panel.setContent.apply(this._panel, arguments);
        return this;
    },
    
    /**
     * @returns {PanelOverlay}
     */
    insert: function() {
        this._panel.insert.apply(this._panel, arguments);
        return this;
    }
});
