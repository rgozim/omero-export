from django.shortcuts import render
from omeroweb.decorators import login_required

# Change this to point to the location of your python export script
SCRIPT_PATH = "/omero/my_scripts/export_to_other_omero.py"


# This is the entry point to the application.
@login_required()
def to_other_omero(request, conn=None, **kwargs):
    # Get a list of image id's from the URL
    image_ids = request.GET.getlist("image")
    if image_ids is None:
        raise Exception('nooo')

    script_service = conn.getScriptService()
    script_id = script_service.getScriptID(SCRIPT_PATH)
    if script_id < 0:
        raise Exception('Python script not found')

    # Store image id's and the ID of the script we want to interact with in context
    context = {'imageIds': ','.join(image_ids), 'scriptId': script_id}

    # Return HTML page with context
    return render(request, "to_other_omero/to_other_omero.html", context)
