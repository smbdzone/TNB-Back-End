const bulkView = require("../view/bulkView");
const cloudinary = require('cloudinary').v2;


function handleDetails(description) {
    if(description){
        const detailsArray = description
          .split("&#10;")
          .map((detail) => detail.trim());
      
        const cleanedDetailsArray = detailsArray
          .map((detail) => detail.replace(/^\d+\.\s*/, '').replace('•', '').trim())
          .filter(Boolean);
      
        return cleanedDetailsArray;
    }else{
        return []
    }
}

function removeEnter(string){
    return string.replace(/&#10;/g, '').trim()
}

function editKeys (array){
    return array.map((item)=>{
        let obj = {}
        for(let key in item){
            obj[ key.trim().toLowerCase() ] = item[key]
        }
        return obj
    })
}

const uploadData = async (req, res) => {
  try {
    const { body } = req;

    let data = body;
    if (typeof data === "object") {
      data = data.Sheet1;
    }

    data = editKeys(data)

    let tempArray = [];
    data.forEach((item) => {
      let tempObj = {};
      tempObj.sku = item["product sku"] ? removeEnter(item["product sku"]) : "";
      tempObj.mainCategory = handleDetails(item["main category"]);
      tempObj.subCategory = handleDetails(item["sub-category"]);
      tempObj.filter = handleDetails(item["filter"]);
      tempObj.title = item["title"] ? removeEnter(item["title"]) : "";
      tempObj.name = item["product name"] ? removeEnter(item["product name"]) : "";
      tempObj.description = item["description"]
        ? removeEnter(item["description"])
        : "";
      tempObj.details = handleDetails(item["details"]);
      tempObj.brand = item["brand"] ? removeEnter(item["brand"]) : "";
      tempObj.imageReferences = handleDetails(item["imagereference"]);
      tempObj.remarks = handleDetails(item["remarks"]);
      tempObj.unitPrice = item["unit price"] ? removeEnter(item["unit price"]) : "";
      tempObj.vatAmount = item["vat amount"] ? removeEnter(item["vat amount"]) : "";
      tempObj.priceInclusiveOfVat = item["prices inclusive of vat"]
        ? removeEnter(item["prices inclusive of vat"])
        : "";
      tempObj.completeTheLook = handleDetails(item["complete the look"]);
      tempObj.imageTitle = item["image title"]
        ? removeEnter(item["image title"])
        : "";
      tempArray.push(tempObj);
    });
    data = tempArray;
    // console.log(data[0])
    // console.log(data[1])
    // console.log(data[2])
    // try {
    //   const result = await bulkView.uploadData(data);
    //   if (result.success) {
    //     res.status(200)
    //   } else {
    //     res.status(500)
    //   }
    // } catch (viewError) {
    //   res.status(500).json({ error: viewError.message });
    // }
    res.send(200);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in creating data");
  }
};

module.exports = {
  uploadData
};