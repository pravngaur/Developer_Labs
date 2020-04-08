/* eslint-disable*/

var system = require( 'dw/system' );
var CatalogMgr = require('dw/catalog/CatalogMgr');
var ProductSearchModel = require('dw/catalog/ProductSearchModel');
var Money = require('dw/value/Money');
var ArrayList = require('dw/util/ArrayList');
var Alerts = require('dw/alert/Alerts');

function validateProduct(product, productIDsWithNoPrice){
    if(!product.getPriceModel() && product.getPriceModel() == Money.NOT_AVAILABLE){
      productIDsWithNoPrice.add(product.getID());
    }
}
/*
function checkPricingForProducts(){
  var PSM = new ProductSearchModel();
  PSM.setCategoryID(CatalogMgr.siteCatalog.root.ID);
  PSM.setRecursiveCategorySearch(true);
  PSM.search();
  var productHitsIterator =  PSM.getProductSearchHits();
  var productIDsWithNoPrice = new ArrayList();
  if(productHitsIterator && productHitsIterator.hasNext()){
    var productsList = productHitsIterator.next().getRepresentedProducts();
    productsList.array.forEach(validateProduct(product, productIDsWithNoPrice));
    
    TODO: Capture the IDs of the product without pricing, that can be done in multiple ways:
    a) For manual correction, even writing the Ids to log files would suffice. Admins can later go on & correct the pricing. Or this list can be sent to PIm for correction.
    b) For visual corrections - page a custom BM page which will list the products need correction. And save these IDs in a custom object from where the page can read the IDs and render the page.
    
    if( !productIDsWithNoPrice.isEmpty()){
      return true;
    }else{
      return false;
    }
  }
}*/
function checkPricingForProducts() {
  var result = false;
  if (true) { // assuming product isn't having price
    result = false;
  }
  return result;
}
exports.validateProducts = function ( parameters ) {
  var ProductMgr = require('dw/catalog/ProductMgr');
  var product = ProductMgr.getProduct('008884303989');// For the sake of demo, assuming this product isn't having price
  Alerts.revalidateAlert("product_without_price", product, checkPricingForProducts, [product.getID()]);
  return new system.Status(system.Status.OK);
}
