import React from 'react';
import { ArrowLeft, Shield, Eye, Lock } from 'lucide-react';

interface DatenschutzProps {
  onClose: () => void;
}

export default function Datenschutz({ onClose }: DatenschutzProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-border p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text-primary">Datenschutzerklärung</h2>
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
              <Shield className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-text-primary">Datenschutz bei fugen TERMINATOR GmbH</h3>
            </div>
            <p className="text-text-secondary">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen 
              Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften der Schweiz.
            </p>
          </div>
          
          <div className="space-y-6">
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center">
                <Eye className="w-5 h-5 text-primary mr-2" />
                Datenerfassung auf unserer Website
              </h4>
              <div className="space-y-3 text-text-secondary">
                <p>
                  <strong>Kontaktformular:</strong> Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, 
                  werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  <strong>Telefon und E-Mail:</strong> Wenn Sie uns per Telefon oder E-Mail kontaktieren, 
                  speichern wir Ihre Anfrage und Kontaktdaten zur Bearbeitung und für eventuelle Rückfragen.
                </p>
              </div>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">Zweck der Datenverarbeitung</h4>
              <ul className="space-y-2 text-text-secondary list-disc list-inside">
                <li>Bearbeitung Ihrer Anfragen und Aufträge</li>
                <li>Erstellung von Kostenvoranschlägen</li>
                <li>Durchführung von Bauprojekten</li>
                <li>Rechnungsstellung und Buchhaltung</li>
                <li>Kundenkommunikation und -betreuung</li>
              </ul>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center">
                <Lock className="w-5 h-5 text-primary mr-2" />
                Datensicherheit
              </h4>
              <p className="text-text-secondary">
                Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten 
                gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, 
                Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
              </p>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">Ihre Rechte</h4>
              <div className="space-y-3 text-text-secondary">
                <p>Sie haben jederzeit das Recht auf:</p>
                <ul className="space-y-1 list-disc list-inside ml-4">
                  <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer bei uns gespeicherten Daten</li>
                  <li>Einschränkung der Datenverarbeitung</li>
                  <li>Widerspruch gegen die Verarbeitung</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">Speicherdauer</h4>
              <p className="text-text-secondary">
                Wir speichern Ihre Daten nur so lange, wie es für die Erfüllung der Zwecke erforderlich ist, 
                für die sie erhoben wurden, oder solange gesetzliche Aufbewahrungsfristen bestehen.
              </p>
            </section>
            
            <section>
              <h4 className="text-lg font-bold text-text-primary mb-3">Kontakt</h4>
              <div className="bg-bg-card p-4 rounded-lg">
                <p className="text-text-secondary mb-2">
                  Bei Fragen zum Datenschutz kontaktieren Sie uns:
                </p>
                <p className="text-text-primary font-medium">fugen TERMINATOR GmbH</p>
                <p className="text-text-secondary">Siegenthaler André</p>
                <p className="text-text-secondary">Postgasse 42, 3000 Bern 8</p>
                <p className="text-text-secondary">
                  E-Mail: <a href="mailto:info@fugenterminator.ch" className="text-primary hover:underline">info@fugenterminator.ch</a>
                </p>
                <p className="text-text-secondary">
                  Telefon: <a href="tel:+41788788060" className="text-primary hover:underline">+41 78 878 80 60</a>
                </p>
              </div>
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