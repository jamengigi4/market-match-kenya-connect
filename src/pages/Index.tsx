import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, TrendingUp, Shield, Globe, BarChart3, Zap, Award, Bell, UserCheck, MessageSquare, Brain } from 'lucide-react';
import AgriculturePricesCarousel from '@/components/AgriculturePricesCarousel';
import PriceScrollBar from '@/components/PriceScrollBar';
import ProtectedImage from '@/components/ProtectedImage';
import { useImageProtection } from '@/hooks/useImageProtection';

const Index = () => {
  // Enable image protection globally
  useImageProtection();

  const [formData, setFormData] = useState({
    fullName: '',
    county: '',
    crops: '',
    season: '',
    challenge: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const message = `🧑 Farmer Registration – Market Match  
📛 Name: ${formData.fullName}  
📍 County: ${formData.county}  
🌾 Produce: ${formData.crops}  
📅 Season: ${formData.season}  
❗ Challenge: ${formData.challenge}  
📞 Phone: ${formData.phone}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254710654707?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const testimonials = [
    {
      name: "Mary Wanjiku",
      location: "Murang'a County",
      quote: "Before Market Match, I used to throw away my tomatoes. Now I get buyer alerts and sell everything fresh!",
      produce: "Tomatoes"
    },
    {
      name: "Daniel Kiprono",
      location: "Uasin Gishu",
      quote: "I matched with a maize buyer within 2 days. No more brokers messing me up!",
      produce: "Maize"
    },
    {
      name: "Akinyi Atieno",
      location: "Kisumu",
      quote: "I never thought tech could help me farm better. This app is in Luo too – very easy to use!",
      produce: "Fish"
    },
    {
      name: "John Mwangi",
      location: "Nakuru",
      quote: "I receive SMS alerts on prices daily. I now decide when to sell – not buyers.",
      produce: "Potatoes"
    },
    {
      name: "Peter Ndegwa",
      location: "Laikipia",
      quote: "The dashboard helped me track demand. I made 3x more this cabbage season.",
      produce: "Cabbage"
    },
    {
      name: "Jane Wambui",
      location: "Nyandarua",
      quote: "I used to rely on middlemen. Now, verified buyers call me first!",
      produce: "Vegetables"
    }
  ];

  const teamMembers = [
    {
      name: "Felix M. Muriuki",
      role: "Chief Visionary",
      image: "/lovable-uploads/1626ee0f-a961-4e6b-b116-a988d78caf24.png",
      description: "Leading the vision to digitally transform Kenyan agriculture"
    },
    {
      name: "Nancy Karimi",
      role: "UI/UX Designer",
      image: "/lovable-uploads/cf34fc34-7ec5-4742-85ca-1a1c87e92e3e.png",
      description: "Creating farmer-first designs built with real rural feedback"
    },
    {
      name: "Amos Kiplagat",
      role: "Frontend Developer",
      image: "/lovable-uploads/51859994-cfc7-4c03-9eed-dc1d4143f066.png",
      description: "Building responsive, inclusive tech solutions for farmers"
    }
  ];

  const howItWorks = [
    {
      icon: <Bell className="w-10 h-10 text-corporate-gold" />,
      title: "Real-Time Alerts",
      description: "Stay updated with accurate, regional price info delivered instantly to your phone"
    },
    {
      icon: <UserCheck className="w-10 h-10 text-corporate-gold" />,
      title: "Verified Buyers",
      description: "Connect with trustworthy buyers directly - no middlemen taking your profits"
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-corporate-gold" />,
      title: "Easy Access",
      description: "Multilingual, SMS-based platform that works even on basic phones"
    },
    {
      icon: <Brain className="w-10 h-10 text-corporate-gold" />,
      title: "AI Matching",
      description: "Smart location and demand tracking for optimal sales opportunities"
    }
  ];

  const stats = [
    { number: "6.4M+", label: "Farmers Empowered" },
    { number: "Ksh 150B+", label: "Annual Losses Reduced" },
    { number: "98%", label: "Mobile Reach" },
    { number: "40%+", label: "Loss Reduction Potential" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - now using ProtectedImage */}
            <div className="flex items-center space-x-3">
              <ProtectedImage 
                src="/lovable-uploads/788e8564-4d22-4aa5-ac63-279c7d1961d6.png" 
                alt="Agritech Team Innovators" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-corporate-navy">Market Match</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-corporate-navy hover:text-corporate-gold font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-corporate-navy hover:text-corporate-gold font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('features')} className="text-corporate-navy hover:text-corporate-gold font-medium transition-colors">Features</button>
              <button onClick={() => scrollToSection('farmers')} className="text-corporate-navy hover:text-corporate-gold font-medium transition-colors">Farmers</button>
              <button onClick={() => scrollToSection('buyers')} className="text-corporate-navy hover:text-corporate-gold font-medium transition-colors">Buyers</button>
              <button onClick={() => scrollToSection('contact')} className="text-corporate-navy hover:text-corporate-gold font-medium transition-colors">Contact</button>
            </nav>

            {/* CTA Button */}
            <Button 
              onClick={() => scrollToSection('register')}
              className="corporate-gold-gradient text-corporate-navy font-semibold hover:shadow-lg transition-all"
            >
              Join Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden corporate-gradient min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-corporate-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in">
              {/* Price Scroll Bar - positioned directly above the main headline */}
              <PriceScrollBar />
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Market Match — Empowering Kenyan Farmers to 
                <span className="block text-corporate-gold">Sell Smarter, Earn Better, and Grow Faster</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-light">
                Digitizing Access to Markets for Every Kenyan Farmer with Real-Time Price Alerts, Verified Buyers & AI-Powered Matching
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="corporate-gold-gradient text-corporate-navy font-semibold px-8 py-4 text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection('register')}
                >
                  Join as a Farmer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
                  onClick={() => scrollToSection('about')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section id="about" className="py-20 bg-corporate-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-8">
                  From Farm to Market — Transforming Lives and Livelihoods
                </h2>
                <div className="prose prose-lg text-corporate-gray">
                  <p className="mb-6">
                    Meet Jane from Kisumu, a smallholder farmer who once struggled to sell her cabbage at a fair price. She spent days chasing middlemen who offered unfair rates, losing much of her hard work to spoilage and waste.
                  </p>
                  <p className="mb-6">
                    Today, thanks to Market Match, Jane receives real-time market prices right on her phone, connects with verified buyers nearby, and plans her harvest knowing exactly where to sell.
                  </p>
                  <p className="mb-6">
                    Market Match is not just a tech platform—it's a movement restoring dignity, trust, and prosperity to over 6 million Kenyan farmers. By bridging the gap between farms and markets with cutting-edge AI and accessible technology, we reduce losses by up to 40% and empower farmers like Jane to thrive.
                  </p>
                  <p className="font-semibold text-corporate-navy">
                    Join us as we revolutionize agriculture in Kenya, one farmer at a time.
                  </p>
                </div>
              </div>
              <div className="relative animate-slide-up">
                <div className="glass-effect rounded-2xl p-8 bg-white/90">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-corporate-navy mb-2">{stat.number}</div>
                        <div className="text-sm text-corporate-gray">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-6">
                How It Works
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Simple, powerful tools designed to transform how Kenyan farmers access markets
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((feature, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center h-full">
                    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-corporate-navy mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-corporate-gray text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture Prices Carousel Section */}
      <AgriculturePricesCarousel />

      {/* Registration Section */}
      <section className="py-20 bg-gradient-to-br from-corporate-navy via-corporate-blue to-corporate-navy" id="register">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to sell smarter and grow your farm?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Join Market Match today and transform your farming business
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Google Form */}
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-corporate-gold to-yellow-400 p-6">
                    <h3 className="text-2xl font-bold text-corporate-navy text-center">
                      Professional Registration
                    </h3>
                  </div>
                  <div className="p-6">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdT3C9FU-B3xREIRUr1EywlNtiELtkiSL0O3YOv7_IgR_cwew/viewform?embedded=true"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      className="rounded"
                    >
                      Loading…
                    </iframe>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Registration */}
              <Card className="border-0 shadow-2xl" id="farmers">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-corporate-gold to-yellow-400 p-6">
                    <h3 className="text-2xl font-bold text-corporate-navy text-center">
                      Register Now on WhatsApp
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-corporate-navy mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-gold focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-corporate-navy mb-3">
                        County
                      </label>
                      <input
                        type="text"
                        value={formData.county}
                        onChange={(e) => handleInputChange('county', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-gold focus:border-transparent transition-all duration-300"
                        placeholder="e.g., Nakuru, Kiambu, Uasin Gishu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-corporate-navy mb-3">
                        Type of Crops/Produce
                      </label>
                      <input
                        type="text"
                        value={formData.crops}
                        onChange={(e) => handleInputChange('crops', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-gold focus:border-transparent transition-all duration-300"
                        placeholder="e.g., Maize, Tomatoes, Cabbage"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-corporate-navy mb-3">
                        Harvest Season
                      </label>
                      <input
                        type="text"
                        value={formData.season}
                        onChange={(e) => handleInputChange('season', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-gold focus:border-transparent transition-all duration-300"
                        placeholder="e.g., March-May, June-August"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-corporate-navy mb-3">
                        Market Challenge Faced
                      </label>
                      <input
                        type="text"
                        value={formData.challenge}
                        onChange={(e) => handleInputChange('challenge', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-gold focus:border-transparent transition-all duration-300"
                        placeholder="e.g., Low prices, No buyers, Post-harvest losses"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-corporate-navy mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-corporate-gold focus:border-transparent transition-all duration-300"
                        placeholder="+254..."
                      />
                    </div>
                    <Button
                      onClick={generateWhatsAppMessage}
                      disabled={!isFormValid()}
                      className="w-full corporate-gold-gradient text-corporate-navy py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300"
                    >
                      📱 Register Now on WhatsApp
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-sm text-corporate-gray text-center">
                      Instant access via WhatsApp to +254710654707
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="buyers" className="py-20 bg-corporate-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Real transformation stories from Kenyan farmers using Market Match
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 corporate-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-corporate-navy text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-corporate-gray">{testimonial.location}</p>
                        <p className="text-xs text-corporate-gold font-semibold mt-1">{testimonial.produce}</p>
                      </div>
                    </div>
                    <p className="text-corporate-gray italic leading-relaxed">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Updated to use ProtectedImage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Visionary leaders driving agricultural transformation across Kenya
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-corporate-gold shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <ProtectedImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-corporate-navy mb-2">
                      {member.name}
                    </h3>
                    <p className="text-corporate-gold font-semibold mb-4 text-lg">
                      {member.role}
                    </p>
                    <p className="text-corporate-gray leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section className="py-20 corporate-gold-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-8">
              Vision 2030: Digital Agriculture Leadership
            </h2>
            <p className="text-xl text-corporate-navy/80 mb-12 max-w-3xl mx-auto">
              Positioning Kenya as Africa's agricultural technology hub through intelligent market solutions
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 corporate-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-navy mb-4">Data-Driven Decisions</h3>
                  <p className="text-corporate-gray">AI-powered analytics for optimal planting, pricing, and market timing strategies</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 corporate-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-navy mb-4">Premium Returns</h3>
                  <p className="text-corporate-gray">Eliminate intermediary losses through direct buyer connections and fair pricing</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 corporate-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-navy mb-4">Market Expansion</h3>
                  <p className="text-corporate-gray">Access regional and international markets through verified partnership networks</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Updated to use ProtectedImage */}
      <footer id="contact" className="corporate-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <ProtectedImage 
                    src="/lovable-uploads/788e8564-4d22-4aa5-ac63-279c7d1961d6.png" 
                    alt="Agritech Team Innovators" 
                    className="h-12 w-auto"
                  />
                  <h3 className="text-3xl font-bold">Market Match</h3>
                </div>
                <p className="text-xl text-white/80 mb-6">Digitize. Connect. Prosper.</p>
                <p className="text-white/70 leading-relaxed">
                  Kenya's premier agricultural marketplace connecting farmers to verified buyers through intelligent technology solutions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-white/70">
                  <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
                  <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button></li>
                  <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button></li>
                  <li><button onClick={() => scrollToSection('register')} className="hover:text-white transition-colors">Register</button></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-white/70">
                  <p>WhatsApp: +254710654707</p>
                  <p>Email: info@marketmatch.ke</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-white/60">
                © 2024 Market Match. Transforming Kenyan Agriculture Through Technology.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
