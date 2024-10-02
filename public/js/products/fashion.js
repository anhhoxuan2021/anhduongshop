function product(){
}
product.NAME         = "product";
product.VERSION      = "1.2";
product.DESCRIPTION  = "Class product";

product.prototype.constructor = product;
product.prototype = {
   init:function(){  
    $('.normal-id').on('click','.product-images-span',function(){
        $('.product-images.selected').removeClass('selected')
        $(this).find('.product-images').addClass('selected')
    })
    $('.specific-product').on('click','.prd-size',function(){
        $('.specific-product .prd-size.selected').removeClass('selected')
        $(this).addClass('selected')
    })
   }
}

var prd = new product();
$(function(){
    prd.init();
});
