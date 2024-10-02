<template>
    <!-- Modal center Large -->
<div class="modal fade" id="library-modal"  tabindex="-1" role="dialog"  aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><strong>Library</strong></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <div class="modal-body bg-white">
                <div class="alert alert-success"></div>

                <fieldset class="border p-4">
                    <legend class="float-none w-auto f-16 bold">Images to upload to libray</legend>
                    <div class="list-images"></div>
                    <div class="row justify-content-center remove-center">
                        <div class="file_upload col-md-6 col-xs-12 col-sm-12 text-right">
                            <label for="filenames">
                                <a class="btn btn-success text-light" role="button" aria-disabled="false">Select files</a>
                            </label>
                            <input type="file" name="file[]" accept=".pdf,image/*" id="filenames" style="visibility: hidden; position: absolute;" multiple/>
                        </div>
                        <div class="button-submit hidden col-md-6 col-xs-12 col-sm-12 text-left">
                            <button id="submit-id" class="btn btn-danger" style="margin-top:10px">Upload to library </button>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="border p-4">
                    <legend class="float-none w-auto f-16 bold">Images in libray</legend>
                    <div id="media"> </div>

                    <div class="w-100 text-center my-3 div-btn-add-to-addition-img" style="display: none;">
                        <button class="btn btn-black w-167" id="btn-add-to-addition-img">Apply</button>
                    </div>
                </fieldset>
            </div>

        </div>
    </div>
</div>



</template>