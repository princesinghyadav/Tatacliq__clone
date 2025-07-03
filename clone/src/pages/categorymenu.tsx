 import React from "react"; 
 import '../css/category.css'

const CategoryMenu = () => {
  return (
    <div className="category-container">
      <div className="category-sidebar">
        <div className="category-item">Women's Fashion ▶</div>
        <div className="category-item">Men's Fashion</div>
        <div className="category-item">Kid's Fashion</div>
        <div className="category-item">Home & Kitchen</div>
        <div className="category-item">Beauty</div>
        <div className="category-item">Gadgets</div>
        <div className="category-item">Accessories</div>
        <div className="category-item">Health & Wellness</div>
      </div>

      <div className="category-content">
        <div className="category-column">
          <h4>Shop All Ethnic Wear</h4>
          <p>Kurtis & Kurtas</p>
          <p>Suits</p>
          <p>Sarees</p>
          <p>Lehengas</p>
          <p>Bottoms</p>
          <p>Blouses & Fabrics</p>
          <p>Dupattas</p>
          <p>Ethnic dresses</p>

          <h4>Shop All Western Wear</h4>
          <p>Tops & T-shirts</p>
          <p>Dresses</p>
          <p>Jeans</p>
          <p>Shirts</p>
          <p>Trousers</p>
        </div>

        <div className="category-column">
          <h4>Activewear & Sportswear</h4>
          <p>T-shirts</p>
          <p>Shorts</p>
          <p>Sets</p>
          <p>Jackets</p>
          <p>Track Pants</p>
          <p>Skirts</p>
          <p>Shorts</p>
          <p>Jackets & Blazers</p>
          <p>Leggings</p>
          <p>Capris</p>
        </div>

        <div className="category-column">
          <h4>Innerwear</h4>
          <h4>Lingerie & Lounge Sets</h4>
          <p>Bras</p>
          <p>Panties</p>
          <p>Lingerie Sets</p>
          <p>Camisoles</p>
          <p>Sleepwear & Robes</p>
          <p>Shapewear</p>
          <p>Swimwear</p>
        </div>

        <div className="category-column">
          <h4>Shop All Footwear</h4>
          <p>Casual Footwear</p>
          <p>Boots</p>
          <p>Sneakers</p>
          <p>Flip Flops</p>
          <p>Sports Shoes</p>

          <h4>Ethnic Footwear</h4>

          <h4>Bags, Wallets & Clutches</h4>
          <p>Handbags</p>
          <p>Tote Bags</p>
          <p>Sling Bags</p>
          <p>Backpacks</p>
          <p>Wallets</p>
          <p>Clutches</p>
          <p>Premium Handbags</p>

          <h4>Jewellery</h4>
          <p>Gold</p>
          <p>Diamond</p>
          <p>Silver</p>
          <p>Fashion Jewellery</p>

          <h4>Watches</h4>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
