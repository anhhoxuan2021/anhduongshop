
import type  ProductType  from "@/types/ProductType";
export default interface ResponseData {
    data: ProductType[];
    current_page:number,
    first_page_url:string,
    last_page:number,
    last_page_url:string,
    next_page_url:string,
    prev_page_url:string,
    per_page:number,
    total:number
  }

