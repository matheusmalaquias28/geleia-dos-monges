import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Package } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    // Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-white border font-body text-espresso text-base px-4 pt-6 pb-2 outline-none transition-all duration-200 ${
      focusedField === field ? 'border-burgundy-800' : 'border-cream-darker'
    }`;

  const labelClass = (field: string) =>
    `absolute left-4 transition-all duration-200 pointer-events-none font-sans text-espresso/40 ${
      focusedField === field || form[field as keyof FormState]
        ? 'top-2 text-[10px] tracking-[0.15em] uppercase text-burgundy-800/70'
        : 'top-4 text-sm'
    }`;

  return (
    <>
      {/* Header */}
      <section className="bg-espresso pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-label block mb-4">Fale Conosco</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6">
              Entre em contato
            </h1>
            <p className="font-body text-cream/60 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              Estamos prontos para atender pedidos, esclarecer dúvidas
              e conversar sobre parcerias e distribuição.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-espresso mb-8">
                  Envie uma mensagem
                </h2>
              </AnimatedSection>

              {success ? (
                <AnimatedSection>
                  <div className="bg-forest/10 border border-forest/30 text-forest p-6">
                    <p className="font-display text-xl font-semibold mb-1">Mensagem enviada!</p>
                    <p className="font-body text-base text-forest/80">Respondemos em até 2 dias úteis. Obrigado pelo contato.</p>
                    {error && (
                      <p className="mt-2 font-sans text-sm text-red-700">
                        Não foi possível enviar. Tente novamente ou entre em contato pelo telefone.
                      </p>
                    )}
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-4 font-sans text-sm underline text-forest/60 hover:text-forest transition-colors"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </AnimatedSection>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {error && (
                    <div className="border border-red-200 bg-red-50 p-4">
                      <p className="font-sans text-sm text-red-700">
                        Não foi possível enviar a mensagem. Verifique sua conexão e tente novamente, ou ligue para (12) 3662-1346.
                      </p>
                    </div>
                  )}
                  {/* Name */}
                  <AnimatedSection delay={0.05}>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={inputClass('name')}
                      />
                      <label htmlFor="name" className={labelClass('name')}>
                        Nome completo *
                      </label>
                    </div>
                  </AnimatedSection>

                  {/* Email + Phone */}
                  <AnimatedSection delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          inputMode="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={inputClass('email')}
                        />
                        <label htmlFor="email" className={labelClass('email')}>
                          E-mail *
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          inputMode="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={inputClass('phone')}
                        />
                        <label htmlFor="phone" className={labelClass('phone')}>
                          Telefone
                        </label>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Subject */}
                  <AnimatedSection delay={0.15}>
                    <div className="relative">
                      <select
                        name="subject"
                        id="subject"
                        value={form.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClass('subject')} appearance-none cursor-pointer pt-4`}
                      >
                        <option value="" disabled>Selecione o assunto</option>
                        <option value="pedido">Pedido de produtos</option>
                        <option value="distribuicao">Informações sobre distribuição</option>
                        <option value="marca-propria">Marca própria / Private label</option>
                        <option value="imprensa">Imprensa / Parcerias</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </AnimatedSection>

                  {/* Message */}
                  <AnimatedSection delay={0.2}>
                    <div className="relative">
                      <textarea
                        name="message"
                        id="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className={`${inputClass('message')} resize-none`}
                      />
                      <label htmlFor="message" className={labelClass('message')}>
                        Mensagem *
                      </label>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.25}>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <span>Enviar Mensagem</span>
                      )}
                    </button>
                    <p className="font-sans text-xs text-espresso/40 mt-3 text-center">
                      Respondemos em até 2 dias úteis.
                    </p>
                  </AnimatedSection>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="right">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-burgundy-800/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-burgundy-800" />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-[0.2em] uppercase text-espresso/40 mb-1">Endereço</p>
                      <p className="font-body text-base text-espresso/70 leading-relaxed">
                        Rod. Floriano Rodrigues Pinheiro, Km 46<br />
                        (junto ao portal da cidade)<br />
                        CEP 12460-000 — Campos do Jordão, SP
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-burgundy-800/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-burgundy-800" />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-[0.2em] uppercase text-espresso/40 mb-1">Telefone</p>
                      <a href="tel:+551236621346" className="font-body text-lg text-espresso hover:text-burgundy-800 transition-colors">
                        (12) 3662-1346
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-burgundy-800/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-burgundy-800" />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-[0.2em] uppercase text-espresso/40 mb-1">E-mail</p>
                      <a href="mailto:contato@geleiadosmonges.com.br" className="font-body text-base text-espresso hover:text-burgundy-800 transition-colors">
                        contato@geleiadosmonges.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-burgundy-800/10 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-burgundy-800" />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-[0.2em] uppercase text-espresso/40 mb-1">Horário</p>
                      <p className="font-body text-base text-espresso/70">Segunda a Sexta: 8h às 17h</p>
                      <p className="font-body text-base text-espresso/70">Sábado: 8h às 12h</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a
                      href="https://instagram.com/geleiadosmonges"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-cream-darker flex items-center justify-center text-espresso/40 hover:text-burgundy-800 hover:border-burgundy-800 transition-colors"
                      aria-label="Instagram da Geleia dos Monges"
                    >
                      <Instagram size={16} />
                    </a>
                    <a
                      href="https://facebook.com/geleiadosmonges"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-cream-darker flex items-center justify-center text-espresso/40 hover:text-burgundy-800 hover:border-burgundy-800 transition-colors"
                      aria-label="Facebook da Geleia dos Monges"
                    >
                      <Facebook size={16} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.15}>
                <div className="bg-burgundy-800 p-8">
                  <p className="font-body italic text-cream/50 text-base mb-3">Da fruta para a mesa</p>
                  <p className="font-display text-2xl font-semibold text-cream mb-4">
                    "Uma relação de compromisso."
                  </p>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-amber-warm">
                    — Geleia dos Monges, desde 1988
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-4">
          <p className="font-sans text-xs text-espresso/30 text-center mb-3 tracking-wide">
            Junto ao portal da cidade de Campos do Jordão
          </p>
        </div>
        <div className="border-t-4 border-cream-darker">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4563879899074!2d-45.5923!3d-22.7415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ0JzI5LjQiUyA0NcKwMzUnMzIuMyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Fruitland - Campos do Jordão"
          />
        </div>
      </section>

      {/* CTA Marca Própria */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 border border-espresso/10 flex items-center justify-center">
                  <Package size={24} className="text-burgundy-800" />
                </div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-espresso mb-4">
                Distribuidores e Marca Própria
              </h2>
              <p className="font-body text-espresso/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Produzimos geleias com a marca dos principais hipermercados
                brasileiros. Se você representa um varejista e tem interesse
                em nossa linha de marca própria, entre em contato via telefone
                ou e-mail — teremos prazer em conversar.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+551236621346" className="btn-primary inline-block">
                  <span>Ligar: (12) 3662-1346</span>
                </a>
                <a
                  href="mailto:contato@geleiadosmonges.com.br"
                  className="btn-outline inline-block"
                >
                  <span>Enviar E-mail</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
