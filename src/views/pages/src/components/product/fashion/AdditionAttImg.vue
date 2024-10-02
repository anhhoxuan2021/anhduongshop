<template>
      <div class="row mt-3">
        <div class="col clicked specific-image">
            <div class="row">
                <div class="col specific-img" style="cursor: pointer;"><strong>+ SELECT SPECIFIC IMAGE</strong></div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <div class="d-flex flex-row fit-box image-spec-div">
                        
                    </div>
                    <input type="hidden" class="image-spec">
                </div>
                
            </div>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col clicked addition-images">
            <div class="row"><div class="col addition-img" style="cursor: pointer;"><strong>+ ADD ADDITION IMAGES</strong></div></div>
            <div class="row mt-2 mb-3">
                <div class="col">
                    <div class="d-flex flex-row fit-box image-added-div"></div>
                    <input type="hidden" class="image-added">
                </div>            
            </div>
        </div>
    </div>
</template>