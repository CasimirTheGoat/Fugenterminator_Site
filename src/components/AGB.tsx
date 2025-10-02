import React from 'react';
import { ArrowLeft, FileText, AlertCircle, CheckCircle } from 'lucide-react';

interface AGBProps {
  onClose: () => void;
}

export default function AGB({ onClose }: AGBProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-border p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text-primary">Allgemeine Geschäftsbedingungen</h2>
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
          <div className="bg-bg-card p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-text-primary">AGB der fugen TERMINATOR GmbH</h3>
            </div>
            <p className="text-text-secondary">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der 
              fugen TERMINATOR GmbH und ihren Kunden.
            </p>
          </div>
          
          <div className="space-y-6">
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">§ 1 Geltungsbereich</h4>
              <p className="text-text-secondary">
                Diese AGB gelten für alle Leistungen der fugen TERMINATOR GmbH, insbesondere für 
                Fugenarbeiten, Abdichtungen und verwandte Bauleistungen. Abweichende Bedingungen 
                des Kunden werden nur wirksam, wenn sie schriftlich vereinbart wurden.
              </p>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">§ 2 Angebot und Vertragsschluss</h4>
              <div className="space-y-3 text-text-secondary">
                <p>
                  Unsere Angebote sind freibleibend und unverbindlich. Der Vertrag kommt durch 
                  schriftliche Auftragsbestätigung oder Beginn der Arbeiten zustande.
                </p>
                <p>
                  Kostenvoranschläge sind grundsätzlich kostenlos, sofern nicht anders vereinbart.
                </p>
              </div>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-2" />
                § 3 Leistungsumfang und Ausführung
              </h4>
              <div className="space-y-3 text-text-secondary">
                <p>
                  Wir führen alle Arbeiten fachgerecht und nach den anerkannten Regeln der Technik aus. 
                  Der Leistungsumfang ergibt sich aus der Auftragsbestätigung.
                </p>
                <p>
                  Änderungen oder Zusatzarbeiten bedürfen der schriftlichen Vereinbarung und 
                  werden gesondert berechnet.
                </p>
                <p>
                  <strong>Garantie:</strong> Wir gewähren 5 Jahre Garantie auf unsere Fugenarbeiten 
                  bei sachgemäßer Nutzung und normaler Beanspruchung.
                </p>
              </div>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">§ 4 Preise und Zahlungsbedingungen</h4>
              <div className="space-y-3 text-text-secondary">
                <p>
                  Alle Preise verstehen sich in Schweizer Franken inklusive der gesetzlichen Mehrwertsteuer.
                </p>
                <p>
                  <strong>Zahlungsziele:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Kleinere Arbeiten (bis CHF 1'000): Zahlung bei Fertigstellung</li>
                  <li>Größere Arbeiten: 50% Anzahlung, Rest bei Fertigstellung</li>
                  <li>Zahlungsziel: 30 Tage netto</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">§ 5 Termine und Verzug</h4>
              <div className="space-y-3 text-text-secondary">
                <p>
                  Termine sind nur dann verbindlich, wenn sie schriftlich als verbindlich bezeichnet wurden.
                </p>
                <p>
                  Bei Verzug durch höhere Gewalt, Witterungseinflüsse oder andere unvorhersehbare 
                  Umstände verlängern sich die Fristen entsprechend.
                </p>
              </div>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">§ 6 Mitwirkungspflichten des Kunden</h4>
              <div className="space-y-3 text-text-secondary">
                <p>Der Kunde stellt sicher, dass:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Die Arbeitsstelle zugänglich und beräumt ist</li>
                  <li>Strom- und Wasseranschlüsse zur Verfügung stehen</li>
                  <li>Erforderliche Genehmigungen vorliegen</li>
                  <li>Andere Gewerke rechtzeitig fertiggestellt sind</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center">
                <AlertCircle className="w-5 h-5 text-warning mr-2" />
                § 7 Haftung und Gewährleistung
              </h4>
              <div className="space-y-3 text-text-secondary">
                <p>
                  Wir haften für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. 
                  Die Haftung ist auf die Auftragssumme begrenzt.
                </p>
                <p>
                  Mängel sind unverzüglich nach Entdeckung schriftlich zu rügen. 
                  Wir beseitigen berechtigte Mängel kostenlos.
                </p>
                <p>
                  Die Gewährleistungsfrist beträgt 2 Jahre ab Abnahme, soweit nicht 
                  eine längere Garantie gewährt wird.
                </p>
              </div>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">§ 8 Eigentumsvorbehalt</h4>
              <p className="text-text-secondary">
                Gelieferte Materialien bleiben bis zur vollständigen Bezahlung unser Eigentum.
              </p>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">§ 9 Gerichtsstand und anwendbares Recht</h4>
              <div className="space-y-3 text-text-secondary">
                <p>
                  Es gilt schweizerisches Recht unter Ausschluss des UN-Kaufrechts.
                </p>
                <p>
                  Gerichtsstand ist Bern, Schweiz.
                </p>
              </div>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">§ 10 Salvatorische Klausel</h4>
              <p className="text-text-secondary">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die 
                Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </section>
            
            <section className="bg-bg-card p-4 rounded-lg">
              <h4 className="text-lg font-bold text-text-primary mb-3">Kontakt</h4>
              <p className="text-text-primary font-medium">fugen TERMINATOR GmbH</p>
              <p className="text-text-secondary">Siegenthaler André</p>
              <p className="text-text-secondary">Postgasse 42, 3000 Bern 8</p>
              <p className="text-text-secondary">
                E-Mail: <a href="mailto:info@fugenterminator.ch" className="text-primary hover:underline">info@fugenterminator.ch</a>
              </p>
              <p className="text-text-secondary">
                Telefon: <a href="tel:+41788788060" className="text-primary hover:underline">+41 78 878 80 60</a>
              </p>
            </section>
            
            <section className="text-sm text-text-muted">
              <p>Stand: Januar 2025</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}