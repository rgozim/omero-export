This project demonstrates OMERO's ability to include an [external application](https://docs.openmicroscopy.org/omero/5.4.0/developers/Web/CreateApp.html).
It uses the [_open with_](https://docs.openmicroscopy.org/omero/5.4.0/developers/Web/LinkingFromWebclient.html#open-with)
method, of linking an external application, and gives the user the ability to login to a separate OMERO server for the purpose of exporting from OMERO server to another. 

* The following terminal commands assume you have OMERO.server on your environment _PATH_

Linking to OMERO.server
-----------------------

The documentation for adding an application to OMERO can be found here: 
https://docs.openmicroscopy.org/omero/5.4.0/developers/Web/CreateApp.html#add-your-app-to-your-pythonpath

The documentation for accessing the application via the _open with_ context menu option on the left
hand project tree in OMERO.web can be found here:

This is just a shortened version

1. Checkout this git repo
2. Add the directory containing this repo to your _PYTHONPATH_ environment variable
3. Add script from this repo to your OMERO.server scripts ```omero script upload omero/my_scripts/export_to_other_omero.py```
3. Add the application to OMERO.server configuration ```omero config append omero.web.apps '"omero_export"'```
4. Add tne application to _open with_ context menu ```omero config append omero.web.open_with '["omero_export", "export_tool", {"supported_objects": ["images"], "label": "Export to other OMERO"}]'```

Example Usage
-------------

To use the omero_export tool, select one or more images from the _project_ tree on the left panel of OMERO.web, and right click to reveal the context menu shown in the image below.
You will be able to see the application you have added via the _Open With_ option.

![](https://user-images.githubusercontent.com/3717090/34998622-817aff7a-fad7-11e7-9b90-a1dbd1db49b4.png "Context menu option")

![](https://user-images.githubusercontent.com/3717090/34998629-84ec3c78-fad7-11e7-8cda-94eafb94b41c.png "Login to other OMERO page")

![](https://user-images.githubusercontent.com/3717090/34998629-84ec3c78-fad7-11e7-8cda-94eafb94b41c.png "Export images page")

