import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

interface ImpressumProps {
  onClose: () => void;
}

export default function Impressum({ onClose }: ImpressumProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-border p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text-primary">Impressum</h2>
            <button 
              onClick={onClose}
              className="flex items-center px-4 py-2 text-text-secondary hover:text-primary transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="text-center">
            <img 
              src="/main_logo-min.png" 
              alt="Fugenterminator Logo" 
              className="h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-brand-red mb-2">fugen TERMINATOR GmbH</h3>
          </div>
          
          <div className="bg-bg-card p-6 rounded-lg">
            <h4 className="text-lg font-bold text-text-primary mb-4">Geschäftsführung & Kontakt</h4>
            <div className="space-y-3">
              <p className="font-medium text-text-primary">Siegenthaler André</p>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-text-secondary">Postgasse 42</p>
                  <p className="text-text-secondary">Postfach 646</p>
                  <p className="text-text-secondary">3000 Bern 8</p>
                  <p className="text-text-secondary">Schweiz</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <a 
                  href="tel:+41788788060" 
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  +41 78 878 80 60
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a 
                  href="mailto:info@fugenterminator.ch" 
                  className="text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  info@fugenterminator.ch
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-sm text-text-secondary">
            <div>
              <h4 className="font-bold text-text-primary mb-2">Handelsregister</h4>
              <p>Eingetragen im Handelsregister des Kantons Bern</p>
            </div>
            
            <div>
              <h4 className="font-bold text-text-primary mb-2">Mehrwertsteuer</h4>
              <p>MWST-pflichtig gemäß schweizerischem Recht</p>
            </div>
            
            <div>
              <h4 className="font-bold text-text-primary mb-2">Haftungsausschluss</h4>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte 
                externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}