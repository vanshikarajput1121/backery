import { useState } from "react";
import "./index.css";

const menuItems = [
  {
    name: "Butter Croissant",
    description: "Flaky, golden, and perfectly buttery.",
    price: "₹1450",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Classic Tiramisu",
    description: "Coffee-kissed layers of Italian delight.",
    price: "₹1725",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Matcha Latte",
    description: "Smooth, earthy, and perfectly balanced.",
    price: "₹1575",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Truffle Mushroom Pasta",
    description: "Creamy, aromatic, and utterly indulgent.",
    price: "₹1395",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Berry Cheesecake",
    description: "Rich, creamy, and crowned with seasonal berries.",
    price: "₹1695",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Avocado Sourdough Toast",
    category: "Breakfast",
    description: "Smashed avocado, poached egg, chili flakes, and microgreens on toasted artisan sourdough.",
    price: "₹425",
    rating: 4.8,
    isVegetarian: true,
    image:
      "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Iced Caramel Macchiato",
    category: "Beverages",
    description: "Espresso combined with vanilla syrup, chilled milk, and a rich caramel drizzle.",
    price: "₹345",
    rating: 4.9,
    isVegetarian: true,
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Artisan Margherita Pizza",
    category: "Mains",
    description: "Neapolitan-style crust, fresh mozzarella, San Marzano tomato sauce, and basil.",
    price: "₹595",
    rating: 4.7,
    isVegetarian: true,
    image:
      "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Belgian Chocolate Waffle",
    category: "Dessert",
    description: "Crisp golden waffle drizzled with melted dark chocolate and vanilla bean gelato.",
    price: "₹395",
    rating: 4.8,
    isVegetarian: true,
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Classic Eggs Benedict",
    category: "Breakfast",
    description: "Poached eggs and smoked turkey ham on English muffins with creamy hollandaise.",
    price: "₹475",
    rating: 4.6,
    isVegetarian: false,
    image:
      "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Cold Brew Coffee",
    category: "Beverages",
    description: "Slow-steeped for 18 hours for an exceptionally smooth and bold flavor profile.",
    price: "₹295",
    rating: 4.7,
    isVegetarian: true,
    image:
      "https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Pesto Chicken Sandwich",
    category: "Mains",
    description: "Grilled chicken breast, basil pesto, sundried tomatoes, and arugula on focaccia.",
    price: "₹525",
    rating: 4.8,
    isVegetarian: false,
    image:
      "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Fluffy Blueberry Pancakes",
    category: "Breakfast",
    description: "Stack of buttermilk pancakes loaded with fresh blueberries and pure maple syrup.",
    price: "₹425",
    rating: 4.9,
    isVegetarian: true,
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Fudge Chocolate Brownie",
    category: "Dessert",
    description: "Warm, gooey dark chocolate brownie topped with crushed walnuts and cocoa powder.",
    price: "₹295",
    rating: 4.8,
    isVegetarian: true,
    image:
      "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Hibiscus Iced Tea",
    category: "Beverages",
    description: "Refreshing herbal iced tea infused with hibiscus flowers, lemon, and fresh mint.",
    price: "₹275",
    rating: 4.6,
    isVegetarian: true,
    image:
      "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const galleryImages = [
  "photo-1445116572660-236099ec97a0",
  "photo-1501339847302-ac426a4a7cbb",
  "photo-1554118811-1e0d58224f24",
  "photo-1578985545062-69928b1d9587",
  "photo-1493857671505-72967e2e2760",
  "photo-1442512595331-e89e73853f31",
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Velora Café home">
      <span className="brand-name">Velora</span>
      <span className="brand-sub">CAFÉ</span>
    </a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Brand />
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "×" : "☰"}
      </button>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["Home", "About", "Menu", "Reservation", "Gallery", "Blog", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ),
        )}
        <a className="nav-book" href="#reservation" onClick={closeMenu}>
          ▣ &nbsp; Book a Table
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="script">Savor the moment</span>
        <h1>VELORA CAFÉ</h1>
        <div className="hero-kicker">BAKERY · COFFEE · MEMORIES</div>
        <p>
          Where every detail is crafted with love. From our pastries to your
          favorite brew, experience comfort in every bite.
        </p>
        <div className="button-row">
          <a className="button" href="#menu">
            Explore Menu&nbsp; →
          </a>
          <a className="button outline" href="#about">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    ["♧", "Premium Ingredients", "Sourced with care\nfor exceptional taste"],
    ["♧", "Artisanal Creations", "Handcrafted by\npassionate chefs"],
    ["☼", "Cozy Ambience", "A warm and inviting\nspace to unwind"],
    ["♡", "Made with Love", "Because every detail\ntruly matters"],
  ];

  return (
    <section className="benefits" aria-label="What makes Velora special">
      {benefits.map(([icon, heading, copy]) => (
        <div className="benefit" key={heading}>
          <div className="benefit-icon">{icon}</div>
          <div>
            <strong>{heading}</strong>
            <span>{copy.split("\n").map((line, index) => <span key={index}>{line}</span>)}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

function MenuSection() {
  return (
    <section className="section" id="menu">
      <div className="section-heading">
        <p className="eyebrow">Our Signature Menu</p>
        <h2>Crafted to Perfection</h2>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <article className="menu-card" key={item.name}>
            <div
              className="menu-photo"
              role="img"
              aria-label={item.name}
              style={{ backgroundImage: `url("${item.image}")` }}
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <strong className="price">{item.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeatureRow() {
  return (
    <section className="feature-row" id="about">
      <article className="special-card">
        <div className="special-copy">
          <span className="script">Chef&apos;s Special</span>
          <h3>HERB CRUSTED SALMON</h3>
          <p>
            Pan-seared salmon with a fragrant herb crust, served with roasted
            vegetables and our lemon butter sauce.
          </p>
          <a className="button" href="#menu">
            Discover More
          </a>
        </div>
      </article>
      <article className="testimonial">
        <span className="quote-mark">“</span>
        <blockquote>
          Velora Café is my little escape. The coffee is exceptional, the
          pastries are heavenly, and the ambience is simply perfect.
        </blockquote>
        <div className="customer">
          <div className="avatar">I</div>
          <div>
            <strong>ISABELLA M.</strong>
            <span>Regular guest</span>
          </div>
        </div>
      </article>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-bar">
        <div>
          <p className="eyebrow">A Feast for the Senses</p>
          <h2>Inside Velora</h2>
        </div>
        <a href="#gallery">View Gallery&nbsp; →</a>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((id, index) => (
          <div
            className="gallery-photo"
            key={id}
            role="img"
            aria-label={`Velora Café gallery photo ${index + 1}`}
            style={{
              backgroundImage: `url(https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=80)`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

function Reservation() {
  return (
    <section className="reservation" id="reservation">
      <div className="reservation-copy">
        <p className="eyebrow">Reserve Your Table</p>
        <h2>We Save a Seat for You</h2>
        <p>
          Whether it&apos;s a cozy coffee date or a special celebration,
          we&apos;d love to host you.
        </p>
      </div>
      <form className="reservation-form" onSubmit={(event) => event.preventDefault()}>
        <input aria-label="Full name" placeholder="Full Name" required />
        <input aria-label="Email address" type="email" placeholder="Email Address" required />
        <input aria-label="Date" type="date" required />
        <select aria-label="Time" defaultValue="">
          <option value="" disabled>Time</option>
          <option>9:00 AM</option>
          <option>12:00 PM</option>
          <option>3:00 PM</option>
          <option>6:00 PM</option>
        </select>
        <select aria-label="Number of people" defaultValue="2 People">
          <option>1 Person</option>
          <option>2 People</option>
          <option>3 People</option>
          <option>4 People</option>
          <option>5+ People</option>
        </select>
        <button className="button" type="submit">Book a Table&nbsp; →</button>
      </form>
      <div className="reservation-note">See you soon!</div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <Brand />
        <p>
          Velora Café is a place to slow down, savor the little things, and
          create moments worth remembering.
        </p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#menu">Our Menu</a>
          <a href="#reservation">Book a Table</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
      <div>
        <h3>Opening Hours</h3>
        <p>Monday – Friday<br />7:00 AM – 9:00 PM</p>
        <p>Saturday – Sunday<br />8:00 AM – 10:00 PM</p>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>♧ &nbsp; 123 Velora Lane<br/>Bahu Fort gardens, Jammu</p>
        <p>☎ &nbsp; 8xxxxxxxxx6<br/>✉ &nbsp; mycafe@veloracafe.com</p>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Velora Café. All Rights Reserved. <br />
        Made with 🤍 by Vanshika Rana</span>
        <span>Privacy Policy &nbsp; · &nbsp; Terms &amp; Conditions</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="site-shell">
      <Navbar />
      <Hero />
      <Benefits />
      <MenuSection />
      <FeatureRow />
      <Gallery />
      <Reservation />
      <Footer />
    </main>
  );
}