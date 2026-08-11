import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact-panel">
        <div>
          <span className="kicker">Contact / partnerships / programs</span>
          <h1>Start with what you want to move.</h1>
          <p>Tell us the field, community, opportunity or partnership you are working on. We will route the conversation to the most relevant part of YOCED.</p>
        </div>
        <div className="contact-details">
          <a className="contact-link" href="mailto:yoced.ke@gmail.com"><span><Mail size={18} /> &nbsp; yoced.ke@gmail.com</span><ArrowUpRight size={19} /></a>
          <a className="contact-link" href="tel:+254726647052"><span><Phone size={18} /> &nbsp; +254 726 647052</span><ArrowUpRight size={19} /></a>
          <div className="contact-link"><span><MapPin size={18} /> &nbsp; Nairobi, Kenya</span></div>
        </div>
      </section>
    </PageShell>
  );
}
