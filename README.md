Panel: rich, cross-browser content wrappers
===========================================

_Rounded corners. In Internet Explorer._ This is why this library exists.


HTML and CSS
------------

Panels are scalable wrappers that allow for the creation of tactile, visually
appealing containers like those you can see on [the ECB website][ecb]. The
markup required isn't especially complex; here's an example.

    <div class="panel">
        <div class="panel-c">
            <div>
                <!-- Your content here! -->
            </div>
        </div>
        
        <div class="panel-b">
            <div></div>
        </div>
    </div>

This is then coupled with some CSS---see `panel.css`---and a single large
graphic, of sufficient size to cover the maximum size the content is
envisioned as expanding to (this can be quite large; we usually use graphics
several thousand pixels per size).


JavaScript
----------

Creating the DOM elements for a panel in JavaScript is not complicated, but it
is tedious and error-prone. The `Panel` class is a simple way of generating the
requisite code, using [Ojay's HTML package][ojayhtml].

    var pane = new Panel('listing', function(HTML) {
        elements.forEach(function(el) {
            HTML.li(el.title);
        });
    });

As well as the `Panel` class, this library comes with the `panel` function, a
convenient wrapper:

    var pane = panel('wrapper', function(HTML) {
        HTML.img({alt: 'Test image', src: 'test.jpg'});
    }).setStyle({
        width: '200px'
    });

It also contains `PanelOverlay`, a subclass of
[Ojay.ContentOverlay][ojayoverlay] which wraps the content area in a panel.

[ecb]:         http://www.ecb.co.uk/
[ojayhtml]:    http://ojay.othermedia.org/articles/generating_html.html
[ojayoverlay]: http://ojay.othermedia.org/articles/overlays.html
