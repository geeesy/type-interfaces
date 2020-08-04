export interface IResMainCategory {
    category_main_id: string;
    category_main_name: string;
    category_main_icon_url: string;
    category_main_image_url: string;
    imp_factor: string;
  }
  
  export interface IResRecommendMainCategory {
    category_id: string;
    category_name: string;
    category_image_url: string;
    imp_factor: number;
    supplier_count: number;
    product_count: number;
  }
  
  export interface IResBanner {
    banner_title: string;
    banner_link_url: string;
    banner_image_url: string;
    banner_sort_index: number;
  }
  
  export interface IResProduct {
    product_id: string;
    product_name: string;
    product_image_url: string;
    product_price: number;
    product_unit: string;
    product_currency_code: string;
    pack_size_label: string;
    pack_size_qty: number;
    imp_factor: number;
    min_order_qty: number;
    product_group: IProductGroup;
    supplier_id: string;
    supplier_name: string;
    supplier_verified: boolean;
    savedlists: SavedList[];
  }
  
  interface IProductGroup {
    product_group_id: string;
    product_group_name: string;
    product_group_image_url: string;
  }
  
  export interface IResRecommendProduct {} // Like a IProduct
  
  export interface IResTop20ProductsByCategory {} // Like a IProduct
  
  export interface IResTop20Products {
    product_id: string;
    product_name: string;
    product_image_url: string;
    product_group: IProductGroup;
    savedlists: SavedList[];
  }
  
  export interface IResCategoryWithChild {
    category_id: string;
    category_name: string;
    category_image_url: string;
    imp_factor: number;
    child_categories: IChildCategory[];
  }
  
  export interface IResCategory {
    category_id: string;
    category_name: string;
    category_icon_url: string;
    category_image_url: string;
    imp_factor: number;
  }
  
  export interface IResRecommendCategory {
    category_id: string;
    category_name: string;
    category_image_url: string;
    supplier_count: number;
    product_count: number;
    imp_factor: number;
  }
  
  interface IChildCategory {
    category_id: string;
    category_name: string;
    imp_factor: number;
  }
  
  export interface IResAllCategoryInSearchTool {
    category_id: string;
    category_name: string;
  }
  
  export interface IResSupplierHilight {
    supplier_id: string;
    supplier_name: string;
    supplier_logo_url: string;
    imp_factor: number;
  }
  
  export interface IResRelatedProducts {} // Like a IProduct
  
  export interface ICreateLatestVisitProducts {
    user_id: string;
    product_id: string;
    product_name: string;
    product_image_url: string;
    product_price: number;
    product_unit: string;
    product_currency_code: string;
    pack_size_label: string;
    pack_size_qty: number;
    imp_factor: number;
    min_order_qty: number;
    product_group: IProductGroup;
    supplier_id: string;
    supplier_name: string;
    supplier_verified: boolean;
    savedlists: SavedList[];
  } // Like a IProduct + user_id
  
  export interface IResLatestVisitProducts {} // Like a Products
  
  export interface ICreateMessage {
    msg: string;
    user_id: string;
    msg_file_url: string[];
    supplier_id: string;
  }
  
  export interface ICreateMessageReply {
    user_id: string;
    msg_name: string;
    supplier_id: number;
  }
  
  export interface IResMessageList {
    user_id: string;
    supplier_logo_url: string;
    msg_id: string;
    msg_name: string;
    supplier_id: string;
    supplier_name: string;
    msg_date: Date;
    unread: boolean;
  }
  
  export interface IResMessageDetail {
    msg: string;
    msg_date: Date;
    msg_file_url: string;
    msg_is_replied: boolean;
  }
  
  export interface ICreateSavedListProduct {
    user_id: string;
    savedlist_name: string;
    product_id: string;
    product_name: string;
    product_image_url: string;
    product_price: number;
    product_unit: string;
    product_currency_code: string;
    pack_size_label: string;
    pack_size_qty: number;
    imp_factor: number;
    product_group: IProductGroup;
    supplier_id: number;
    supplier_name: string;
    supplier_company_email: string;
    supplier_keyword: string[];
    supplier_verified: boolean;
    supplier_rating: number;
    address: IAddress;
  }
  
  export interface IResSavedListProducts {
    savedlist_id: string;
    savedlist_name: string;
    products: [
      {
        product_id: string;
        product_name: string;
        product_image_url: string;
        product_price: number;
        product_unit: string;
        product_currency_code: string;
        pack_size_label: string;
        pack_size_qty: number;
        imp_factor: number;
        product_group: IProductGroup;
        supplier_id: string;
        supplier_name: string;
        supplier_company_email: string;
        supplier_keyword: string[];
        supplier_verified: boolean;
        supplier_rating: number;
        address: IAddress;
      }
    ];
    supplier_count: number;
    product_count: number;
  }
  
  interface SavedList {
    savedlist_id: string;
    savedlist_name: string;
  }
  
  export interface ICreateSavedListSupplier {
    user_id: string;
    savedlist_name: string;
    supplier_id: string;
    supplier_name: string;
    supplier_company_email: string;
    supplier_keyword: string[];
    supplier_verified: boolean;
    supplier_rating: number;
    supplier_company_website: string;
    imp_factor: number;
    address: IAddress;
    shipping_zone: IShippingZone[];
    products: IProductWithOutSupplier[];
    supplier_count: number;
    product_count: number;
  }
  
  export interface IResSavedListSuppliers {
    savedlist_id: string;
    savedlist_name: string;
    suppliers: ISuppliers[];
    supplier_count: number;
    product_count: number;
  }
  
  interface ISuppliers {
    supplier_id: string;
    supplier_name: string;
    supplier_company_email: string;
    supplier_keyword: string[];
    supplier_verified: boolean;
    supplier_rating: number;
    supplier_company_website: string;
    imp_factor: number;
    address: IAddress;
    shipping_zone: IShippingZone[];
    products: IProductWithOutSupplier[];
  }
  
  interface IProductWithOutSupplier {
    product_id: string;
    product_name: string;
    product_image_url: string;
    product_price: number;
    product_unit: string;
    product_currency_code: string;
    pack_size_label: string;
    pack_size_qty: number;
    imp_factor: number;
    min_order_qty: number;
    product_group: IProductGroup;
    savedlists: SavedList[];
  }
  
  interface IShippingZone {
    zone_name: string;
    shipping_method: IShippingMethodInShippingZone[];
  }
  
  interface IShippingMethodInShippingZone {
    shipping_method_name: string;
    shipping_method_icon_url: string;
  }
  
  interface IAddress {
    addr_name: string;
    addr_full: string;
    addr_number: string;
    addr_province: string;
    addr_amphoe: string;
    addr_tambon: string;
    addr_postcode: string;
    addr_phone: string[];
    addr_mobile: string[];
    addr_fax: string[];
    addr_lat: string;
    addr_lng: string;
  }
  
  export interface IResFilterResultProduct {
    product_id: string;
    product_name: string;
    product_image_url: string;
    product_price: number;
    product_unit: string;
    product_currency_code: string;
    pack_size_label: string;
    pack_size_qty: number;
    imp_factor: number;
    product_group: IProductGroup;
    supplier_id: number;
    supplier_name: string;
    supplier_company_email: string;
    supplier_keyword: string[];
    supplier_verified: boolean;
    supplier_rating: number;
    address: IAddress;
    savedlists: SavedList[];
    supplier_count: number;
    product_count: number;
  }
  
  export interface IResProductMayLike {} // Like a IProduct
  
  export interface IResProductGroupDetail {
    product_group_id: string;
    product_group_image_url: string;
    product_group_name: string;
    product_source: string;
    product_category_id: string;
    product_category_custom_name: string;
    product_currency_code: string;
    product_origin: string;
    product_channel: string[];
    warehouse_id: string;
    product_brand: string;
    product_keyword: string[];
    product_category_spec: IProductCategorySpec[];
    product_video_cover_url: string;
    savedlists: SavedList[];
    products: [
      {
        product_name: string;
        cost_price: number;
        product_buy_price: number;
        product_price: number;
        product_sku: string;
        product_unit: string;
        product_wholesales: IProductWholeSale[];
        product_barcode: string;
        product_images_url: string[];
        initial_stock: number;
        product_package: IProductPackage;
        stock_alert: number;
        maximum_online_stock: number;
        min_order_qty: number;
        minimun_wholesale_qty: number;
        wholesale_price: number;
        retail_price: number;
        pack_size_label: string;
        pack_size_qty: number;
        preparing_time: number;
        free_ship_price: number;
        free_ship_quantity: number;
        wholesale: IWholesale;
      }
    ];
    leadtime: ILeadTime[];
    suppliers: {
      supplier_id: number;
      supplier_name: string;
      supplier_company_email: string;
      supplier_keyword: string[];
      supplier_verified: boolean;
      supplier_rating: number;
      imp_factor: number;
      address: IAddress;
      shipping_zone: IShippingZone[];
      payment_method: IPaymentMethod;
    };
  }
  
  interface IPaymentMethod {
    payment_method_type: string;
    payment_method_type_attr: IPaymentMethodTypeAttr[];
  }
  
  interface IPaymentMethodTypeAttr {
    payment_method_icon_url: string;
    payment_method_name: string;
  }
  
  interface IProductCategorySpec {
    attri_name: string;
    attri_value: string;
  }
  
  interface IProductPackage {
    weight: number;
    weight_unit: string;
    height: number;
    height_unit: string;
    width: number;
    width_unit: string;
    length: number;
    length_unit: string;
  }
  
  interface IWholesale {
    qty_minimum: number;
    product_price: number;
    retail_qty_minimum: number;
    retail_product_price: number;
  }
  
  interface ILeadTime {
    qty: string[]; // ( [1, 100] length = 2 )
    day: number; // (nagotiable)
  }
  
  interface IProductWholeSale {
    min_wholesale_qty: number;
    product_wholesale_price: number;
    retail_price: number;
  }
  
  export interface IResProductDescription {
    description: string; // HTML
  }
  
  export interface IResProductBySupplier {} // Like a IProduct
  
  export interface IResRelatedProductByProduct {} // Like a IProduct
  
  export interface IResProductDetail {
    product_id: string;
    product_image_url: string;
    product_name: string;
    cost_price: number;
    product_buy_price: number;
    product_price: number;
    product_sku: string;
    product_unit: string;
    product_wholesales: IProductWholeSale[];
    product_source: string;
    product_category_id: string;
    product_category_custom_name: string;
    product_currency_code: string;
    product_barcode: string;
    product_origin: string;
    product_channel: string[];
    product_images_url: string[];
    initial_stock: number;
    warehouse_id: string;
    product_package: IProductPackage;
    product_brand: string;
    stock_alert: number;
    maximum_online_stock: number;
    min_order_qty: number;
    minimun_wholesale_qty: number;
    wholesale_price: number;
    retail_price: number;
    product_keyword: string[];
    pack_size_label: string;
    pack_size_qty: number;
    preparing_time: number;
    product_category_spec: IProductCategorySpec[];
    free_ship_price: number;
    free_ship_quantity: number;
    product_video_cover_url: string;
    wholesale: IWholesale;
    leadtime: ILeadTime[];
    suppliers: {
      supplier_id: number;
      supplier_name: string;
      supplier_company_email: string;
      supplier_keyword: string[];
      supplier_verified: boolean;
      supplier_rating: number;
      imp_factor: number;
      address: IAddress;
      shipping_zone: IShippingZone[];
      payment_method: IPaymentMethod;
    };
  }
  
  export interface IResProductV2 {
    product_id: string;
    product_name: string;
    product_image_url: string;
    product_price: number;
    product_unit: string;
    product_currency_code: string;
    pack_size_label: string;
    pack_size_qty: number;
    product_group: IProductGroup;
    supplier_id: number;
    supplier_name: string;
    supplier_company_email: string;
    supplier_keyword: string[];
    supplier_verified: boolean;
    supplier_rating: number;
    imp_factor: number;
    address: IAddress;
    savedlists: SavedList[];
    supplier_count: number;
    product_count: number;
  }
  
  export interface IResAllNewProduct {} // IProductV2
  
  export interface IResProductWithCount {
    product_id: string;
    product_name: string;
    product_image_url: string;
    product_price: number;
    product_unit: string;
    product_currency_code: string;
    pack_size_label: string;
    pack_size_qty: number;
    imp_factor: number;
    min_order_qty: number;
    product_group: IProductGroup;
    supplier_id: string;
    supplier_name: string;
    supplier_verified: boolean;
    savedlists: SavedList[];
    supplier_count: number;
    product_count: number;
  }
  
  export interface IResAllRelatedProduct {} // Like a IProductWithCount
  
  export interface IResAllVisitedProduct {} // Like a IProductWithCount
  
  export interface IResAllRecommendProduct {} // Like a IProductV2
  
  export interface IResRecommendSupplier {
    supplier_id: number;
    supplier_icon_url: string;
    supplier_name: string;
    supplier_company_email: string;
    supplier_keyword: string[];
    supplier_verified: boolean;
    supplier_rating: number;
    supplier_rating_amount: number;
    imp_factor: number;
    address: IAddress;
  }
  
  export interface IResFilterResultSupplier {
    supplier_id: number;
    supplier_name: string;
    supplier_company_email: string;
    supplier_keyword: string[];
    supplier_verified: boolean;
    supplier_rating: number;
    supplier_company_website: string;
    imp_factor: number;
    address: IAddress;
    shipping_zone: IShippingZone[];
    products: IProductWithOutSupplier[];
    savedlists: SavedList[];
    supplier_count: number;
    product_count: number;
  }
  
  export interface IResSupplierWithSavedList {
    supplier_id: number;
    supplier_icon_url: string;
    supplier_name: string;
    supplier_company_email: string;
    supplier_keyword: string[];
    supplier_verified: boolean;
    supplier_rating: number;
    imp_factor: number;
    address: IAddress;
    savedlists: SavedList[];
  }
  
  export interface IResSupplierMayLike {} // ISupplierWithSavedList
  
  export interface IResLatestVisitSupplier {} // ISupplierWithSavedList
  
  export interface IResSupplierOverview {
    supplier_id: string;
    supplier_name: string;
    supplier_banner_url_array: string[];
    supplier_company_code: string;
    supplier_company_email: string;
    supplier_verified: boolean;
    supplier_rating: number;
    supplier_rating_count: number;
    supplier_score: number;
    supplier_response_time: string;
    imp_factor: number;
    supplier_keyword: string[];
    company_overview: string;
    supplier_logo_url: string;
    supplier_image_url: string;
    supplier_color: string;
    followers: number;
    ages: number;
    business_type: string;
    company_capital: number;
    supplier_company_register_id: string;
    main_product: string[];
    address: IAddress;
    employee: number;
    shipping_zone: IShippingZone[];
    payment_method: IPaymentMethod[];
    credit_term: string[];
    supplier_certificates: ISupplierCertificates[];
  }
  
  export interface IResSupplierContact {
    address: IAddress;
    address_supplier: IAddressSupplier[];
  }
  
  interface IAddressSupplier {
    supplier_addr_name: string;
    supplier_addr_full: string;
    supplier_addr_number: string;
    supplier_addr_province: string;
    supplier_addr_amphoe: string;
    supplier_addr_tambon: string;
    supplier_addr_postcode: string;
    supplier_addr_country: string;
    supplier_addr_location_lat: number;
    supplier_addr_location_lng: number;
    supplier_addr_phone: string;
    supplier_addr_mobile: string;
    supplier_addr_fax: string;
    supplier_addr_email: string;
    supplier_addr_type: string;
    office_hour: OfficeHour[];
  }
  
  interface OfficeHour {
    day: string;
    time: string;
  }
  
  export interface IResSupplierFactory {
    factory_address: IFactoryAddress;
    factory_area_unit: string;
    factory_area: string;
    factory_image_url: string[];
    factory_capacity: string;
    factory_capacity_unit: string;
  }
  
  interface IFactoryAddress {
    name: string;
    address_full: string;
    number: string;
    province: string;
    amphoe: string;
    tambon: string;
    postal: number;
    lat: string;
    lng: string;
  }
  
  export interface IResSupplierCersAndDocs {
    supplier_docs: ISupplierDocs[];
    supplier_certificates: ISupplierCertificates[];
  }
  
  export interface IResSupplierImgAndVerifiedImg {
    supplier_image: ISupplierImage[];
    supplier_images_verified: ISupplierImage[];
  }
  
  interface ISupplierDocs {
    url: string;
    type: string;
    title: string;
    expire: Date;
  }
  interface ISupplierImage {
    type: string;
    title: string;
    image: IImages[];
  }
  interface IImages {
    url: string;
    caption: string;
  }
  interface ISupplierCertificates {
    url: string;
    type: string;
    title: string;
    expire: Date;
    private: boolean;
    issued: Date;
    issuer: string;
    cer_name: string;
  }
  
  export interface IResSupplierProduct {} // IProduct
  
  export interface IResSupplierWebsite {
    company_description: string;
  }
  
  export interface IResSupplierCustomPage {
    title: string;
    content: string;
  }
  
  export interface IResRfqScore {
    rfq_score: number;
    rfq_section_name: string;
  }
  
  export interface IResQuotaRfq {
    quota_rfq: number;
    used_quota_rfq: number;
  }
  
  export interface IResShippingMethod {
    shipping_method_id: string;
    shipping_method_name: string;
    shipping_method_icon_url: string;
  }
  
  export interface IResGetPaymentMethod {
    payment_method_id: string;
    payment_method_type: string;
    payment_method_type_attr: IPaymentMethodTypeAttr[];
  }
  
  export interface ICreateRfq {
    user_id: string;
    rfq_request_date: Date;
    rfq_score: number;
    requestors: Requestors[];
    products: {
      product_name: string;
      product_keyword: string[];
      product_category_id: string;
    };
    product_info: {
      product_qty: number;
      product_unit: string;
      product_currency_code: string;
    };
    shipping_location: {
      addr_full: string;
      addr_number: string;
      addr_province: string;
      addr_amphoe: string;
      addr_tambon: string;
      addr_postcode: string;
      shipping_method_id: string[];
    };
    processing_time: {
      rfq_expiry_date: Date;
      request_recieve_date: Date;
    };
    payment_method: {
      credit_term: number;
      payment_method_id: string[];
    };
    more_detail: {
      image_url: string[];
      note: string;
    };
  }
  
  export interface IResRfqList {
    product_name: string;
    product_category_name: string;
    rfq_expiry_date: Date;
    seen_rfq_supplier_count: number;
    reply_rfq_quotation_count: number;
  }
  
  export interface IResReplyRfqList {
    supplier_name: string;
    supplier_verified: boolean;
    supplier_rating: string;
    supplier_rating_amount: number;
    price_per_unit: number;
    min_order_qty: number;
  }
  
  export interface IResQuotaInquiry {
    quota_inquiry: number;
    used_quota_inquiry: number;
  }
  
  export interface IResSupplier {
    supplier_id: string;
    supplier_name: string;
    supplier_verified: boolean;
    supplier_logo_url: string;
    supplier_score: number;
    supplier_response_time: string;
    supplier_rating: string;
    supplier_rating_amount: number;
    supplier_ages: number;
    supplier_company_email: string;
    address: IAddress;
    supplier_company_website: string;
    supplier_keyword: string[];
  }
  
  export interface ICreateInquiry {
    user_id: number;
    supplier_id: number;
    product_id: number;
    requestors: Requestors[];
    inquiry_message: string;
    inquiry_images_url: string[];
  }
  
  interface Requestors {
    name: string;
    email: string;
  }
  
  export interface IResInquiryProductList {
    product_id: string;
    product_name: string;
    product_image_url: string;
    product_price: number;
    product_unit: string;
    product_currency_code: string;
    pack_size_label: string;
    pack_size_qty: number;
    imp_factor: number;
    product_group: IProductGroup;
    supplier_id: number;
    supplier_name: string;
    supplier_company_email: string;
    supplier_keyword: string[];
    supplier_verified: boolean;
    supplier_rating: number;
    address: IAddress;
    savedlists: SavedList[];
    unread: false;
  }
  
  export interface IResSearchResultSupplier {} // Like a IFilterResultSupplier
  
  export interface IResSearchResultProduct {} // Like a IFilterResultProduct
  
  export interface IResSearchResultLocation {
    supplier_id: number;
    supplier_name: string;
    supplier_company_email: string;
    supplier_keyword: string[];
    supplier_verified: boolean;
    supplier_rating: number;
    supplier_rating_count: number;
    supplier_company_website: string;
    imp_factor: number;
    address: IAddress;
    shipping_zone: IShippingZone[];
    products: IProductWithOutSupplier[];
    company_map_location: CompanyMapLocation;
  }
  
  interface CompanyMapLocation {
    lat: string;
    lng: string;
    location: string[];
    pin_image_url: string;
  }
  
  export interface IResInterest {
    user_id: string;
    category_id: number;
  }
  