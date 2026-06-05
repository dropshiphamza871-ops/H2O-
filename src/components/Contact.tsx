import React, { useState } from 'react';
import { FAQS_DATA } from '../data';
import { Mail, Phone, MapPin, Send, MessageSquareCode, PhoneCall, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Query', message: '' });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('General');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const faqCategories = ['General', 'Membership', 'Classes', 'Branches'];

  const filteredFaqs = FAQS_DATA.filter(f => f.category === activeFaqCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.message.trim()) {
      setFormSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', subject: 'General Query', message: '' });
    setFormSubmitted(false);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="h2o-contact" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto pb-16">
          <span className="text-xs uppercase font-extrabold tracking-[6px] text-[#00AEEF] font-mono">CONNECT WITH SPORTS BLUEPRINTS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 uppercase tracking-tight">
            Athlete <span className="text-[#00AEEF]">Support & Inquiry Desk</span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base font-light leading-relaxed">
            Have a specialized corporate inquiry or desire physical site consultations? Use our channels to secure physical booking fast.
          </p>
        </div>

        {/* Content Split: Form and Support Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form Block */}
          <div className="lg:col-span-7 bg-slate-900/30 border border-slate-900 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00AEEF]/5 blur-2xl rounded-full" />

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#00AEEF] font-black uppercase">SECURE MESSAGE INBOX</span>
                  <h3 className="text-xl font-bold uppercase mt-1">Send a direct message</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-350 mb-1.5">Athlete Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Sherif El-Sawy"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 focus:border-[#00AEEF] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-355 mb-1.5">WhatsApp / Mobile *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+20 100 456 7890"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 focus:border-[#00AEEF] text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-350 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="sherif@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 focus:border-[#00AEEF] text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-350 mb-1.5">Inquiry Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 focus:border-[#00AEEF] text-white text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="General Query">General Membership & Prices</option>
                    <option value="Personal Coaching">Private Personal Coach Request</option>
                    <option value="Corporate Partnerships">Corporate Corporate wellness deal</option>
                    <option value="Feedback / Complaints">Gym Facilities Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-350 mb-1.5">Your Message Brief *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Detail your request and preferred gym compound location here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 focus:border-[#00AEEF] text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#003B5C] hover:from-[#00AEEF] text-xs font-black uppercase text-white tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/20"
                >
                  <Send className="w-4 h-4" />
                  Transmit Message To H2O Advisors
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <MessageSquareCode className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-[4px] font-extrabold text-[#00AEEF]">ADVISORS NOTIFIED</span>
                  <h3 className="text-2xl font-black text-white mt-1">DUMMY INBOX CONNECTED</h3>
                  <p className="text-xs text-slate-400 mt-2 font-light">
                    Your message from <strong className="text-white">{formData.name}</strong> regarding <strong className="text-white">"{formData.subject}"</strong> has successfully locked in our system queue.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-850 rounded-2xl max-w-md mx-auto text-left text-xs font-light text-slate-300 leading-relaxed">
                  "Thank you for contacting H2O Gym Egypt. Our back-office team will prioritize WhatsApp routing to <strong>{formData.phone}</strong>. A membership specialist from our headquarters will follow up within 30 minutes. Stay hydrated and resilient!"
                </div>

                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-850 text-xs font-bold text-white uppercase cursor-pointer"
                >
                  Message Again
                </button>
              </div>
            )}
          </div>

          {/* Right FAQs Accordions Desk */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Details */}
            <div className="p-6 rounded-3xl bg-slate-905 border border-slate-900 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 text-[#00AEEF] border border-slate-850">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest">Immediate 24/7 Hotline</h4>
                  <p className="text-lg font-black text-white mt-0.5">19420 (Consolidated)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 text-[#00AEEF] border border-slate-850">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest">Official Email support</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">info@h2o-gym.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 text-[#4dceff] border border-slate-850">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest">Main Egypt Head Office</h4>
                  <p className="text-xs text-slate-305 mt-0.5 leading-relaxed">Waterway Commercial Boulevard, Office B-24, New Cairo, Egypt</p>
                </div>
              </div>
            </div>

            {/* Interactive FAQs accordion */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-[#00AEEF]" />
                <h3 className="text-[13px] uppercase font-mono tracking-widest font-black text-slate-205">Self-Service Help desk (FAQs)</h3>
              </div>

              {/* Accordion selectors */}
              <div className="flex flex-wrap gap-1 bg-slate-900/50 p-1 rounded-2xl border border-slate-850 mb-4 justify-between">
                {faqCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveFaqCategory(cat);
                      setOpenFaqId(null);
                    }}
                    className={`flex-1 min-w-[70px] text-center py-2 rounded-xl text-[10px] font-bold uppercase transition-all cursor-pointer ${
                      activeFaqCategory === cat
                        ? 'bg-[#00AEEF] text-slate-950 font-black'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Accordion Questions */}
              <div className="space-y-3">
                {filteredFaqs.map(faq => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      onClick={() => toggleFaq(faq.id)}
                      className={`p-4 rounded-2xl bg-slate-900/40 border transition-all cursor-pointer ${
                        isOpen ? 'border-[#00AEEF]/60' : 'border-slate-905 hover:border-slate-800'
                      }`}
                    >
                      <div className="flex justify-between items-center gap-3">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-tight text-[#f2f2f2]">{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#00AEEF]" /> : <ChevronDown className="w-4 h-4 text-slate-600" />}
                      </div>

                      {isOpen && (
                        <p className="text-xs text-slate-400 mt-3 border-t border-slate-850 pt-3 leading-relaxed font-light animate-[fadeIn_0.2s_ease-out]">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
