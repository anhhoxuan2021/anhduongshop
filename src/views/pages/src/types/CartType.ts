export default interface CartType {
  amount: number;
  prd_id: number;
  prd_name:string;
  prd_price: number;
  prd_regular_price: number;
  prd_color: string ;
  prd_size: string;
  prd_sex: string;
  color_selected:string,
  }

  interface Foo {
    [key: string]: number;
 }
 
 
 let foo:Foo = {};
 foo['hello'] = 123;
 foo = {
   'leet': 1337
 };