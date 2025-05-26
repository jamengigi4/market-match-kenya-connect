
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, TrendingUp, Shield, Globe, BarChart3, Zap, Award } from 'lucide-react';

const Index = () => {
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

  const features = [
    {
      icon: <BarChart3 className="w-10 h-10 text-corporate-gold" />,
      title: "Real-Time Market Intelligence",
      description: "Advanced analytics and verified market data delivered instantly via SMS and web platforms"
    },
    {
      icon: <Users className="w-10 h-10 text-corporate-gold" />,
      title: "Direct Buyer Network",
      description: "Connect with verified buyers, exporters, and institutional purchasers through our premium platform"
    },
    {
      icon: <Shield className="w-10 h-10 text-corporate-gold" />,
      title: "Verified Transactions",
      description: "Enterprise-grade security with rated and verified buyers ensuring reliable, fair-priced transactions"
    },
    {
      icon: <Globe className="w-10 h-10 text-corporate-gold" />,
      title: "Multilingual Platform",
      description: "Seamless access in English, Swahili, and local dialects with AI-powered communication tools"
    }
  ];

  const stats = [
    { number: "6.4M+", label: "Farmers Reached", icon: <Users className="w-8 h-8" /> },
    { number: "Ksh 150B+", label: "Waste Prevented", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "70%", label: "Price Improvement", icon: <BarChart3 className="w-8 h-8" /> },
    { number: "24/7", label: "Market Access", icon: <Zap className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden corporate-gradient min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-corporate-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2 text-corporate-gold" />
                Billion-Shilling Agritech Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Market 
                <span className="block text-corporate-gold">Match</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
                Smart Harvest, Smart Sales
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Enterprise-grade digital marketplace connecting 6.4M+ Kenyan farmers to verified buyers through AI-powered market intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="corporate-gold-gradient text-corporate-navy font-semibold px-8 py-4 text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="glass-effect rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-3 text-corporate-gold">
                        {stat.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-corporate-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-6">
                Transforming Agricultural Markets
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Addressing Kenya's Ksh 150B+ annual post-harvest losses through intelligent market connections
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="hover-lift border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="text-red-600 mb-4">
                    <TrendingUp className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-navy mb-6">Current Crisis</h3>
                  <ul className="space-y-4 text-corporate-gray">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>70%+ of produce sold to exploitative middlemen at below-market rates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Ksh 150B+ lost annually to post-harvest waste and poor pricing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Limited access to real-time market intelligence and buyer networks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>6.4M+ smallholder farmers struggling with market access</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover-lift border-0 shadow-xl bg-gradient-to-br from-corporate-navy to-corporate-blue text-white">
                <CardContent className="p-8">
                  <div className="text-corporate-gold mb-4">
                    <Shield className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Our Innovation</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-corporate-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>AI-powered market matching with predictive analytics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-corporate-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Real-time price intelligence via SMS and web platforms</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-corporate-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Verified enterprise buyer network with transaction security</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-corporate-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Multilingual platform supporting local dialects</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-6">
                Platform Capabilities
              </h2>
              <p className="text-xl text-corporate-gray max-w-3xl mx-auto">
                Enterprise-grade features designed for scalable agricultural transformation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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

      {/* Registration Section */}
      <section className="py-20 bg-gradient-to-br from-corporate-navy via-corporate-blue to-corporate-navy" id="register">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join the Revolution
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Register now for exclusive access to Kenya's most advanced agricultural marketplace
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
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-green-600 to-green-500 p-6">
                    <h3 className="text-2xl font-bold text-white text-center">
                      Quick WhatsApp Access
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
                      📱 Connect on WhatsApp
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
      <section className="py-20 bg-corporate-light-gray">
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

      {/* Team Section */}
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
                      <img
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

      {/* Footer */}
      <footer className="corporate-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold mb-4">Market Match</h3>
                <p className="text-xl text-white/80 mb-6">Digitize. Connect. Prosper.</p>
                <p className="text-white/70 leading-relaxed">
                  Kenya's premier agricultural marketplace connecting farmers to verified buyers through intelligent technology solutions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-white/70">
                  <li>Market Intelligence</li>
                  <li>Buyer Network</li>
                  <li>Price Analytics</li>
                  <li>Mobile Access</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
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
