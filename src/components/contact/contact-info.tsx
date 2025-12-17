import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Link from "next/link";

const contactDetails = [
    {
        icon: "mail",
        label: "General Enquiries",
        value: "projects@monumenta.in",
        href: "mailto:projects@monumenta.in"
    },
    {
        icon: "call",
        label: "Office Landline",
        value: "+91 141 123 4567",
        href: "tel:+911411234567"
    },
     {
        icon: "phone_android",
        label: "WhatsApp",
        value: "+91 987 654 3210",
        href: "https://wa.me/919876543210"
    }
]

export function ContactInfo() {
  return (
    <div className="space-y-8 sticky top-32">
        <Card className="p-8 bg-background border-border/50 rounded-2xl">
            <h3 className="text-2xl font-bold font-display text-primary mb-6">Direct Contacts</h3>
            <ul className="space-y-6 font-sans">
               {contactDetails.map(detail => (
                 <li key={detail.label} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent text-2xl mt-1">
                        {detail.icon}
                    </span>
                    <div>
                        <span className="text-sm text-muted-foreground">{detail.label}</span>
                        <a href={detail.href} className="block font-semibold text-foreground hover:text-primary transition-colors">{detail.value}</a>
                    </div>
                 </li>
               ))}
            </ul>
        </Card>
        <Card className="p-8 bg-background border-border/50 rounded-2xl">
            <h3 className="text-2xl font-bold font-display text-primary mb-6">Our Office</h3>
             <div className="space-y-4 font-sans mb-6">
                <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent text-2xl mt-1">
                       location_on
                    </span>
                    <div>
                        <span className="font-semibold text-foreground">123 Heritage Lane, C-Scheme,<br/>Jaipur, Rajasthan 302001</span>
                    </div>
                </div>
             </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.752392383279!2d75.7873139150361!3d26.91243398312294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4a59e1c83d6d%3A0x47b934336b4139d6!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1676882260515!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </Card>
         <Card className="p-6 bg-background border-border/50 rounded-2xl text-center">
            <h4 className="text-lg font-bold font-display text-primary mb-3">Company Profile</h4>
            <p className="text-sm text-muted-foreground mb-4">Download our detailed company profile and CSR deck.</p>
            <Button asChild>
                <Link href="#">
                    <span className="material-symbols-outlined">download</span> Download PDF
                </Link>
            </Button>
        </Card>
    </div>
  );
}
