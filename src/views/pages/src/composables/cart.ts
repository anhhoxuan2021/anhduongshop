
import store from '@/store'
import { ref } from 'vue'
import type CartType from '@/types/CartType'
import type DiscountType from '@/types/DiscountType'


  export const testAcessState = (payload:any) => {
  //store.commit('mutation_name', mutation_argument)
         /***************************************************/
         $('.specific-product').on('click','.plus-prduct-btn',function(){
        // console.log("rest")
         // crt.amountOfMoney()
      })
  store.dispatch('changeTestState', payload)
  let data1 = store.state.testState
    return data1
  }

/***************************************************/
  export const addtoCart=($me:any,fromCart:boolean)=>{
            
    var yourCart_json = localStorage.getItem('yourCart')

    var el = $me.closest('.specific-product')

    if(yourCart_json !='' && yourCart_json != null && yourCart_json != undefined){
    var amount_prduct = Number(el.find('.amount-prduct').val())
    if(amount_prduct > 0){        
        let item_cart =<CartType>{}
        var pduct_add= Number(el.find('.prd_id').val())
        item_cart['amount']= amount_prduct
        item_cart['prd_id']= pduct_add
        item_cart['prd_name']= el.find('.prd_name').val()+''
        item_cart['prd_price']= Number(el.find('.prd_price').val())
        item_cart['prd_regular_price']= Number(el.find('.prd_regular_price').val())
        if(fromCart){
            item_cart['prd_color']= el.find('.prd_color').val()+''
            item_cart['prd_size']= el.find('.prd_size').val()+''
            item_cart['prd_sex']= el.find('.prd_sex').val()+''
            item_cart['color_selected'] = el.find('.color-selected').val()+''
        }else{
            item_cart['prd_color'] = el.find('.img-selected-source.selected').attr('specificimage')+''
            item_cart['prd_size']= el.find('.prd-size.selected').text()
            item_cart['prd_sex']= el.find('.prd-sex.selected').text() 
            item_cart['color_selected'] = el.find('.color-selected').text()
        }
        
        var yourCart =<CartType[]>([]);
      

        if(JSON.parse(yourCart_json).length > 0){
            yourCart = JSON.parse(yourCart_json)
        }
       
         
        // console.log(yourCart)
         //console.log("*******")
        //  console.log("khong cao a")
        // console.log(yourCart)
        //check existing product in cart
        var pduct_in_cart=false
        var amount = 0
        yourCart.forEach(function(itm){
            if(pduct_add == Number(itm.prd_id)){
                pduct_in_cart =true
                if(fromCart){
                    itm.amount = amount_prduct                   
                 }else{
                    itm.amount = Number(itm.amount) + amount_prduct
                 }
            }
           
        })

        if(!pduct_in_cart){
            yourCart.push(item_cart)
        }
       // console.log(yourCart)
        // console.log("*******")
       
        localStorage.setItem('yourCart',JSON.stringify(yourCart));  
        store.dispatch('addProductToCart', yourCart)     

    }
}else{
    
    var yourCart =<CartType[]>([]);
    var item_cart =<CartType>{}
    //let item_cart:KeyValue={}
    var amount_prduct = Number(el.find('.amount-prduct').val())
    var pduct_add= Number(el.find('.prd_id').val())
   
   
    item_cart['amount'] = amount_prduct;
    item_cart['prd_id']= pduct_add
    item_cart['prd_name']= el.find('.prd_name').val()+''
    item_cart['prd_price']= Number(el.find('.prd_price').val())
    item_cart['prd_regular_price']= Number(el.find('.prd_regular_price').val())

    if(fromCart){
        item_cart['prd_color']= el.find('.prd_color').val()+''
        item_cart['prd_size']= el.find('.prd_size').val()+''
        item_cart['prd_sex']= el.find('.prd_sex').val()+''
        item_cart['color_selected'] = el.find('.color-selected').val()+''
    }else{
        item_cart['prd_color'] = el.find('.img-selected-source.selected').attr('specificimage')+''
        item_cart['prd_size']=el.find('.prd-size.selected').text() 
        item_cart['prd_sex']=el.find('.prd-sex.selected').text() 
        item_cart['color_selected'] = el.find('.color-selected').text()
    }

    yourCart.push(item_cart)

   // $('.amount-of-product-cart').text(amount_prduct)

    localStorage.setItem('yourCart',JSON.stringify(yourCart));
    store.dispatch('addProductToCart', yourCart)
}

$('#modal-success .modal-title').text('Add cart successfully');

($('#modal-success') as any).modal('show')
setTimeout(function(){
   ($('#modal-success') as any).modal('hide')

},1500)
}

