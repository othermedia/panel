Example JavaScript project
==========================

This project contains just enough boilerplate to support creation of a new JavaScript
project to be shared across theOTHERmedia sites. Aside from this README file, you
should see files called widget.js and jake.yml.

*widget.js* should be renamed to something appropriate for your project, and you
should replace the word 'widget' with this new name in jake.yml (jake.yml is a build
config file used when automatically minifying your code for deployment). Remove all
the code in widget.js and start over with your code.

You should also replace the contents of this file with setup information for your
project. For example, the config for this example would be:

    pkg('Widget', 'http://cdn.othermedia.com/libs/widget/master/widget-min.js')
        .requires('JS.Class')
        .requires('Ojay')
        .requires('Ojay.Observable')
        .requires('Ojay.HTTP')
        .requires('Ojay.Paginator');

See [the example JavaScript config][1] for more information.

[1]: http://github.com/othermedia/js-packages


Creating a new project
======================

    git clone git@github.com:othermedia/example-project.git my-widget
    cd my-widget
    git remote rm origin
    git remote add origin git@github.com:othermedia/my-widget.git
    
    (edit)
    
    git commit -am "Commit message"
    git push origin master

