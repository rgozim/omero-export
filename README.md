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
3. Add the application to OMERO.server configuration ```omero config append omero.web.apps '"omero_exporter"'```
4. Add tne application to _open with_ context menu ```omero config append omero.web.open_with '["omero_exporter", "export_tool", {"supported_objects": ["images"], "label": "OMERO exporter"}]'```