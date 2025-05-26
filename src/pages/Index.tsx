
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, TrendingUp, Shield, Globe } from 'lucide-react';

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
      icon: <TrendingUp className="w-8 h-8 text-[#FFD700]" />,
      title: "Real-Time Market Prices",
      description: "Get instant SMS/web alerts with verified market data by produce and region"
    },
    {
      icon: <Users className="w-8 h-8 text-[#FFD700]" />,
      title: "Direct Buyer Matching",
      description: "Connect directly with verified buyers, local markets, and aggregators"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FFD700]" />,
      title: "Verified Buyers Only",
      description: "All buyers are rated and verified to ensure fair pricing and reliable transactions"
    },
    {
      icon: <Globe className="w-8 h-8 text-[#FFD700]" />,
      title: "Multilingual Support",
      description: "Available in English, Swahili, and local dialects for inclusive access"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#228B22] to-[#32CD32] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              🌾 Market Match
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-yellow-200">
              Smart Harvest, Smart Sales – The Market Match Way
            </p>
            <p className="text-lg md:text-xl mb-8 font-semibold">
              Digitize. Connect. Prosper.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-lg md:text-xl italic">
                "I harvested a thousand cabbages... but no market, and brokers want them at throwaway prices."
              </p>
              <p className="mt-4 text-[#FFD700] font-semibold">
                We're solving this for 6.4M+ Kenyan farmers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-8">
              The Crisis We're Solving
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <h3 className="text-xl font-bold text-red-700 mb-4">Current Problems</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• 70%+ of produce sold to exploitative middlemen</li>
                  <li>• Ksh 150B+ lost annually to post-harvest waste</li>
                  <li>• No access to real-time market data</li>
                  <li>• 6.4M+ smallholder farmers struggling</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-[#228B22] p-6 rounded">
                <h3 className="text-xl font-bold text-[#228B22] mb-4">Our Solution</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>• AI-powered market matching</li>
                  <li>• Real-time price alerts via SMS/web</li>
                  <li>• Verified buyer network</li>
                  <li>• Multilingual platform access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-16">
              Core Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-[#FFD700]">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#228B22] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
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
      <section className="py-16 bg-gradient-to-r from-[#228B22] to-[#32CD32]" id="register">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Register Now - It's Free!
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Google Form */}
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-2xl font-bold text-[#228B22] mb-6 text-center">
                  Fill Your Details
                </h3>
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

              {/* WhatsApp Registration */}
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h3 className="text-2xl font-bold text-[#228B22] mb-6 text-center">
                  Quick WhatsApp Registration
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      County
                    </label>
                    <input
                      type="text"
                      value={formData.county}
                      onChange={(e) => handleInputChange('county', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                      placeholder="e.g., Nakuru, Kiambu, Uasin Gishu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Crops/Produce
                    </label>
                    <input
                      type="text"
                      value={formData.crops}
                      onChange={(e) => handleInputChange('crops', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                      placeholder="e.g., Maize, Tomatoes, Cabbage"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Harvest Season
                    </label>
                    <input
                      type="text"
                      value={formData.season}
                      onChange={(e) => handleInputChange('season', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                      placeholder="e.g., March-May, June-August"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Market Challenge Faced
                    </label>
                    <input
                      type="text"
                      value={formData.challenge}
                      onChange={(e) => handleInputChange('challenge', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                      placeholder="e.g., Low prices, No buyers, Post-harvest losses"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                      placeholder="+254..."
                    />
                  </div>
                  <Button
                    onClick={generateWhatsAppMessage}
                    disabled={!isFormValid()}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    📱 Register on WhatsApp
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    Click to send your details via WhatsApp to +254710654707
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-16">
              Success Stories from Kenyan Farmers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#FFD700]">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-bold text-[#228B22]">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                        <p className="text-xs text-[#FFD700] font-medium">{testimonial.produce}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-16">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#FFD700]">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#FFD700] shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#228B22] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#FFD700] font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
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
      <section className="py-16 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Vision 2030: Digitally Empowering 6.4M+ Kenyan Farmers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">📊 Sell Smarter</h3>
                <p>Data-driven planting and pricing decisions</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">💰 Earn Better</h3>
                <p>Eliminate middlemen losses through direct connections</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">🚀 Grow Faster</h3>
                <p>Verified market connections and partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#228B22] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Market Match</h3>
            <p className="text-lg mb-6">Digitize. Connect. Prosper.</p>
            <div className="flex justify-center space-x-8 text-sm">
              <span>WhatsApp: +254710654707</span>
              <span>Email: info@marketmatch.ke</span>
            </div>
            <div className="mt-8 pt-8 border-t border-green-400">
              <p className="text-sm opacity-80">
                © 2024 Market Match. Empowering Kenyan Farmers Through Technology.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
