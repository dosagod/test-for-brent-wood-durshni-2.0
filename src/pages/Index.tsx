import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import idliImage from "@/assets/idli.jpg";

import sweetsCollection from "@/assets/sweets-collection.jpg";
import kosambariImage from "@/assets/kosambari.jpg";

const Index = () => {
  // Menu data organized by categories
  const breakfastItems = [
    { name: "Kharabath", description: "Spicy semolina upma with vegetables" },
    { name: "Kesari Bath", description: "Sweet semolina dessert with saffron" },
    { name: "Idli", description: "Steamed rice cakes with chutney & sambar" },
    { name: "Vada", description: "Crispy lentil donuts" },
    { name: "Poori / Sagu", description: "Fried bread with spiced potato curry" }
  ];

  const appetizers = [
    { name: "Aloo Bonda", description: "Potato fritters in gram flour batter" },
    { name: "Mirchi Bajji", description: "Stuffed chili fritters" },
    { name: "Veg Pakoda", description: "Mixed vegetable fritters" },
    { name: "Gobi Manchuri", description: "Indo-Chinese cauliflower appetizer" },
    { name: "Masala Vada (Ambode)", description: "Spiced lentil fritters" }
  ];

  const riceItems = [
    { name: "Bisibele Bath", description: "Spicy rice with lentils and vegetables" },
    { name: "Veg Pulao", description: "Fragrant rice with mixed vegetables" },
    { name: "Veg Paneer Biryani", description: "Aromatic rice with paneer and spices" },
    { name: "Lemon Rice", description: "Tangy rice with curry leaves and peanuts" },
    { name: "Puliyogare", description: "Tamarind rice with traditional spices" },
    { name: "Ghee Rice", description: "Aromatic rice cooked in clarified butter" },
    { name: "Vangibath", description: "Spiced eggplant rice" },
    { name: "Meethi Bellpepper Bath", description: "Sweet bell pepper rice" },
    { name: "Curd Rice", description: "Cooling yogurt rice with tempering" }
  ];

  const palya = [
    { name: "Beans Carrot", description: "Stir-fried green beans and carrots" },
    { name: "Cabbage Carrot", description: "Spiced cabbage and carrot stir-fry" },
    { name: "Green Squash", description: "Tender bottle gourd curry" },
    { name: "Ladies Finger", description: "Crispy okra preparation" },
    { name: "Potato Fry Dry", description: "Spiced potato stir-fry" },
    { name: "Thondrkai (Tinda) Palya", description: "Apple gourd curry" }
  ];

  const kosambari = [
    { name: "Corn Green Apple Bell Peppers", description: "Fresh salad with mixed vegetables" },
    { name: "Moong Dal Kosambari", description: "Cucumber, carrot & pomegranate salad" }
  ];

  const sweets = [
    { name: "Poppyseed Kheer", description: "Creamy poppy seed pudding" },
    { name: "Doodhi Kheer", description: "Bottle gourd sweet pudding" },
    { name: "Mysore Pak", description: "Traditional gram flour sweet" },
    { name: "Shavige", description: "Sweet vermicelli preparation" },
    { name: "Obbattu", description: "Sweet flatbread with jaggery filling" },
    { name: "Besan Ladoo", description: "Gram flour sweet balls" },
    { name: "Hayagreeva", description: "Channa dal sweet" },
    { name: "Badam Puri", description: "Almond-flavored sweet puri" },
    { name: "Basundi", description: "Reduced milk sweet with nuts" }
  ];

  const gravies = [
    { name: "Veg Curry (Sagu)", description: "Mixed vegetable curry" },
    { name: "Paneer Butter Masala", description: "Creamy tomato-based paneer curry" },
    { name: "Pineapple Gojju", description: "Sweet and tangy pineapple curry" },
    { name: "Sambar", description: "Traditional lentil curry" },
    { name: "Dal Makhani", description: "Rich black lentil curry" },
    { name: "Channa Masala", description: "Spiced chickpea curry" },
    { name: "Rasam", description: "Tangy tomato-tamarind soup" },
    { name: "Majjige Huli / More Kolambu", description: "Buttermilk curry" },
    { name: "Lemon Saaru", description: "Tangy lemon soup" }
  ];

  const eveningSnacks = [
    { name: "Dilpasand", description: "Made fresh on demand" }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      
      {/* Menu Sections */}
      <MenuSection 
        title="Breakfast Delights"
        subtitle="Start your day with authentic South Indian breakfast favorites"
        items={breakfastItems}
        image={idliImage}
      />
      
      <MenuSection 
        title="Appetizers"
        subtitle="Crispy and flavorful starters to tantalize your taste buds"
        items={appetizers}
        image={"/lovable-uploads/a597fbc3-6867-41ee-980b-1c3edd5f8c11.png"}
        reverse
      />
      
      <MenuSection 
        title="Rice Specialties"
        subtitle="Aromatic rice dishes bursting with traditional flavors"
        items={riceItems}
        image={"/lovable-uploads/c1b7accf-a2aa-4ed1-b32a-3af6e3a11481.png"}
      />
      
      <MenuSection 
        title="Palya (Vegetable Sides)"
        subtitle="Fresh and healthy vegetable preparations"
        items={palya}
        reverse
      />
      
      <MenuSection 
        title="Kosambari (Salads)"
        subtitle="Refreshing and nutritious salad combinations"
        items={kosambari}
        image={kosambariImage}
      />
      
      <MenuSection 
        title="Traditional Sweets"
        subtitle="Indulge in our collection of authentic South Indian desserts"
        items={sweets}
        image={sweetsCollection}
        reverse
      />
      
      <MenuSection 
        title="Gravies & Curries"
        subtitle="Rich and flavorful curries that define South Indian cuisine"
        items={gravies}
      />
      
      <MenuSection 
        title="Evening Snacks"
        subtitle="Perfect tea-time companions"
        items={eveningSnacks}
        reverse
      />
      
        {/* Contact Section */}
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Index;
