// const irresistibleDealsModel = require("../models/irresistibleDeals");

// const getIrresistibleDeals = async () => {
//     try {
//         const banner = await irresistibleDealsModel.find();
//         return { success: true, message: "Data retrieved", data: banner };
//     } catch (error) {
//         console.error(error);
//         return { success: false, message: "Error Saving Data" };
//     }
// };

// const postIrresistibleDeals = async (data) => {
//     try {
//         const banner = await irresistibleDealsModel.create(data);
//         return { success: true, message: "Data saved", data: banner };
//     } catch (error) {
//         console.error(error);
//         return { success: false, message: "Error Saving Data" };
//     }
// };

// const deleteIrresistibleDeals = async (id) => {
//     try {
//         const banner = await irresistibleDealsModel.findByIdAndDelete(id);
//         if (banner) {
//             return { success: true, message: "Data deleted", data: banner };
//         } else {
//             return { success: false, message: "Banner not found" };
//         }
//     } catch (error) {
//         console.error(error);
//         return { success: false, message: "Error deleting data" };
//     }
// };

// const updateIrresistibleDeals = async (id, data) => {
//     try {
//         const deals = await irresistibleDealsModel.findByIdAndUpdate(id, data, { new: true });
//         if (deals) {
//             return { success: true, message: "Data deleted", data: deals };
//         } else {
//             return { success: false, message: "Irresistible Deals not found" };
//         }
//     } catch (error) {
//         console.error(error);
//         return { success: false, message: "Error deleting data" };
//     }
// };

// module.exports = {
//     getIrresistibleDeals,
//     postIrresistibleDeals,
//     deleteIrresistibleDeals,
//     updateIrresistibleDeals,
// };