/***************************************************/
export const changeProdductInCart = ($me:any,fromCart:boolean)=>{
    if(fromCart){
        var yourCartTemp = localStorage.getItem('yourCart')
        var el = $me.closest('.closest-btn-action')
        if(yourCartTemp !='' && yourCartTemp != null && yourCartTemp != undefined){
            var pduct_add= Number(el.find('.prd_id').val())
            var amount_prduct = Number(el.find('.amount-prduct').val())

            var yourCart =<CartType[]>([]);
             yourCart = JSON.parse(yourCartTemp)
            if(amount_prduct> 0){               
                //check existing product in cart
                yourCart.forEach(function(itm){
                    if(pduct_add == Number(itm.prd_id)){                        
                        itm.amount = amount_prduct
                    }
                });
               
    
                localStorage.setItem('yourCart',JSON.stringify(yourCart));
                store.dispatch('addProductToCart', yourCart)
            }
    
        }
    }
   
}

/***************************************************/
export const deleteProdductInCart = ($me:any,fromCart:boolean)=>{
    if(fromCart){
        var yourCartTemp = localStorage.getItem('yourCart')
        var el = $me.closest('.product-row')
        if(yourCartTemp !='' && yourCartTemp != null && yourCartTemp != undefined){
            var pduct_add= Number(el.find('.prd_id').val())

            var yourCart =<CartType[]>([]);
             yourCart = JSON.parse(yourCartTemp)
            //check existing product in cart
            yourCart.forEach(function(itm,index){
                if(pduct_add == Number(itm.prd_id)){  
                   yourCart.splice(index,1)
                        return
                }
            })

            // if(yourCart.length <1){
            //     localStorage.removeItem('yourCart');
            // }else{
               
            // }     
            localStorage.setItem('yourCart',JSON.stringify(yourCart));       
            store.dispatch('addProductToCart', yourCart)
    
        }
    }
   
}

/***************************************************/
export const sumOrderBought = (discount:DiscountType)=>{
    var sum = 0;
    var yourCartTemp = localStorage.getItem('yourCart')
    if(yourCartTemp !='' && yourCartTemp != null && yourCartTemp != undefined){
        var yourCart =<CartType[]>([]);
        yourCart = JSON.parse(yourCartTemp)
        yourCart.forEach(function(item){
            sum +=Number(item.prd_price)
        })
    }
    
    let tempTotal =  sum.toLocaleString(undefined, {minimumFractionDigits: 2})   
    var discount_amount ="0.00";
    var discount_code =''
    if(discount.discount_amount > 0){
        var d = new Date();
        var d1 = new Date(discount.start_date);
        var d2 = new Date(discount.end_date);
        if(d1 <= d && d2 >= d && sum >=Number(discount.app_total)){
            sum -=discount.discount_amount
            discount_amount = discount.discount_amount.toLocaleString(undefined, {minimumFractionDigits: 2})
            discount_code = discount.discount_code
        }        
    }
    return {
       totalCart : sum.toLocaleString(undefined, {minimumFractionDigits: 2}),
       tempTotal: tempTotal,
       discount_amount: discount_amount,
       discount_code:discount_code
    }
}







