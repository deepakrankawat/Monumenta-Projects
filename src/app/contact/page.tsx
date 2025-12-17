import { ContactForm } from "@/components/contact/contact-form";
import { ContactHeader } from "@/components/contact/contact-header";
import { ContactInfo } from "@/components/contact/contact-info";
import { Container } from "@/components/container";

export default function ContactPage() {
  return (
    <div className="bg-background pt-24">
      <ContactHeader />
      <Container className="py-24">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </Container>
    </div>
  );
}
