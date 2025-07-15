"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { Globe, Building2, Mail, ChevronDown, Check } from "lucide-react"

type Language = "en" | "de" | "sv"

const translations = {
  en: {
    title: "Free Website Review",
    subtitle: "Get a quick assessment of your website's potential improvements",

    // Form fields
    companyName: "Business Name",
    website: "Website URL",
    contactName: "Your Name",
    email: "Email Address",

    mainIssue: "What website challenges are you facing? (Select all that apply)",
    issueOptions: {
      outdated: "Looks outdated",
      slow: "Loads too slowly",
      mobile: "Not mobile-friendly",
      leads: "Not getting enough leads",
      competitors: "Competitors look better",
      seo: "Poor search rankings",
      content: "Hard to update content",
      other: "Other issues",
    },

    consent: "I'm interested in learning more about website improvements",
    submitButton: "Get My Free Review",
    submitNote: "No spam, just helpful insights",
    required: "*",
    selectChallenges: "Select your challenges",
  },

  de: {
    title: "Kostenlose Website-Bewertung",
    subtitle: "Erhalten Sie eine schnelle Einschätzung der Verbesserungsmöglichkeiten Ihrer Website",

    companyName: "Firmenname",
    website: "Website-URL",
    contactName: "Ihr Name",
    email: "E-Mail-Adresse",

    mainIssue: "Welche Website-Herausforderungen haben Sie? (Alle zutreffenden auswählen)",
    issueOptions: {
      outdated: "Sieht veraltet aus",
      slow: "Lädt zu langsam",
      mobile: "Nicht mobilfreundlich",
      leads: "Zu wenig Anfragen",
      competitors: "Konkurrenten sehen besser aus",
      seo: "Schlechte Suchmaschinenplatzierung",
      content: "Schwer zu aktualisierender Inhalt",
      other: "Andere Probleme",
    },

    consent: "Ich bin interessiert, mehr über Website-Verbesserungen zu erfahren",
    submitButton: "Meine kostenlose Bewertung erhalten",
    submitNote: "Kein Spam, nur hilfreiche Einblicke",
    required: "*",
    selectChallenges: "Wählen Sie Ihre Herausforderungen",
  },

  sv: {
    title: "Gratis Webbplats-granskning",
    subtitle: "Få en snabb bedömning av din webbplats förbättringsmöjligheter",

    companyName: "Företagsnamn",
    website: "Webbplats-URL",
    contactName: "Ditt Namn",
    email: "E-postadress",

    mainIssue: "Vilka webbplatsutmaningar står du inför? (Välj alla som gäller)",
    issueOptions: {
      outdated: "Ser föråldrad ut",
      slow: "Laddar för långsamt",
      mobile: "Inte mobilvänlig",
      leads: "Får inte tillräckligt med leads",
      competitors: "Konkurrenter ser bättre ut",
      seo: "Dålig sökmotorrankning",
      content: "Svårt att uppdatera innehåll",
      other: "Andra problem",
    },

    consent: "Jag är intresserad av att lära mig mer om webbplatsförbättringar",
    submitButton: "Få Min Gratis Granskning",
    submitNote: "Ingen spam, bara hjälpsamma insikter",
    required: "*",
    selectChallenges: "Välj dina utmaningar",
  },
}

interface MultiSelectProps {
  options: Record<string, string>
  selectedValues: string[]
  onChange: (values: string[]) => void
  placeholder: string
}

