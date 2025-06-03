
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const AgriculturePricesCarousel = () => {
  const agriculturalItems = [
    {
      emoji: '🥔',
      name: 'Irish Potatoes',
      price: 'Ksh 2,500',
      unit: 'per 90kg sack'
    },
    {
      emoji: '🌽',
      name: 'Maize',
      price: 'Ksh 3,200',
      unit: 'per 90kg sack'
    },
    {
      emoji: '🍌',
      name: 'Bananas',
      price: 'Ksh 500',
      unit: 'per bunch'
    },
    {
      emoji: '🥭',
      name: 'Mangoes',
      price: 'Ksh 800',
      unit: 'per crate'
    },
    {
      emoji: '🥬',
      name: 'Sukuma Wiki',
      price: 'Ksh 30',
      unit: 'per bunch'
    },
    {
      emoji: '🐔',
      name: 'Indigenous Chicken',
      price: 'Ksh 700',
      unit: 'each'
    },
    {
      emoji: '🐄',
      name: 'Cow',
      price: 'Ksh 45,000',
      unit: '(mature dairy)'
    },
    {
      emoji: '🐐',
      name: 'Goat',
      price: 'Ksh 8,000',
      unit: 'each'
    },
    {
      emoji: '🍯',
      name: 'Raw Honey',
      price: 'Ksh 800',
      unit: 'per litre'
    },
    {
      emoji: '🥛',
      name: 'Fresh Milk',
      price: 'Ksh 60',
      unit: 'per litre'
    },
    {
      emoji: '🌱',
      name: 'Certified Maize Seeds',
      price: 'Ksh 350',
      unit: 'per kg'
    },
    {
      emoji: '🌿',
      name: 'Organic Fertilizer',
      price: 'Ksh 1,800',
      unit: 'per 50kg bag'
    },
    {
      emoji: '💧',
      name: 'Drip Kit',
      price: 'Ksh 12,000',
      unit: '(1/8 acre setup)'
    },
    {
      emoji: '🌾',
      name: 'Dairy Meal',
      price: 'Ksh 2,000',
      unit: 'per 70kg bag'
    },
    {
      emoji: '📱',
      name: 'Weather SMS Alerts',
      price: 'Ksh 150',
      unit: '/month'
    },
    {
      emoji: '🛍️',
      name: 'Farm Packaging Bags',
      price: 'Ksh 20',
      unit: 'each'
    },
    {
      emoji: '🧪',
      name: 'Soil Testing Kit',
      price: 'Ksh 3,500',
      unit: 'per kit'
    },
    {
      emoji: '🐷',
      name: 'Piglet',
      price: 'Ksh 3,000',
      unit: 'each'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-4">
            🌾 Current Market Prices
          </h2>
          <p className="text-lg text-corporate-gray max-w-2xl mx-auto">
            Real-time agricultural commodity prices across Kenya
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {agriculturalItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:scale-105">
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="text-4xl mb-3">{item.emoji}</div>
                        <h3 className="font-bold text-corporate-navy text-lg mb-2 leading-tight">
                          {item.name}
                        </h3>
                      </div>
                      <div className="mt-auto">
                        <div className="text-2xl font-bold text-corporate-gold mb-1">
                          {item.price}
                        </div>
                        <div className="text-sm text-corporate-gray font-medium">
                          {item.unit}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-corporate-gray">
            💡 <strong>Tip:</strong> Swipe left/right to view more items • Prices updated daily
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgriculturePricesCarousel;
