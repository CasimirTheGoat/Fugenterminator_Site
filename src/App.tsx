import React from 'react';
import { Phone, MessageCircle, Mail, Check, Star, MapPin, Clock, Shield, Users, Menu, X } from 'lucide-react';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import AGB from './components/AGB';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = React.useState(false);
  const [activeModal, setActiveModal] = React.useState<'impressum' | 'datenschutz' | 'agb' | null>(null);
  const [selectedTeamImage, setSelectedTeamImage] = React.useState<{name: string, image: string, role: string} | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTeamDropdown = () => {
    setIsTeamDropdownOpen(!isTeamDropdownOpen);
  };

  const teamMembers = [
    {
      name: "Eric Siegenthaler", 
      role: "Geschäftsführer",
      phone: "+41 79 733 32 02",
      image: "/images/portrait_eric.png",
      details: "Geschäftsführer mit langjähriger Erfahrung im Fugenbereich. Spezialist für professionelle Silikonfugen und Fugensanierung."
    },
    {
      name: "Yves Siegenthaler",
      role: "Geschäftsführer", 
      phone: "+41 76 465 07 10",
      image: "/images/portrait_yves.png",
      details: "Geschäftsführer und Experte für Brandschutzfugen und komplexe Abdichtungen im gewerblichen Bereich."
    },
    {
      name: "André Siegenthaler",
      role: "Geschäftsführer & Gründer",
      phone: "+41 78 878 80 60",
      image: "/images/portrait_andre.png",
      details: "Gründer mit 25 Jahren Berufserfahrung im Abdichtungssektor. Gelernter Sanitär-Installateur und Experte für alle Fugenarten."
    },
    {
      name: "Gabriela Haudenschild",
      role: "Administration & Geschäftsinhaberin",
      phone: "+41 79 931 16 91",
      image: "/images/portrait_gabriela.png",
      details: "Gelernte Kauffrau EFZ. Verantwortlich für Administration, Kundenbetreuung und Geschäftsabwicklung."
    },
    {
      name: "Raul Esteban Andrade",
      role: "Fugenspezialist",
      phone: "+41 78 248 64 46",
      image: "/images/portrait_raoul.png",
      details: "Erfahrener Fugenspezialist mit technischem Hintergrund. Experte für präzise Fugenarbeiten und komplexe Projekte."
    },
    {
      name: "Vanessa Spreng",
      role: "Fugenspezialistin & Social Media",
      phone: "+41 78 240 39 09",
      image: "/images/portrait_vanessa.png",
      details: "Fugenspezialistin mit Fokus auf Detailarbeiten. Zusätzlich verantwortlich für Social Media und Kundenkommunikation."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src="/main_logo-crop.png" 
                alt="Fugenterminator Logo" 
                className="h-10 md:h-12"
              />
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('leistungen')}
                className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
              >
                Leistungen
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
              >
                Bewertungen
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition-colors duration-300 font-medium"
              >
                Kontakt
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <button 
                onClick={() => scrollToSection('leistungen')}
                className="block w-full text-left px-3 py-3 text-text-secondary hover:text-primary hover:bg-bg-primary transition-colors duration-300 font-medium rounded-lg"
              >
                Leistungen
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left px-3 py-3 text-text-secondary hover:text-primary hover:bg-bg-primary transition-colors duration-300 font-medium rounded-lg"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-3 py-3 text-text-secondary hover:text-primary hover:bg-bg-primary transition-colors duration-300 font-medium rounded-lg"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-3 text-text-secondary hover:text-primary hover:bg-bg-primary transition-colors duration-300 font-medium rounded-lg"
              >
                Bewertungen
              </button>
              <button 
                onClick={scrollToContact}
                className="block w-full text-left px-3 py-3 bg-primary text-white hover:bg-primary-hover transition-colors duration-300 font-medium rounded-lg mt-2"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-card to-bg-primary"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%232F6F8F%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="mb-6 min-[390px]:block hidden">
              <img 
                src="/main_logo-min.png" 
                alt="Fugenterminator Logo" 
                className="h-24 md:h-36 lg:h-44 mx-auto"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Perfekte <span className="text-brand-red">Kittfugen</span><br />
            für Ihr Zuhause oder Geschäft
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed max-w-3xl mx-auto">
            Eine Berner Familie – Ihr Partner für perfekte Kittfugen seit über 20 Jahren.
          </p>
          
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center px-10 py-5 bg-primary text-white text-xl font-bold rounded-xl hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            Jetzt kostenloses Angebot
            <Phone className="ml-3 w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Unsere <span className="text-brand-red">Leistungen</span> – präzise und langlebig
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2 md:flex md:flex-col md:items-start">
                <div className="text-3xl mr-3 md:mr-0 md:mb-4">🛁</div>
                <h3 className="text-lg font-bold text-text-primary">Silikonfugen</h3>
              </div>
              <p className="text-text-secondary text-sm mt-2">Wasserdichte Abdichtung für Badezimmer und Küchen</p>
            </div>
            
            <div className="bg-bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2 md:flex md:flex-col md:items-start">
                <div className="text-3xl mr-3 md:mr-0 md:mb-4">🪟</div>
                <h3 className="text-lg font-bold text-text-primary">Acrylfugen</h3>
              </div>
              <p className="text-text-secondary text-sm mt-2">Perfekte Fugen für Fenster und Wände</p>
            </div>
            
            <div className="bg-bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2 md:flex md:flex-col md:items-start">
                <div className="text-3xl mr-3 md:mr-0 md:mb-4">🔄</div>
                <h3 className="text-lg font-bold text-text-primary">Fugensanierung</h3>
              </div>
              <p className="text-text-secondary text-sm mt-2">Alte Fugen erneuert, wie neu</p>
            </div>
            
            <div className="bg-bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2 md:flex md:flex-col md:items-start">
                <div className="text-3xl mr-3 md:mr-0 md:mb-4">🛡️</div>
                <h3 className="text-lg font-bold text-text-primary">Brandschutzfugen</h3>
              </div>
              <p className="text-text-secondary text-sm mt-2">Sicherheit für Gewerbe und Industrie</p>
            </div>
            
            <div className="bg-bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2 md:flex md:flex-col md:items-start">
                <div className="text-3xl mr-3 md:mr-0 md:mb-4">💧</div>
                <h3 className="text-lg font-bold text-text-primary">Flüssigkunststoff</h3>
              </div>
              <p className="text-text-secondary text-sm mt-2">Moderne Lösungen für spezielle Anforderungen</p>
            </div>
            
            <div className="bg-bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2 md:flex md:flex-col md:items-start">
                <div className="text-3xl mr-3 md:mr-0 md:mb-4">🏠</div>
                <h3 className="text-lg font-bold text-text-primary">Wand- & Deckendämmung</h3>
              </div>
              <p className="text-text-secondary text-sm mt-2">Energieeffizienz und Komfort</p>
            </div>
            
            <div className="bg-bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2 md:flex md:flex-col md:items-start">
                <div className="text-3xl mr-3 md:mr-0 md:mb-4">🧱</div>
                <h3 className="text-lg font-bold text-text-primary">Kundenmaurerarbeiten</h3>
              </div>
              <p className="text-text-secondary text-sm mt-2">Maßgeschneiderte Lösungen für Ihr Projekt</p>
            </div>
            
            <div className="bg-bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2 md:flex md:flex-col md:items-start">
                <div className="text-3xl mr-3 md:mr-0 md:mb-4">🛠️</div>
                <h3 className="text-lg font-bold text-text-primary">Weitere Montagen & Abdichtungen</h3>
              </div>
              <p className="text-text-secondary text-sm mt-2">Alles, was Ihre Immobilie braucht</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section id="benefits" className="py-20 px-4 bg-bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Warum <span className="text-brand-red">Fugenterminator</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 border-2 border-primary rounded-full mb-6 group-hover:bg-primary transition-all duration-300">
                <Check className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Saubere und langlebige Fugen</h3>
              <p className="text-text-secondary">Professionelle Arbeit mit hochwertigen Materialien</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 border-2 border-primary rounded-full mb-6 group-hover:bg-primary transition-all duration-300">
                <MapPin className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kostenloses Vor-Ort-Angebot</h3>
              <p className="text-text-secondary">Unverbindliche Beratung direkt bei Ihnen</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 border-2 border-primary rounded-full mb-6 group-hover:bg-primary transition-all duration-300">
                <Clock className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Termine, auch abends</h3>
              <p className="text-text-secondary">Wir passen uns Ihrem Zeitplan an</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 border-2 border-primary rounded-full mb-6 group-hover:bg-primary transition-all duration-300">
                <Shield className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">5 Jahre Garantie</h3>
              <p className="text-text-secondary">Langfristige Sicherheit für Ihre Investition</p>
            </div>
          </div>
        </div>
        
        {/* Mobile CTA after Benefits */}
        <div className="text-center mt-12 md:hidden">
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            Jetzt kostenloses Angebot
            <Phone className="ml-3 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Ihre Experten: <span className="text-brand-red">Eric & Yves Siegenthaler</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed text-center max-w-3xl mx-auto mb-12">
            Eric und Yves, unsere nächste Generation von Führungskräften, sind gelernte Maurer und führen eine Familientradition des Handwerks fort. Zusammen mit unserem eingespielten Team bringen sie Fachwissen, Zuverlässigkeit und eine persönliche Note in jedes Projekt in der Region Bern.
          </p>
          
          <div className="text-center mb-12">
            <img 
              src="/images/team_photo.png" 
              alt="Fugenterminator Team - Eric & Yves Siegenthaler mit Team"
              className="w-full max-w-2xl mx-auto rounded-xl shadow-lg border border-border"
            />
          </div>
          
          <div className="text-center">
            <button 
              onClick={toggleTeamDropdown}
              className="inline-flex items-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
            >
              {isTeamDropdownOpen ? 'Team ausblenden' : 'Unser ganzes Team kennenlernen'}
              <Users className="ml-3 w-6 h-6" />
            </button>
          </div>
          
          {/* Team Members Dropdown */}
          {isTeamDropdownOpen && (
            <div className="mt-12 animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-center mb-4">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/20 object-cover cursor-pointer hover:border-primary transition-all duration-300 transform hover:scale-105"
                        onClick={() => setSelectedTeamImage({name: member.name, image: member.image, role: member.role})}
                      />
                      <h3 className="text-xl font-bold text-text-primary mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                    </div>
                    
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {member.details}
                    </p>
                    
                    <div className="border-t border-border pt-4">
                      <a 
                        href={`tel:${member.phone}`}
                        className="flex items-center justify-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {member.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Unsere <span className="text-brand-red">Arbeit</span> spricht für sich
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="group relative overflow-hidden rounded-xl bg-bg-card aspect-[4/3] border border-border shadow-lg">
              <img 
                src="/client_images/bathroom.webp" 
                alt="Badezimmer Silikonfugen"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg mb-1">Badezimmer</h3>
                <p className="text-sm text-white/80">Silikonfugen erneuert, wasserdicht und sauber</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-bg-card aspect-[4/3] border border-border shadow-lg">
              <img 
                src="/client_images/kitchen.webp" 
                alt="Küche Arbeitsplatten"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg mb-1">Küche</h3>
                <p className="text-sm text-white/80">Arbeitsplatten perfekt abgedichtet</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-bg-card aspect-[4/3] border border-border shadow-lg">
              <img 
                src="/client_images/window.webp" 
                alt="Fenster Acrylfugen"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg mb-1">Fenster</h3>
                <p className="text-sm text-white/80">Acrylfugen für dauerhafte Dichtigkeit</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-bg-card aspect-[4/3] border border-border shadow-lg">
              <img 
                src="/client_images/shower.webp" 
                alt="Dusche Abdichtung"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg mb-1">Dusche</h3>
                <p className="text-sm text-white/80">Schimmelfreie, professionelle Abdichtung</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-bg-card aspect-[4/3] border border-border shadow-lg">
              <img 
                src="/client_images/industrial.webp" 
                alt="Gewerbe Abdichtung"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg mb-1">Gewerbe</h3>
                <p className="text-sm text-white/80">Langlebige Lösungen für gewerbliche Räume</p>
              </div>
            </div>
            
            {/* Client Photo Submission Tile */}
            <div className="bg-bg-card rounded-xl border border-border shadow-lg aspect-[4/3] flex flex-col justify-center items-center p-4 text-center hover:shadow-xl transition-all duration-300">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-base font-bold mb-2 text-text-primary">
                Haben Sie Fotos Ihrer <span className="text-brand-red">Fugenterminator</span>-Arbeit?
              </h3>
              <p className="text-text-secondary mb-3 text-xs">
                Senden Sie uns Ihre Fotos und helfen Sie anderen Kunden, unsere Qualität zu sehen.
              </p>
              <a 
                href="mailto:info@fugenterminator.ch?subject=Fotos%20meiner%20Fugenterminator-Arbeit&body=Hallo%20Fugenterminator-Team,%0A%0AIch%20möchte%20gerne%20Fotos%20meiner%20Fugenarbeit%20mit%20Ihnen%20teilen.%0A%0AMit%20freundlichen%20Grüßen"
                className="inline-flex items-center px-3 py-2 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary-hover transition-all duration-300"
              >
                <Mail className="w-3 h-3 mr-1" />
                Fotos per E-Mail senden
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile CTA after Gallery */}
        <div className="text-center mt-12 md:hidden">
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            Überzeugt? Jetzt Angebot anfordern
            <Phone className="ml-3 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Was unsere <span className="text-brand-red">Kunden</span> sagen
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-border shadow-lg relative">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-red fill-current" />
                ))}
              </div>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                "Schnell, sauber und professionell. Die Fugen in unserem Bad sehen perfekt aus und sind nach 2 Jahren immer noch wie neu."
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-text-primary">Familie Müller</p>
                <p className="text-text-muted text-sm">Bern</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-border shadow-lg relative">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-red fill-current" />
                ))}
              </div>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                "Sehr zufrieden mit der Arbeit. Pünktlich, faire Preise und das Ergebnis überzeugt. Gerne wieder!"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-text-primary">Thomas Weber</p>
                <p className="text-text-muted text-sm">Thun</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-border shadow-lg relative">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-red fill-current" />
                ))}
              </div>
              <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                "Endlich jemand, der sein Handwerk versteht. Die Küchenfugen waren eine Herausforderung, aber das Resultat ist top."
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-text-primary">Sandra Zimmermann</p>
                <p className="text-text-muted text-sm">Burgdorf</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/maps/place/Fugen+Terminator+GmbH/@46.9485,7.4504561,17z/data=!4m18!1m9!3m8!1s0x478e39c38144d007:0x740c0d22602e433f!2sFugen+Terminator+GmbH!8m2!3d46.9486086!4d7.4503888!9m1!1b1!16s%2Fg%2F1ptyk1qj0!3m7!1s0x478e39c38144d007:0x740c0d22602e433f!8m2!3d46.9486086!4d7.4503888!9m1!1b1!16s%2Fg%2F1ptyk1qj0?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
            >
              <Star className="w-5 h-5 mr-3" />
              Alle Bewertungen auf Google ansehen
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-bg-primary relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-text-primary">
            <span className="text-brand-red">Kontaktieren</span> Sie uns
          </h2>
          
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Wir arbeiten in der ganzen Region Bern. Sie erreichen uns per Telefon, WhatsApp oder E-Mail.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a 
              href="tel:+41788788060"
              className="flex flex-col items-center p-8 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">Jetzt anrufen</h3>
              <p className="text-text-secondary">+41 78 878 80 60</p>
            </a>
            
            <a 
              href="https://wa.me/41764650710"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">WhatsApp schreiben</h3>
              <p className="text-text-secondary">Direkte Nachricht</p>
            </a>
            
            <a 
              href="mailto:info@fugenterminator.ch"
              className="flex flex-col items-center p-8 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary">E-Mail senden</h3>
              <p className="text-text-secondary">info@fugenterminator.ch</p>
            </a>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl border border-border max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-text-primary">Oder schreiben Sie uns direkt</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Ihr Name"
                  className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-border-focus transition-colors duration-300"
                />
                <input 
                  type="tel" 
                  placeholder="Telefonnummer"
                  className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-border-focus transition-colors duration-300"
                />
              </div>
              <input 
                type="email" 
                placeholder="E-Mail Adresse"
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-border-focus transition-colors duration-300"
              />
              <textarea 
                rows={4}
                placeholder="Beschreiben Sie Ihr Projekt..."
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-border-focus transition-colors duration-300 resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full py-4 bg-primary text-white text-lg font-bold rounded-lg hover:bg-primary-hover transition-colors duration-300"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-bg-card border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img 
              src="/main_logo-min.png" 
              alt="Fugenterminator Logo" 
              className="h-20 md:h-24 mx-auto"
            />
          </div>
          <p className="text-text-secondary mb-4">
            © 2025 Fugenterminator | Alle Rechte vorbehalten
          </p>
          <div className="flex justify-center space-x-8 text-sm text-text-muted">
            <button 
              onClick={() => setActiveModal('impressum')}
              className="hover:text-brand-red transition-colors duration-300"
            >
              Impressum
            </button>
            <button 
              onClick={() => setActiveModal('datenschutz')}
              className="hover:text-brand-red transition-colors duration-300"
            >
              Datenschutz
            </button>
            <button 
              onClick={() => setActiveModal('agb')}
              className="hover:text-brand-red transition-colors duration-300"
            >
              AGB
            </button>
          </div>
        </div>
      </footer>
      
      {/* Modals */}
      {activeModal === 'impressum' && <Impressum onClose={() => setActiveModal(null)} />}
      {activeModal === 'datenschutz' && <Datenschutz onClose={() => setActiveModal(null)} />}
      {activeModal === 'agb' && <AGB onClose={() => setActiveModal(null)} />}
      
      {/* Team Image Modal */}
      {selectedTeamImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedTeamImage(null)}>
          <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedTeamImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white rounded-xl overflow-hidden">
              <img 
                src={selectedTeamImage.image} 
                alt={`${selectedTeamImage.name} - ${selectedTeamImage.role}`}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{selectedTeamImage.name}</h3>
                <p className="text-primary font-medium text-lg">{selectedTeamImage.role}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;