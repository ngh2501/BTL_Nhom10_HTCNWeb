function getProducts(){try{return JSON.parse(localStorage.getItem("products"))||[];}catch(e){return []}}
function formatCurrency(n){return Number(n||0).toLocaleString("vi-VN")+" đ"}
function escapeHTML(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function renderProductList(list,containerId){
 const box=document.getElementById(containerId); if(!box)return;
 if(!list.length){box.innerHTML='<div class="col-12"><p class="alert alert-light">Không tìm thấy sản phẩm phù hợp.</p></div>';return}
 box.innerHTML=list.map(p=>`<div class="col-6 col-lg-3 mb-4"><article class="product-card h-100">
 <div class="product-visual" role="img" aria-label="${escapeHTML(p.name)}"><span>SPORTPRO</span></div>
 ${p.discount?`<span class="badge-discount">${escapeHTML(p.discount)}</span>`:""}
 <div class="p-3 d-flex flex-column"><small class="text-muted">${escapeHTML(p.brand)}</small>
 <h6 class="product-name">${escapeHTML(p.name)}</h6><div class="mt-auto"><span class="price-new">${formatCurrency(p.price)}</span> <span class="price-old">${formatCurrency(p.oldPrice)}</span></div>
 <div class="d-grid gap-2 mt-3"><button class="btn btn-outline-dark btn-sm" onclick="viewDetail(${Number(p.id)})">Xem chi tiết</button><button class="btn btn-orange btn-sm" onclick="addToCartClick(${Number(p.id)})">Thêm vào giỏ</button></div></div></article></div>`).join("");
}
function viewDetail(id){localStorage.setItem("currentProduct",String(id));location.href="chitiet.html"}
function addToCartClick(id){if(typeof themVaoGio==="function"){themVaoGio(id,1);return}let cart=[];try{cart=JSON.parse(localStorage.getItem("cart"))||[]}catch(e){}let item=cart.find(x=>Number(x.id)===Number(id));if(item)item.qty=(Number(item.qty)||0)+1;else cart.push({id:Number(id),qty:1});localStorage.setItem("cart",JSON.stringify(cart));alert("Đã thêm sản phẩm vào giỏ hàng.");}
function filterProductsPage(){
 const params=new URLSearchParams(location.search),cat=params.get("loai")||"",key=(params.get("search")||"").trim().toLocaleLowerCase("vi");
 let list=getProducts();if(cat)list=list.filter(p=>p.category===cat);
 if(key)list=list.filter(p=>(p.name+" "+p.brand+" "+p.desc).toLocaleLowerCase("vi").includes(key));
 const names={bongda:"Dụng cụ bóng đá",caulong:"Dụng cụ cầu lông",tennis:"Dụng cụ tennis",chaybo:"Thiết bị chạy bộ",tapluyen:"Dụng cụ tập luyện"};
 const title=document.getElementById("category-title");if(title)title.textContent=key?`Kết quả tìm kiếm: “${params.get("search")}”`:names[cat]||"Tất cả sản phẩm";
 renderProductList(list,"product-list-container");
}
function loadProductDetailPage(){
 const id=localStorage.getItem("currentProduct"),p=getProducts().find(x=>String(x.id)===String(id)),box=document.getElementById("product-detail-container");
 if(!box)return;if(!p){box.innerHTML='<div class="alert alert-warning">Chưa chọn sản phẩm. <a href="sanpham.html">Quay lại danh sách</a>.</div>';return}
 const crumb=document.getElementById("breadcrumb-product-name");if(crumb)crumb.textContent=p.name;
 box.innerHTML=`<div class="row g-4"><div class="col-md-5"><div class="product-visual product-visual-large"><span>SPORTPRO</span></div></div><div class="col-md-7"><small class="text-muted">Thương hiệu: ${escapeHTML(p.brand)}</small><h2 class="fw-bold mt-2">${escapeHTML(p.name)}</h2><p><span class="price-new fs-4">${formatCurrency(p.price)}</span> <span class="price-old">${formatCurrency(p.oldPrice)}</span> <span class="badge text-bg-warning">${escapeHTML(p.discount||"")}</span></p><p>${escapeHTML(p.desc)}</p><p><b>Tình trạng:</b> ${p.stock>0?`Còn hàng (${p.stock})`:"Tạm hết hàng"}</p><div class="d-flex gap-2 align-items-center"><label for="detail-qty">Số lượng</label><input id="detail-qty" class="form-control" type="number" min="1" max="${Math.max(1,Number(p.stock)||1)}" value="1" style="width:90px"></div><div class="d-flex gap-2 mt-4"><button class="btn btn-orange" onclick="addDetailToCart(${Number(p.id)})" ${p.stock<=0?"disabled":""}>Thêm vào giỏ</button><button class="btn btn-dark" onclick="buyNow(${Number(p.id)})" ${p.stock<=0?"disabled":""}>Mua ngay</button></div></div></div>`;
 renderProductList(getProducts().filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4),"related-products-container");
}
function addDetailToCart(id){const q=Math.max(1,parseInt(document.getElementById("detail-qty")?.value,10)||1);if(typeof themVaoGio==="function")themVaoGio(id,q);else for(let i=0;i<q;i++)addToCartClick(id)}
function buyNow(id){addDetailToCart(id);location.href="giohang.html"}
