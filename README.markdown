Panel
=====

Panels are content wrappers which allow one to create rich, block-style
interfaces that are widely interoperable with older browsers, including
Internet Explorer 6.

Two JavaScript classes are included: `Panel` and `PanelOverlay`. The former
allows for the creation of a generic panel; the latter, for an overlay which
wraps its content in a panel.


Setup information
-----------------

    path = 'http://cdn.othermedia.com/libs/panel/master/panel-min.js';
    pkg('Panel',        path);
    pkg('PanelOverlay', path);
    pkg('panel',        path)
        .requires('JS.Class')
        .requires('Ojay')
        .requires('Ojay.Observable')
        .requires('Ojay.HTML')
        .requires('Ojay.Overlay')
        .requires('Ojay.ContentOverlay');
