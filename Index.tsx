import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

const services = [
  {
    id: "plumbing",
    title: "Plumbing Services",
    subtitle: "Fast, Affordable, and Reliable",
    description: "From leaking taps to complete pipe installations",
    icon: "🔧",
    options: ["Leak detection & repair", "Tap installation", "Drain unclogging", "Pipe installations", "Toilet repairs"],
  },
  {
    id: "hvac",
    title: "HVAC Services",
    subtitle: "Keep Your Cool",
    description: "Professional A/C installation & repair",
    icon: "❄️",
    options: ["A/C installation", "Servicing & maintenance", "Gas refill", "Fault diagnosis", "Thermostat setup"],
  },
  {
    id: "electrical",
    title: "Electrical Services",
    subtitle: "Safe & Skilled Solutions",
    description: "Complete electrical installations and repairs",
    icon: "⚡",
    options: ["Socket repair", "Light installation", "Switch replacement", "Circuit breaker", "Home rewiring"],
  },
  {
    id: "carpentry",
    title: "Carpentry Services",
    subtitle: "Custom Woodwork & Doors",
    description: "High-quality carpentry with clean craftsmanship",
    icon: "🪚",
    options: ["Door installation", "Cabinet assembly", "Window framing", "Furniture repairs", "Custom fittings"],
  },
  {
    id: "painting",
    title: "Painting Services",
    subtitle: "Fresh Coats for Fresh Starts",
    description: "Professional painting for homes and offices",
    icon: "🎨",
    options: ["Interior painting", "Exterior painting", "Touch-up services", "Ceiling painting", "Waterproof coating"],
  },
  {
    id: "tiling",
    title: "Tiling Services",
    subtitle: "Perfect Tiles, Flawlessly Installed",
    description: "Precision tile installation and repairs",
    icon: "🧱",
    options: ["Floor tiling", "Wall tiling", "Bathroom/kitchen", "Tile replacement", "Grouting & sealing"],
  },
  {
    id: "cleaning",
    title: "Cleaning Services",
    subtitle: "Spotless Spaces, Stress-Free Living",
    description: "Deep cleaning and maintenance services",
    icon: "✨",
    options: ["Home cleaning", "Office cleaning", "Post-construction", "Move-in/move-out", "Surface cleaning"],
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">MANITAS GHANA</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 animate-fade-in">Professional Services for Homes & Businesses</p>
          <Button size="lg" onClick={() => navigate("/booking")} className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-elegant animate-fade-in">Book a Service Now</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">Choose from our range of professional services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="p-6 hover:shadow-elegant transition-smooth">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-accent font-semibold mb-2">{service.subtitle}</p>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.options.slice(0, 3).map((option, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => navigate("/booking")} className="w-full">Book Now</Button>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg shadow-card p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Manitas Ghana?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-muted-foreground">Same-day service available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👷</div>
              <h3 className="text-xl font-bold mb-2">Skilled Professionals</h3>
              <p className="text-muted-foreground">Certified technicians</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Affordable Rates</h3>
              <p className="text-muted-foreground">Transparent pricing</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 justify-center md:justify-start"><Phone className="h-4 w-4" /><span>+233 53 027 8640</span></div>
                <div className="flex items-center gap-2 justify-center md:justify-start"><Mail className="h-4 w-4" /><span>info@manitasghana.com</span></div>
                <div className="flex items-center gap-2 justify-center md:justify-start"><MapPin className="h-4 w-4" /><span>Accra, Ghana</span></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2"><li>Plumbing</li><li>HVAC</li><li>Electrical</li><li>Carpentry</li></ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
              <p>Monday - Saturday</p><p>8:00 AM - 6:00 PM</p><p className="mt-4 text-sm opacity-75">Emergency services 24/7</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center"><p>&copy; 2025 Manitas Ghana. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
