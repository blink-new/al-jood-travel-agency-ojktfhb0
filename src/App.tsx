import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Plane, 
  Shield, 
  Star,
  CreditCard,
  Users,
  Calendar,
  Globe,
  CheckCircle,
  Menu,
  X,
  Banknote
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // WhatsApp booking function with owner's number
  const handleWhatsAppBooking = (service: string) => {
    const phoneNumber = '+967773462821' // Owner's WhatsApp number
    const message = `السلام عليكم، أريد حجز خدمة: ${service}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const services = [
    {
      title: 'تأشيرات السفر',
      description: 'استخراج تأشيرات لجميع الدول بسرعة وأمان',
      icon: <Globe className="w-8 h-8" />,
      features: ['تأشيرات سياحية', 'تأشيرات عمل', 'تأشيرات دراسة']
    },
    {
      title: 'حج وعمرة',
      description: 'برامج حج وعمرة مميزة مع أفضل الخدمات',
      icon: <Star className="w-8 h-8" />,
      features: ['برامج VIP', 'إقامة فاخرة', 'مرشدين متخصصين']
    },
    {
      title: 'تأشيرات عمرة',
      description: 'استخراج تأشيرات عمرة بسهولة وسرعة',
      icon: <Star className="w-8 h-8" />,
      features: ['إجراءات مبسطة', 'أسعار مناسبة', 'خدمة سريعة']
    },
    {
      title: 'رحلات يومية',
      description: 'رحلات يومية إلى محافظات السعودية واليمن',
      icon: <Plane className="w-8 h-8" />,
      features: ['مركبات مريحة', 'مرشدين سياحيين', 'أسعار مناسبة']
    },
    {
      title: 'بطاقات شخصية',
      description: 'استخراج بطاقات شخصية بسهولة وأمان',
      icon: <CreditCard className="w-8 h-8" />,
      features: ['سرعة في الإنجاز', 'أمان عالي', 'خدمة متميزة']
    },
    {
      title: 'جوازات السفر',
      description: 'استخراج وتجديد جوازات السفر',
      icon: <Shield className="w-8 h-8" />,
      features: ['إجراءات مبسطة', 'متابعة مستمرة', 'ضمان الجودة']
    },
    {
      title: 'بطاقات عائلية',
      description: 'استخراج بطاقات عائلية وخدمات الأسرة',
      icon: <Users className="w-8 h-8" />,
      features: ['خدمات شاملة', 'دعم كامل', 'أسعار تنافسية']
    },
    {
      title: 'الحوالات المالية',
      description: 'استلام وإرسال وإيداع الأموال والحوالات الخارجية والداخلية',
      icon: <Banknote className="w-8 h-8" />,
      features: ['فروع الكريمي', 'النجم', 'تضامن', 'يمن إكس برس']
    }
  ]

  const destinations = [
    { name: 'الرياض', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
    { name: 'جدة', image: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=400&h=300&fit=crop' },
    { name: 'مكة المكرمة', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop' },
    { name: 'المدينة المنورة', image: 'https://images.unsplash.com/photo-1564769625392-651b2c0e7b8b?w=400&h=300&fit=crop' },
    { name: 'صنعاء', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
    { name: 'عدن', image: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=400&h=300&fit=crop' }
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="text-2xl font-bold text-primary">وكالة الجود</div>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                للسفريات والسياحة
              </Badge>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">الرئيسية</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">الخدمات</a>
              <a href="#destinations" className="text-gray-700 hover:text-primary transition-colors">الوجهات</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">اتصل بنا</a>
              <Button 
                onClick={() => handleWhatsAppBooking('استفسار عام')}
                className="bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                واتساب
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-primary transition-colors">الرئيسية</a>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors">الخدمات</a>
                <a href="#destinations" className="text-gray-700 hover:text-primary transition-colors">الوجهات</a>
                <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">اتصل بنا</a>
                <Button 
                  onClick={() => handleWhatsAppBooking('استفسار عام')}
                  className="bg-green-600 hover:bg-green-700 w-full"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  واتساب
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Owner Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="relative">
              <img 
                src="/owner-photo.jpg" 
                alt="عبدالعزيز غوبر - مالك وكالة الجود"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                <MessageCircle className="w-4 h-4" />
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                عبدالعزيز غوبر
              </h3>
              <p className="text-primary font-semibold mb-1">مالك وكالة الجود للسفريات</p>
              <p className="text-gray-600 text-sm">متاح على واتساب لخدمتكم</p>
              <Button 
                size="sm" 
                className="mt-3 bg-green-600 hover:bg-green-700"
                onClick={() => handleWhatsAppBooking('التحدث مع المالك')}
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                تواصل مباشر
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              وكالة الجود للسفريات والسياحة
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              متعة السفر • راحة المركبات • أمان المسافر
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => handleWhatsAppBooking('حجز خدمة')}
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                احجز الآن عبر واتساب
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">أمان وثقة</h3>
              <p className="text-gray-600">خدمات آمنة ومضمونة مع أعلى معايير الجودة</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">خدمة سريعة</h3>
              <p className="text-gray-600">إنجاز المعاملات بأسرع وقت ممكن</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">خبرة واسعة</h3>
              <p className="text-gray-600">سنوات من الخبرة في مجال السفر والسياحة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا المتميزة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات السفر والسياحة والوثائق الرسمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 ml-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleWhatsAppBooking(service.title)}
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز عبر واتساب
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              وجهاتنا السياحية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              رحلات يومية إلى أجمل المحافظات في المملكة العربية السعودية والجمهورية اليمنية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-white text-gray-900">
                      {destination.name}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">
                    اكتشف جمال {destination.name} مع رحلاتنا اليومية المنظمة
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleWhatsAppBooking(`رحلة إلى ${destination.name}`)}
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    احجز رحلة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              تواصل معنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن هنا لخدمتكم على مدار الساعة
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">معلومات التواصل</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary ml-4" />
                    <div>
                      <p className="font-semibold">رقم الهاتف</p>
                      <p className="text-gray-600" dir="ltr">+967 773 462 821</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 text-green-600 ml-4" />
                    <div>
                      <p className="font-semibold">واتساب</p>
                      <p className="text-gray-600">عبدالعزيز غوبر</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-red-600 ml-4" />
                    <div>
                      <p className="font-semibold">العنوان</p>
                      <p className="text-gray-600">ذمار / صوال / محل المجاهد البطاريات</p>
                      <p className="text-sm text-gray-500">وكالة الجود للسفريات والسياحة</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleWhatsAppBooking('استفسار عام')}
                  >
                    <MessageCircle className="w-5 h-5 ml-2" />
                    تواصل عبر واتساب
                  </Button>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">ساعات العمل</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">السبت - الخميس</span>
                    <span className="text-gray-600">8:00 ص - 10:00 م</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">الجمعة</span>
                    <span className="text-gray-600">2:00 م - 10:00 م</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">الطوارئ</span>
                    <span className="text-green-600">24/7</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">خدمة العملاء</h4>
                  <p className="text-green-700 text-sm">
                    فريق خدمة العملاء متاح على واتساب لمساعدتكم في أي وقت
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">وكالة الجود</h3>
              <p className="text-white/80 mb-4">
                وكالة متخصصة في السفريات والسياحة، نقدم خدمات متميزة في استخراج التأشيرات والوثائق الرسمية
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => handleWhatsAppBooking('استفسار عام')}
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-white/80">
                <li>تأشيرات السفر</li>
                <li>حج وعمرة</li>
                <li>رحلات يومية</li>
                <li>بطاقات شخصية</li>
                <li>جوازات السفر</li>
                <li>بطاقات عائلية</li>
                <li>الحوالات المالية</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-white/80">
                <p>الهاتف: +967 773 462 821</p>
                <p>واتساب: عبدالعزيز غوبر</p>
                <p>متاح 24/7 لخدمتكم</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 وكالة الجود للسفريات والسياحة. جميع الحقوق محفوظة.</p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm">
                تصميم وتطوير: علي مقبل الفقيه | هاتف: 717480847
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App