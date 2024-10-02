export const useMyComposable = () => {
  return ref()
}

export const productDiscount = (regularPrice:number,price:number):number => {
  let discountPercentage =0  
  if(regularPrice >0 && price >=0){
       discountPercentage = (price /regularPrice) * 100
      }
  return Math.round(discountPercentage)
}

export const show_home_imges = (imgs: string)=>{
  var images :string[]= []
  if(imgs !='')  {  
    if(imgs.indexOf(',')){
      images = imgs.split(",")
    }else{
      images.push(imgs)
    }
  }
   if(images.length >0){
    
   }
}