function MultiSelect({ options, selectedValues, onChange, placeholder }: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Calculate position for the dropdown
  const updatePosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  // Handle opening the dropdown
  const handleButtonClick = () => {
    if (!isOpen) {
      updatePosition();
    }
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Recalculate position on scroll or resize
    const handleScrollOrResize = () => {
      if (isOpen) {
        updatePosition();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScrollOrResize, true);
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScrollOrResize, true);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [isOpen]);

  const toggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) {
      return <span className="text-gray-500">{placeholder}</span>;
    }
    
    if (selectedValues.length === 1) {
      return (
        <span className="text-gray-900 truncate">
          {options[selectedValues[0]]}
        </span>
      );
    }
    
    return (
      <div className="flex flex-wrap gap-1">
        {selectedValues.slice(0, 2).map((value) => (
          <span 
            key={value} 
            className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full whitespace-nowrap"
          >
            {options[value]}
          </span>
        ))}
        {selectedValues.length > 2 && (
          <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
            +{selectedValues.length - 2} more
          </span>
        )}
      </div>
    );
  };

  // Create portal for the dropdown
  const DropdownContent = () => {
    if (!isOpen) return null;

    // Calculate available space
    const viewportHeight = window.innerHeight;
    const buttonRect = buttonRef.current?.getBoundingClientRect();
    if (!buttonRect) return null;

    const spaceBelow = viewportHeight - buttonRect.bottom - 10;
    const spaceAbove = buttonRect.top - 10;
    const itemHeight = 40; // Height of each item (36px content + 2px padding)
    const padding = 8; // 4px top + 4px bottom
    const maxDropdownHeight = itemHeight * 8 + padding; // Height for 8 items + padding
    
    // Determine if we need to show above or below
    const showAbove = spaceBelow < maxDropdownHeight && spaceAbove > spaceBelow;
    const availableHeight = showAbove ? spaceAbove - 20 : spaceBelow - 20;
    
    // Always show all items, but limit to viewport height
    const dropdownHeight = Math.min(
      maxDropdownHeight,
      availableHeight,
      viewportHeight - 40 // Leave some margin from top/bottom
    );
    
    // Calculate position
    const top = showAbove 
      ? `${buttonRect.top - dropdownHeight - 4}px`
      : `${buttonRect.bottom + 4}px`;
    
    const dropdownStyle: React.CSSProperties = {
      position: 'fixed',
      left: `${buttonRect.left}px`,
      width: `${buttonRect.width}px`,
      top: showAbove ? 'auto' : top,
      bottom: showAbove ? `${window.innerHeight - buttonRect.top + 4}px` : 'auto',
      maxHeight: `${dropdownHeight}px`,
      zIndex: 50,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderRadius: '0.375rem',
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
    };

    const contentStyle: React.CSSProperties = {
      maxHeight: '100%',
      overflowY: 'auto',
      padding: '4px 0',
      WebkitOverflowScrolling: 'touch',
      overscrollBehavior: 'contain',
      scrollbarWidth: 'thin',
      scrollbarColor: '#cbd5e0 #f7fafc',
      msOverflowStyle: 'none',
    };

    // Add scrollbar styles to the document
    useEffect(() => {
      const style = document.createElement('style');
      style.textContent = `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
      `;
      document.head.appendChild(style);
      
      // Return cleanup function with proper type
      return (): void => {
        document.head.removeChild(style);
      };
    }, []);

    return createPortal(
      <div 
        ref={dropdownRef}
        style={dropdownStyle}
        onWheel={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="custom-scrollbar" style={contentStyle}>
          {Object.entries(options).map(([value, label]) => (
            <div
              key={value}
              onClick={() => toggleOption(value)}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-50 flex items-center justify-between ${
                selectedValues.includes(value) ? 'bg-blue-50' : ''
              }`}
              style={{
                minHeight: `${itemHeight}px`,
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                padding: '8px 12px',
              }}
            >
              <span className="text-gray-900 text-sm">{label}</span>
              {selectedValues.includes(value) && (
                <Check className="h-4 w-4 text-blue-600 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className="relative w-full">
      <button
        ref={buttonRef}
        type="button"
        onClick={handleButtonClick}
        className="w-full min-h-[42px] px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
      >
        <div className="flex-1 pr-2 overflow-hidden">
          {getDisplayText()}
        </div>
        <ChevronDown 
          className={`h-4 w-4 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <DropdownContent />
    </div>
  )
}

export default function WebsiteReviewForm() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en")
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([])
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const t = translations[currentLanguage]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const formValues: Record<string, FormDataEntryValue | string[]> = {}
    
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      formValues[key] = value
    })
    
    // Add selected challenges to form values
    formValues.challenges = [...selectedChallenges]

    // Handle form submission here
    console.log("Form submitted:", formValues)

    // You can add your form submission logic here
    // For example: send to API endpoint, email service, etc.
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-xl mx-auto">
        {/* Language Selector */}
        <div className="mb-6 flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md border-0 p-3">
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-blue-600" />
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="w-[140px] px-3 py-1 text-left bg-transparent border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    {currentLanguage === "en" && (
                      <>
                        <span className="text-sm">🇺🇸</span>
                        <span className="text-sm">English</span>
                      </>
                    )}
                    {currentLanguage === "de" && (
                      <>
                        <span className="text-sm">🇩🇪</span>
                        <span className="text-sm">Deutsch</span>
                      </>
                    )}
                    {currentLanguage === "sv" && (
                      <>
                        <span className="text-sm">🇸🇪</span>
                        <span className="text-sm">Svenska</span>
                      </>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-3 w-3 text-gray-400 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isLanguageOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[140px] bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentLanguage("en")
                        setIsLanguageOpen(false)
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-sm">🇺🇸</span>
                      <span className="text-sm">English</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentLanguage("de")
                        setIsLanguageOpen(false)
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-sm">🇩🇪</span>
                      <span className="text-sm">Deutsch</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentLanguage("sv")
                        setIsLanguageOpen(false)
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-sm">🇸🇪</span>
                      <span className="text-sm">Svenska</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-xl border-0 overflow-hidden">
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-8">
            <h1 className="text-2xl font-bold mb-2">{t.title}</h1>
            <p className="text-blue-100">{t.subtitle}</p>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    {t.companyName} {t.required}
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder={
                        currentLanguage === "en"
                          ? "Your Business"
                          : currentLanguage === "de"
                            ? "Ihr Unternehmen"
                            : "Ditt Företag"
                      }
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                    {t.website} {t.required}
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="yoursite.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                    {t.contactName} {t.required}
                  </label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t.email} {t.required}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Multi-select Challenges */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">{t.mainIssue}</label>
                <MultiSelect
                  options={t.issueOptions}
                  selectedValues={selectedChallenges}
                  onChange={setSelectedChallenges}
                  placeholder={t.selectChallenges}
                />
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-2 pt-2">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="consent" className="text-sm leading-relaxed text-gray-700">
                  {t.consent} {t.required}
                </label>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-3 px-4 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {t.submitButton}
                </button>
                <p className="text-center text-xs text-gray-500 mt-2">{t.submitNote}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
