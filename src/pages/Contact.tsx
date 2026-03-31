import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { translations } from "@/constants/translations";
import { useLanguage, t } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lang, isRTL } = useLanguage();
  const tr = translations.contact;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("handle-contact", {
        body: { name: form.name, email: form.email, phone: form.phone, message: form.message },
      });

      if (error) throw error;

      toast({
        title: t(tr.successTitle, lang),
        description: t(tr.successDesc, lang),
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: t(tr.errorTitle, lang),
        description: t(tr.errorDesc, lang),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t(tr.getInTouch, lang)}</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-secondary-foreground mt-2 mb-4">
            {t(tr.contactUs, lang)}
          </h1>
          <p className="text-secondary-foreground/60 max-w-xl mx-auto">
            {t(tr.contactDesc, lang)}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-card rounded-lg border border-border p-8">
                <h2 className="font-display text-xl font-bold text-foreground mb-6">{t(tr.sendMessage, lang)}</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t(tr.fullName, lang)}</label>
                      <Input
                        required
                        maxLength={200}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={t(tr.namePlaceholder, lang)}
                        disabled={isSubmitting}
                        dir={isRTL ? "rtl" : "ltr"}
                        className={isRTL ? "text-right" : "text-left"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t(tr.email, lang)}</label>
                      <Input
                        type="email"
                        required
                        maxLength={255}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={t(tr.emailPlaceholder, lang)}
                        disabled={isSubmitting}
                        dir={isRTL ? "rtl" : "ltr"}
                        className={isRTL ? "text-right" : "text-left"}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t(tr.phone, lang)}</label>
                    <Input
                      value={form.phone}
                      maxLength={30}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder={t(tr.phonePlaceholder, lang)}
                      disabled={isSubmitting}
                      dir={isRTL ? "rtl" : "ltr"}
                      className={isRTL ? "text-right" : "text-left"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t(tr.message, lang)}</label>
                    <Textarea
                      required
                      rows={5}
                      maxLength={5000}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t(tr.messagePlaceholder, lang)}
                      disabled={isSubmitting}
                      dir={isRTL ? "rtl" : "ltr"}
                      className={isRTL ? "text-right" : "text-left"}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>{t(tr.sending, lang)} <Loader2 size={16} className="animate-spin" /></>
                    ) : (
                      <>{t(tr.send, lang)} <Send size={16} /></>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-2" delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-bold text-foreground mb-4">{t(tr.contactInfo, lang)}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 gradient-orange rounded-md flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{t(tr.emailLabel, lang)}</p>
                        <p className="text-sm text-muted-foreground">creativeparkisrael@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 gradient-orange rounded-md flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{t(tr.phoneLabel, lang)}</p>
                        <p className="text-sm text-muted-foreground">+972 50-874-9988 / +972 52-698-3065</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 gradient-orange rounded-md flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{t(tr.addressLabel, lang)}</p>
                        <p className="text-sm text-muted-foreground">Creative Parking Ltd.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg border border-border p-6">
                  <h4 className="font-display font-bold text-foreground mb-2">{t(tr.businessHours, lang)}</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{t(tr.monFri, lang)}</p>
                    <p>{t(tr.sat, lang)}</p>
                    <p>{t(tr.sun, lang)}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
