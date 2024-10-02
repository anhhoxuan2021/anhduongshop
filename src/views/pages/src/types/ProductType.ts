export default interface ProductType {
    prd_id: number;
    prd_type: string;
    prd_type_name:string;
    prd_batch_code: string;
    prd_name: string;
    prd_quantity: number ;
    prd_sku: string;
    prd_price: number;
    prd_regular_price: number;
    prd_disctiption: string;
    prd_short_disctiption: string;
    prd_sex: string;
    prd_size: string;
    prd_color: string;
    multi_colors:string;
    multi_sizes: string;
    multi_sexes: string;   
    prd_tag: string;
    prd_relative: string;
    prd_img: string;
    prd_library: string;   
    prd_type_brand:string;
    brand_name:string;
    prod_attr: string;
    prod_special_point: string;
    prod_size_inch: string;
  }