import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, Phone, MessageCircle, MapPin, Send, Clock, 
  CreditCard, FileText, CheckCircle, ExternalLink 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "badhonroy172@gmail.com",
    href: "mailto:badhonroy172@gmail.com",
    description: "Send me an email anytime"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01783147171",
    href: "tel:01783147171",
    description: "Call me during business hours"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Quick Chat",
    href: "https://wa.me/8801783147171",
    description: "Fastest way to reach me"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mohammadpur, Dhaka 1207",
    href: "#",
    description: "Bangladesh"
  }
];

const faqs = [
  {
    question: "What's your typical response time?",
    answer: "I usually respond to emails and messages within 2-4 hours during business days. For urgent projects, WhatsApp is the fastest way to reach me."
  },
  {
    question: "How do we start a new project?",
    answer: "We begin with a discovery call to understand your requirements, then I provide a detailed proposal with timeline and costs. Once approved, we kick off with a 50% advance payment."
  },
  {
    question: "What are your payment milestones?",
    answer: "I work with a 50% advance and 50% on completion model for most projects. For larger projects, we can discuss milestone-based payments."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, I offer ongoing maintenance and support packages. This includes security updates, content updates, and technical support."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email or WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background page-enter">
      <ScrollProgress />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 left-16 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl floating-element-delayed"></div>
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-primary/3 to-portfolio-accent/3 rounded-full blur-3xl floating-element-slow"></div>
      </div>
      
      <main className="pt-16 relative z-10">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-foreground animate-heading-reveal animate-hover-glow">
              <span className="animate-text-shimmer">Let's Work Together</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto animate-slide-up font-light section-reveal px-4 sm:px-0" style={{ animationDelay: "0.3s" }}>
              Ready to bring your project to life? Get in touch and let's discuss how I can help you achieve your digital goals with cutting-edge technology and exceptional design.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 glass-card border-0 shadow-soft text-xs sm:text-sm">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                24h Response Time
              </Badge>
              <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 glass-card border-0 shadow-soft text-xs sm:text-sm">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                100+ Projects Delivered
              </Badge>
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
              {/* Contact Form */}
              <div className="section-reveal" style={{ animationDelay: "0.4s" }}>
                <Card className="glass-card border-0 shadow-xl backdrop-blur-xl overflow-hidden">
                  <CardHeader className="pb-4 sm:pb-6 p-4 sm:p-6">
                    <CardTitle className="text-2xl sm:text-3xl font-bold animate-slide-in-left">
                      Send me a message
                    </CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                      I'd love to hear about your project. Fill out the form below and I'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="form-field" style={{ animationDelay: "0.2s" }}>
                          <Label htmlFor="name" className="text-sm font-semibold">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-2 h-10 sm:h-12 border-0 bg-muted/50 focus:bg-background transition-all duration-300 text-sm sm:text-base"
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="form-field" style={{ animationDelay: "0.3s" }}>
                          <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2 h-10 sm:h-12 border-0 bg-muted/50 focus:bg-background transition-all duration-300 text-sm sm:text-base"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="form-field" style={{ animationDelay: "0.4s" }}>
                        <Label htmlFor="subject" className="text-sm font-semibold">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-10 sm:h-12 border-0 bg-muted/50 focus:bg-background transition-all duration-300 text-sm sm:text-base"
                          placeholder="Project discussion, consultation, etc."
                        />
                      </div>
                      
                      <div className="form-field" style={{ animationDelay: "0.5s" }}>
                        <Label htmlFor="message" className="text-sm font-semibold">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="mt-2 border-0 bg-muted/50 focus:bg-background transition-all duration-300 resize-none text-sm sm:text-base"
                          placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold button-ripple hover:scale-[1.02] transition-all duration-300 form-field"
                        style={{ animationDelay: "0.6s" }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-12">
                {/* Direct Contact */}
                <div className="section-reveal" style={{ animationDelay: "0.6s" }}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 animate-slide-in-right">
                    Get in touch directly
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    {contactInfo.map((info, index) => (
                      <Card 
                        key={info.label}
                        className="group card-hover-glow glass-card border-0 shadow-soft backdrop-blur-xl overflow-hidden contact-card-enter"
                        style={{ animationDelay: `${0.1 * index + 0.7}s` }}
                      >
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                          <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
                            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary/10 to-portfolio-accent/10 rounded-xl sm:rounded-2xl group-hover:from-primary/20 group-hover:to-portfolio-accent/20 transition-all duration-300 group-hover:scale-110">
                              <info.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">{info.label}</h4>
                              <p className="text-muted-foreground mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">{info.description}</p>
                              {info.href !== "#" ? (
                                <a
                                  href={info.href}
                                  target={info.href.startsWith("http") ? "_blank" : undefined}
                                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                  className="text-primary hover:text-primary-hover transition-colors font-semibold text-sm sm:text-base lg:text-lg inline-flex items-center group/link break-all"
                                >
                                  {info.value}
                                  <ExternalLink className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
                                </a>
                              ) : (
                                <span className="text-foreground font-semibold text-sm sm:text-base lg:text-lg">{info.value}</span>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="section-reveal" style={{ animationDelay: "0.8s" }}>
                  <Card className="glass-card border-primary/20 shadow-xl backdrop-blur-xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-portfolio-accent/5"></div>
                    <CardContent className="p-10 text-center relative z-10">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-portfolio-accent/20 rounded-full mb-6 animate-float">
                        <MessageCircle className="h-10 w-10 text-primary" />
                      </div>
                      <h4 className="text-2xl font-bold text-foreground mb-4">
                        Prefer to chat instantly?
                      </h4>
                      <p className="text-muted-foreground mb-8 text-lg max-w-md mx-auto leading-relaxed">
                        WhatsApp is the fastest way to get a response from me. Available 16 hours a day.
                      </p>
                      <Button variant="cta" size="lg" asChild className="w-full sm:w-auto px-8 py-4 text-lg font-semibold button-ripple hover:scale-105 transition-all duration-300">
                        <a href="https://wa.me/8801783147171" target="_blank" rel="noopener noreferrer">
                          Start WhatsApp Chat
                          <MessageCircle className="ml-3 h-6 w-6" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* FAQ */}
                <div className="section-reveal" style={{ animationDelay: "1s" }}>
                  <h3 className="text-3xl font-bold text-foreground mb-8 animate-slide-in-right">
                    Frequently Asked Questions
                  </h3>
                  <Card className="glass-card border-0 shadow-xl backdrop-blur-xl">
                    <CardContent className="p-8">
                      <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                          <AccordionItem 
                            key={index} 
                            value={`item-${index}`}
                            className="border-b border-muted/20 last:border-b-0"
                          >
                            <AccordionTrigger className="text-left hover:text-primary transition-colors py-6 text-lg font-semibold hover:no-underline">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;