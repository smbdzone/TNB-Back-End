const productModel = require("../models/product");

const getProductsOfBrand = async (brand) => {
  try {
    // Use Mongoose's find method to search for products that match the brand
    const products = await productModel.find({ 'brand.sku': brand });

    // If there are no products found, return an appropriate message
    if (!products) {
      return { success: false, message: "No products found for the brand" };
    }

    // If products are found, return the product data
    return { success: true, message: "Data retrieved", data: products };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error retrieving data" };
  }
};

module.exports = {
  getProductsOfBrand,
};

// let products = [
//   {
//     "_id": "655d93878719c37f410a08e6",
//     "sku": "SWRS-050118-B5L",
//     "mainCategory": [
//         "Dining"
//     ],
//     "subCategory": [
//         "Serveware",
//         "Woodware"
//     ],
//     "filter": [
//         "Serving Boards & Platter",
//         "Acacia Woodware"
//     ],
//     "title": "Cake Stand/Riser Large",
//     "name": "Cake Stand/Riser Large",
//     "description": "Addressing the growing trend in innovative food presentation and buffet service, Table Theatre Acacia woodware contains items for every possible need. Acacia wood is a sustainable wood, naturally waterproof with high durability and an attractive colour and grain.",
//     "details": [
//         "Measure: Weight 1.45 kg",
//         "Dimensions 28 × 25 cm",
//         "Material:",
//         "Acacia Wood",
//         "Shape:",
//         "Ropund",
//         "Type:",
//         "Serving Boards & Platter"
//     ],
//     "brand": "Sango",
//     "imageReferences": [
//         "SWRS-050118-B5L"
//     ],
//     "remarks": [],
//     "unitPrice": "150.30",
//     "vatAmount": "7.51",
//     "priceInclusiveOfVat": "157.81",
//     "completeTheLook": [
//         "Sango",
//         "SWQ-070418-B4SET",
//         "SWQ-010118-B4",
//         "SWP-090118-B1",
//         "SWR-450916-B3",
//         "SWRS-050118-B5"
//     ],
//     "imageTitle": "Cake Stand/Riser Large",
//     "__v": 0
// },
// {
//     "_id": "655d93878719c37f410a08dc",
//     "sku": "SWO-211218-TSC47",
//     "mainCategory": [
//         "Dining"
//     ],
//     "subCategory": [
//         "Serveware",
//         "Woodware"
//     ],
//     "filter": [
//         "Serving Boards & Platter",
//         "Acacia Woodware"
//     ],
//     "title": "Acacia Wood Tray",
//     "name": "Acacia Wood Tray",
//     "description": "The Acacia woodware shapes echo the organic feel of the Ora collection and work well as stand alone pieces or in conjunction with the ceramic pieces to create a stylish tabletop setting.",
//     "details": [
//         "Measure: Weight 0.23 kg",
//         "Dimensions 26 × 13.5 × 1.9 cm",
//         "Material:",
//         "Acacia Wood",
//         "Shape:",
//         "Rectangular",
//         "Type:",
//         "Serving Boards & Platter"
//     ],
//     "brand": "Sango",
//     "imageReferences": [
//         "SWO-211218-TSC47"
//     ],
//     "remarks": [],
//     "unitPrice": "73.26",
//     "vatAmount": "3.66",
//     "priceInclusiveOfVat": "76.92",
//     "completeTheLook": [
//         "Sango",
//         "SWO-250618-WT46",
//         "SWO-011118-SB55",
//         "SWO-011118-AB56",
//         "SWO-011118-AB57"
//     ],
//     "imageTitle": "Acacia Wood Tray",
//     "__v": 0
// },
// ]


// let categories = []
// let subCategories = []

// products.forEach((item)=>{
//   for(let i = 0; i < item.mainCategory.length; i++){
//     if(!categories.contain( item.mainCategory[i] ))
//     {
//       categories.push( item.mainCategory[i] )
//     }
//   }

//   for(let i = 0; i < item.subCategory.length; i++){
//     if(!subCategories.contain( item.subCategory[i] ))
//     {
//       subCategories.push( item.subCategory[i] )
//     }
//   }
// })