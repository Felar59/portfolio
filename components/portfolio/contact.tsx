"use client";
import { Github, Linkedin, Mail } from "lucide-react"
import { SectionHeader } from "./section-header"
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xojnvnzo");

  if (state.succeeded) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
        <p className="text-primary font-medium">
          Message envoyé avec succès.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Envoyer un message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Nom */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-muted-foreground font-medium">
            Nom
          </label>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="bg-secondary border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border transition-colors focus:border-transparent
              focus:bg-[linear-gradient(var(--bg-color),var(--bg-color)),linear-gradient(to_bottom_right,hsl(var(--primary)),hsl(var(--primthird)),hsl(var(--thirdary)))]
              bg-origin-border [background-clip:padding-box,border-box]"
            style={{ '--bg-color': 'hsl(var(--secondary))' } as React.CSSProperties}>
            </input>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-muted-foreground font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="votre@email.com"
            required
            className="bg-secondary border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border transition-colors focus:border-transparent
              focus:bg-[linear-gradient(var(--bg-color),var(--bg-color)),linear-gradient(to_bottom_right,hsl(var(--primary)),hsl(var(--primthird)),hsl(var(--thirdary)))]
              bg-origin-border [background-clip:padding-box,border-box]"
            style={{ '--bg-color': 'hsl(var(--secondary))' } as React.CSSProperties}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-muted-foreground font-medium">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Votre message..."
            required
            className="bg-secondary resize-none border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border transition-colors focus:border-transparent
              focus:bg-[linear-gradient(var(--bg-color),var(--bg-color)),linear-gradient(to_bottom_right,hsl(var(--primary)),hsl(var(--primthird)),hsl(var(--thirdary)))]
              bg-origin-border [background-clip:padding-box,border-box]"
            style={{ '--bg-color': 'hsl(var(--secondary))' } as React.CSSProperties}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="mt-2 bg-gradient-to-br from-primary via-primthird to-thirdary text-black/80 hover:text-black hover:brightness-110 transition-all duration-200 shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_28px_hsl(var(--thirdary)/0.4)] px-7 py-3 text-sm font-medium rounded-lg px-6 py-2.5 text-sm font-medium rounded-lg hover:brightness-110 transition-all duration-200"
        >
          Envoyer
        </button>
        {/* "inline-flex items-center gap-2 bg-gradient-to-br from-primary via-primthird to-thirdary text-black/80 hover:text-black px-7 py-3 text-sm font-medium rounded-lg hover:brightness-110 transition-all duration-200 shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_28px_hsl(var(--thirdary)/0.4)]" */}
      </form>
    </div>
  );
}


const socials = [
  {
    label: "Email",
    value: "felixlecuyer2@gmail.com",
    href: "mailto:felixlecuyer2@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Felar59",
    href: "https://github.com/Felar59",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/felixlecuyer",
    href: "https://www.linkedin.com/in/felix-lecuyer-09a64039a/",
    icon: Linkedin,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader number="04" title="contact" color="hsl(var(--thirdary))"/>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed">
              {"Pour toute demande, projet ou collaboration, vous pouvez me contacter via ce formulaire ou les plateformes ci-dessous."}
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5 text-primthird" />
                  <div className="flex flex-col">
                    <span className="text-xs text-primthird font-medium">{social.label}</span>
                    <span className="text-sm">{social.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
