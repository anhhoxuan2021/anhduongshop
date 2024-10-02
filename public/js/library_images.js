
function library_images(){
    this.file_tranfer = new DataTransfer()
}
library_images.NAME         = "library_images";
library_images.VERSION      = "1.2";
library_images.DESCRIPTION  = "Class library_images";

library_images.prototype.constructor = library_images;
library_images.prototype = {
    init: function(){
        $("#filenames").on('change', function(event){
            
            //this.files.item(i).name
            var fileBloc ='';
                if (this.files) {
                    for(var i = 0; i < this.files.length; i++){
                        //console.log(this.files.item(i).file)
                        let today = new Date();
                        let time = today.getTime();
                        let file_name = this.files.item(i).name;
                        var reader = new FileReader();
                        reader.onload = function (e) {
                           // let img = $('<img>').attr('src', e.target.result);
                            fileBloc = '<div class="box-image">'+
                                '<div class="file-name hidden">'+file_name+'</div>' +
                                '<img src="' + e.target.result + '" class="picture-box">'+
                                '<div class="wrap-btn-delete"><span data-id='+time+' class="btn-delete-image">x</span></div>' +
                                '</div>'
                            $(".list-images").append(fileBloc);
                        };
                        reader.readAsDataURL(this.files[i]);

                    };
                    $('.button-submit').removeClass('hidden');
                    $('.file_upload').addClass('text-right')
                    $('.remove-center').removeClass('justify-content-center')

                    for (let file of this.files) {
                        //console.log(file);
                        prd_f.file_tranfer.items.add(file);
                    }
                    this.files = prd_f.file_tranfer.files;

                    $(".list-images").off('click').on('click', '.btn-delete-image', function(){
                        let name = $(this).closest('.box-image').find('.file-name').text();
                        for(let i = 0; i < prd_f.file_tranfer.items.length; i++){
                            // Correspondance du fichier et du nom
                          
                            if(name === prd_f.file_tranfer.items[i].getAsFile().name){
                                prd_f.file_tranfer.items.remove(i);
                                continue;
                            }
                        }


                        $(this).parents('.box-image').remove();
                        var count = $('.list-images .box-image').length
                        
                        if(count < 1){
                            $('.button-submit').addClass('hidden')
                            $('.file_upload').removeClass('text-right')
                            $('.remove-center').addClass('justify-content-center')
                        }
                        document.getElementById('filenames').files = prd_f.file_tranfer.files;
                    });
                    //
                }
        });

        $('#prd-attr .specific-img').off('click').on('click',function(){
            if (this.files){
                this.files =null
                document.getElementById('filenames').val = null
            }
            $(".list-images").html('')
            prd_f.file_tranfer = new DataTransfer()
            $('.button-submit').removeClass('hidden')
            $('.file_upload').addClass('text-right')
            let $me = ''
            $me = $(this)
            let product_type = $('#prd_type').val()
            $('.div-btn-add-to-addition-img').css({"display":"none"})
            library_images.prototype.show_libraries($me,product_type)
        })

        

        $('#prd-attr .addition-img').off('click').on('click',function(){
            var $me = ''
            $me = $(this)
            
            if (this.files){
                this.files =null
                document.getElementById('filenames').val = null
            }
            $(".list-images").html('')
            prd_f.file_tranfer = new DataTransfer()
            $('.file_upload').addClass('text-right')
            $('.button-submit').removeClass('hidden')
       
            let product_type = $('#prd_type').val()
            library_images.prototype.show_libraries($me, product_type)
            $('.div-btn-add-to-addition-img').css({"display":""})
        })

        $('#prd-attr').off('click').on('click','.product-images-span-delete',function(){
            if($(this).closest('.clicked').hasClass('specific-image')){                        
                $(this).closest('.clicked.specific-image').find('.image-spec').val('')
                $(this).closest('.product-images-span').remove()
            }else if(($(this).closest('.clicked').hasClass('addition-images'))){
               var vl =  $(this).closest('.clicked.addition-images').find('.image-added').val()
               var img_name = $(this).closest('.product-images-span').find('.product-images').attr('img_name')
               img_name = img_name.trim()
                if(vl.indexOf(',')){
                    var imgStr =''
                    vl.split(',').forEach(function(item){
                        if(img_name != item.trim()){
                            imgStr =(imgStr=='')?item : imgStr+','+item
                        }
                    })

                    $(this).closest('.clicked.addition-images').find('.image-added').val(imgStr)

                }else{
                    $(this).closest('.clicked.addition-images').find('.image-added').val('')
                }

                $(this).closest('.product-images-span').remove()
            }
        })


    },
    /*********************************************************/
    show_libraries:function($me, product_type){
        var link3 = api_link+'libraries';
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{product_type:product_type},
            //contentType: 'application/json',
            error : function (status,xhr,error) {

            },
            success: function (res) {
                //console.log(res)
                if(res.length > 0){
                    var rows =''
                    var cols =''
                    res.forEach(function(item){
                        cols +='<div class="col mx-1 my-2 d-flex flex-column hover-border text-center mx-auto">' +
                            // ' <img src="/images/'+item.filenames+'" img_name="'+item.filenames+'" style="width:60px; cursor:pointer" class="img-selected">' +
                            ' <img src="'+libary_path+''+item.filenames+'" img_name="'+item.filenames+'" style="width:60px; cursor:pointer" class="img-selected mx-auto">' +
                            '<span class="mt-1">'+item.filenames+'</span>'+
                            '</div>'

                    })

                    rows +='<div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-6 append-img">' +
                        cols +
                        '</div>'
                }
                $('#library-modal #media').html(rows)
                
                //event
               
                $('#library-modal #media .img-selected').off('click').on('click',function(){
                    
                    var image_name = $(this).attr('img_name')
                    $(this).closest('.hover-border').addClass('images-selected')

                    if($me.closest('.clicked').hasClass('specific-image')){
                        
                        $me.closest('.clicked.specific-image').find('.image-spec').val(image_name)

                        var span = '<span class="prd-img-page product-images-span relative" >'+
                        ' <img src="'+libary_path+''+image_name+'" class="img-thumbnail product-images" img_name="'+image_name+'"  alt="Thiet ke web Anh Ho">' +  
                         '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                        '</span>'  
                            
                        $me.closest('.clicked.specific-image').find('.image-spec-div').html(span)

                        $('#library-modal').modal('hide')

                    }
                    
                   // else if($me.closest('.clicked').hasClass('addition-images')){
                        
                      //   image_name_selected = $me.closest('.clicked.addition-images').find('.image-added').val()
                      //  var wordSearch = new RegExp(`\\b${image_name}\\b`, 'i');
                      //  var isTrue = wordSearch.test(image_name_selected);

                    //    if(!isTrue){
                    //         //image_name_selected =(image_name_selected =='')?image_name: image_name_selected+','+image_name
                    //        // $me.closest('.clicked.addition-images').find('.image-added').val(image_name_selected)
                            
                    //         var span =''        
                    //         if(image_name_selected.indexOf(',')){
                                
                    //            // image_name_selected.split(',').forEach(function(item){
                    //                 //  span += ' <span  class="prd-img-page product-images-span me-2 relative">'+
                    //                 // ' <img src="'+libary_path+''+item+'" class="img-thumbnail product-images" img_name="'+item+'"  alt="Thiet ke web Anh Ho">' +  
                    //                 // '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                    //                 // '</span>'  
                    //            // })
                    //         }else{
                    //             // span += ' <span  class="prd-img-page product-images-span relative" >'+
                    //             //     ' <img src="'+libary_path+''+image_name_selected+'" class="img-thumbnail product-images" img_name="'+image_name_selected+'"  alt="Thiet ke web Anh Ho">' +  
                    //             //     '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                    //             //     '</span>'  
                    //         }

                    //       //  $me.closest('.clicked.addition-images').find('.image-added-div').html(span)
                    //     }
                    // }
                                      
                    
                })

                $('#btn-add-to-addition-img').off('click').on('click',function(){
                    var image_name_selected = $me.closest('.clicked.addition-images').find('.image-added').val()
                  
                    $('.hover-border.images-selected').each(function(){                       
                        var image_name = $(this).find('.img-selected').attr('img_name')
                        var wordSearch = new RegExp(`\\b${image_name}\\b`, 'i');
                        var isTrue = wordSearch.test(image_name_selected);
                        //console.log("image_name= "+image_name)
                       // console.log("ist= "+isTrue)
                        if(!isTrue){
                            if(image_name_selected !='' && image_name_selected !=null && image_name_selected !=undefined){
                                image_name_selected +=','+ image_name
                            }else{
                                image_name_selected = image_name
                            }
                        }
                    });

                    //console.log("imgs= "+image_name_selected)
                    $me.closest('.clicked.addition-images').find('.image-added').val(image_name_selected)
                    var span =''        
                            if(image_name_selected.indexOf(',')){
                                
                               image_name_selected.split(',').forEach(function(item){
                                     span += ' <span  class="prd-img-page product-images-span me-2 relative">'+
                                    ' <img src="'+libary_path+''+item+'" class="img-thumbnail product-images" img_name="'+item+'"  alt="Thiet ke web Anh Ho">' +  
                                    '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                                    '</span>'  
                               })
                            }else{
                                span += ' <span  class="prd-img-page product-images-span relative" >'+
                                    ' <img src="'+libary_path+''+image_name_selected+'" class="img-thumbnail product-images" img_name="'+image_name_selected+'"  alt="Thiet ke web Anh Ho">' +  
                                    '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                                    '</span>'  
                            }

                           $me.closest('.clicked.addition-images').find('.image-added-div').html(span)

                           $('#library-modal').modal('hide')

                })

                $('#library-modal').modal('show')

                  /*******************event*********************/
                  $('#submit-id').off('click').on('click',function(){
                    prd_f.uploadImgToLibraries($me)
                });
            
              
            }
        });
    },

    /*********************************************************/
    show_libraries_from_disk:function($me, product_type){
        $('#library-modal #media').html('')
        var link3 = api_link+'libraries';
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{product_type:product_type},
            //contentType: 'application/json',
            error : function (status,xhr,error) {

            },
            success: function (res) {
                if(res.files.length > 0){
                    var rows =''
                    var cols =''
                    res.files.forEach(function(item){
                        cols +='<div class="col mx-1 my-2 d-flex flex-column hover-border text-center mx-auto">' +
                            // ' <img src="/images/'+item.filenames+'" img_name="'+item.filenames+'" style="width:60px; cursor:pointer" class="img-selected">' +
                            ' <img src="'+libary_path+''+item+'" img_name="'+item+'" style="width:60px; cursor:pointer" class="img-selected mx-auto">' +
                            '<span class="mt-1">'+item+'</span>'+
                            '</div>'

                    })

                    rows +='<div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-6 append-img">' +
                        cols +
                        '</div>'
                }
                $('#library-modal #media').html(rows)
                
                //event
                $('#library-modal #media .img-selected').off('click').on('click',function(){
                    
                    var image_name = $(this).attr('img_name')
                    if($me.closest('.clicked').hasClass('specific-image')){
                        
                        $me.closest('.clicked.specific-image').find('.image-spec').val(image_name)

                        var span = '<span  class="prd-img-page product-images-span relative" >'+
                        ' <img src="'+libary_path+''+image_name+'" class="img-thumbnail product-images" img_name="'+image_name+'"  alt="Thiet ke web Anh Ho">' +  
                            '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                        '</span>'  
                            
                        $me.closest('.clicked.specific-image').find('.image-spec-div').html(span)

                    }else if($me.closest('.clicked').hasClass('addition-images')){
                        
                        var image_name_selected = $me.closest('.clicked.addition-images').find('.image-added').val()
                        var wordSearch = new RegExp(`\\b${image_name}\\b`, 'i');
                        var isTrue = wordSearch.test(image_name_selected);

                        if(!isTrue){
                            image_name_selected =(image_name_selected =='')?image_name: image_name_selected+','+image_name
                            $me.closest('.clicked.addition-images').find('.image-added').val(image_name_selected)
                            
                            var span =''        
                            if(image_name_selected.indexOf(',')){
                                
                                image_name_selected.split(',').forEach(function(item){
                                        span += ' <span  class="prd-img-page product-images-span me-2 relative">'+
                                    ' <img src="'+libary_path+''+item+'" class="img-thumbnail product-images" img_name="'+item+'"  alt="Thiet ke web Anh Ho">' +  
                                    '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                                    '</span>'  
                                })
                            }else{
                                span += ' <span  class="prd-img-page product-images-span relative" >'+
                                    ' <img src="'+libary_path+''+image_name_selected+'" class="img-thumbnail product-images" img_name="'+image_name_selected+'"  alt="Thiet ke web Anh Ho">' +  
                                    '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                                    '</span>'  
                            }

                            $me.closest('.clicked.addition-images').find('.image-added-div').html(span)
                        }
                    }
                    
                    

                    $('#library-modal').modal('hide')
                })

                $('#library-modal').modal('show')
                /*******************event*********************/
                // $('#submit-id').on('click',function(){
                //     prd_f.uploadImgToLibraries($me)
                // });

                
            }
        });
    },

    /*********************************************************/
    uploadImgToLibraries:function($me){
        let product_type = $('#prd_type').val()
        if(product_type ==""|| product_type ==undefined){
            $('#modal-error-note .modal-title').text('Requires Product Type')

            $("#modal-error-note").modal("show")
            setTimeout(function(){
                $("#modal-error-note").modal("hide")
            },2000)
            return
        }

        const formData = new FormData();
        var imgData = document.getElementById('filenames');
        if(imgData.files.length  > 0) {
            for (var i = 0; i < imgData.files.length; i++) {
                formData.append('file[]', imgData.files[i]);
               // console.log(imgData.files[i])
            }
        }else{
            return
        }

        formData.append('product_type', product_type);
       // console.log([...formData])
        var link3 =api_link+'add_image_library';
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:formData,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            //contentType: 'application/json',
            error : function (status,xhr,error) { },
            success: function (res) {
                //console.log(res.files.length)
                if(res.files.length > 0){
                    $('.list-images').html('')
                    prd_f.showLibrayImg(res,$me)
                    prd_f.file_tranfer.clearData()
                    prd_f.file_tranfer = new DataTransfer()
                    
                }
            }
        });
    },
    /*********************************************************/
  
    showLibrayImg:function(data,$me){
       
        if(data.files.length > 0){
            var cols =''
            data.files.forEach(function(item){
                    cols +='<div class="col mx-1 my-2 d-flex flex-column hover-border text-center mx-auto">' +
                    ' <img src="'+libary_path+''+item.filenames+'" img_name="'+item.filenames+'" style="width:60px; cursor:pointer" class="img-selected mx-auto">' +
                    '<span class="mt-1">'+item.filenames+'</span>'+
                    '</div>'
                    
            })

            if($('#library-modal #media .append-img').length >0){
                $('#library-modal #media .append-img').append(cols)
            }else{
                var  rows ='<div class="row row-cols-xs-1 row-cols-sm-1 row-cols-md-6 append-img">' +
                cols +
                '</div>'
                $('#library-modal #media').html(rows)
            }

          
        }

        //event
        $('#library-modal #media .img-selected').off('click').on('click',function(){
                    
            var image_name = $(this).attr('img_name')
            if($me.closest('.clicked').hasClass('specific-image')){
                
                $me.closest('.clicked.specific-image').find('.image-spec').val(image_name)

                var span = '<span  class="prd-img-page product-images-span relative" >'+
                ' <img src="'+libary_path+''+image_name+'" class="img-thumbnail product-images" img_name="'+image_name+'"  alt="Thiet ke web Anh Ho">' +  
                    '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                '</span>'  
                    
                $me.closest('.clicked.specific-image').find('.image-spec-div').html(span)

            }else if($me.closest('.clicked').hasClass('addition-images')){
                
                var image_name_selected = $me.closest('.clicked.addition-images').find('.image-added').val()
                var wordSearch = new RegExp(`\\b${image_name}\\b`, 'i');
                var isTrue = wordSearch.test(image_name_selected);

                if(!isTrue){
                    image_name_selected =(image_name_selected =='')?image_name: image_name_selected+','+image_name
                    $me.closest('.clicked.addition-images').find('.image-added').val(image_name_selected)
                    
                    var span =''        
                    if(image_name_selected.indexOf(',')){
                        
                        image_name_selected.split(',').forEach(function(item){
                                span += ' <span  class="prd-img-page product-images-span me-2 relative">'+
                            ' <img src="'+libary_path+''+item+'" class="img-thumbnail product-images" img_name="'+item+'"  alt="Thiet ke web Anh Ho">' +  
                            '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                            '</span>'  
                        })
                    }else{
                        span += ' <span  class="prd-img-page product-images-span relative" >'+
                            ' <img src="'+libary_path+''+image_name_selected+'" class="img-thumbnail product-images" img_name="'+image_name_selected+'"  alt="Thiet ke web Anh Ho">' +  
                            '<span class="product-images-span-delete absolute c-cd1818 r-2 box-2 text-right" style="cursor: pointer;">X</span>'+
                            '</span>'  
                    }

                    $me.closest('.clicked.addition-images').find('.image-added-div').html(span)
                }
            }
            
            

            $('#library-modal').modal('hide')
        })
    }

}
var prd_f = new library_images();
$(function(){
    prd_f.init();
});