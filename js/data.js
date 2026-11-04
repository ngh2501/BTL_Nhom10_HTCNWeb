/* Dữ liệu mẫu sản phẩm của SportPro Store */
const defaultProducts = [
{id:1,name:"Bóng đá Động Lực UHV 2.05",category:"bongda",brand:"Động Lực",price:450000,oldPrice:550000,discount:"-18%",image:"../images/products/bong1.jpg",desc:"Bóng đá số 5, bề mặt bền và phù hợp luyện tập.",stock:20},
{id:2,name:"Vợt cầu lông Yonex Astrox 88D",category:"caulong",brand:"Yonex",price:3200000,oldPrice:3800000,discount:"-15%",image:"../images/products/vot1.jpg",desc:"Vợt cầu lông nhẹ, hỗ trợ các cú đập cầu mạnh.",stock:10},
{id:3,name:"Vợt tennis Wilson Pro Staff",category:"tennis",brand:"Wilson",price:4900000,oldPrice:5500000,discount:"-11%",image:"../images/products/vot2.jpg",desc:"Vợt tennis hỗ trợ kiểm soát bóng.",stock:8},
{id:4,name:"Tạ tay cao su 5kg",category:"tapluyen",brand:"Ziva",price:250000,oldPrice:300000,discount:"-16%",image:"../images/products/ta1.jpg",desc:"Tạ tay phù hợp tập luyện tại nhà.",stock:30},
{id:5,name:"Thảm tập Yoga TPE 6mm",category:"tapluyen",brand:"Liforme",price:350000,oldPrice:450000,discount:"-22%",image:"	../images/products/yoga1.jpg",desc:"Thảm tập có bề mặt chống trượt.",stock:25},
{id:6,name:"Đai bó gối thể thao",category:"chaybo",brand:"Aolikes",price:120000,oldPrice:150000,discount:"-20%",image:"../images/products/dai1.jpg",desc:"Đai hỗ trợ khớp gối khi vận động.",stock:50},
{id:7,name:"Găng tay thủ môn",category:"bongda",brand:"Adidas",price:1250000,oldPrice:1500000,discount:"-17%",image:"	../images/products/gangtay1.jpg",desc:"Găng tay hỗ trợ độ bám khi bắt bóng.",stock:15},
{id:8,name:"Túi đựng vợt cầu lông 6 ngăn",category:"caulong",brand:"Yonex",price:850000,oldPrice:1000000,discount:"-15%",image:"	../images/products/tui1.jpg",desc:"Túi đựng vợt và phụ kiện thể thao.",stock:12},
{id:9,name:"Bóng tennis tập luyện",category:"tennis",brand:"Wilson",price:180000,oldPrice:220000,discount:"-18%",image:"../images/products/bong2.jpg",desc:"Bóng tennis dùng cho luyện tập.",stock:40},
{id:10,name:"Dây nhảy thể thao",category:"chaybo",brand:"SportPro",price:90000,oldPrice:120000,discount:"-25%",image:"	../images/products/daynhay1.jpg",desc:"Dây nhảy gọn nhẹ, dễ điều chỉnh.",stock:35}
];
function initProductsData(){
  const saved=localStorage.getItem("products");
  if(!saved || !Array.isArray(JSON.parse(saved)) || JSON.parse(saved).length===0)
    localStorage.setItem("products",JSON.stringify(defaultProducts));
}
initProductsData();
