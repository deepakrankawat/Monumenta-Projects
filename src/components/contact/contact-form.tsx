"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "../ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  organisation: z.string().min(1, { message: "Please select an organisation type." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  projectLocation: z.string().min(2, { message: "Please enter a project location." }),
  siteType: z.string().min(1, { message: "Please select a site type." }),
  scope: z.string().min(10, { message: "Please provide a brief description of the scope." }),
});

export function ContactForm() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            organisation: "",
            email: "",
            phone: "",
            projectLocation: "",
            siteType: "",
            scope: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Enquiry Sent!",
            description: "Thank you for your interest. Our team will get back to you shortly.",
        });
        form.reset();
    }

  return (
    <Card className="p-8 md:p-12 bg-card rounded-2xl shadow-lg border border-border/50">
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary font-display">Project Enquiry Form</h2>
            <p className="text-muted-foreground mt-2">Share your project details and our team will reach out with a structured plan.</p>
        </div>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-sans">
            <div className="grid md:grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g. Vikram Singh" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="organisation"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Organisation Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your organisation type" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="ASI">ASI / Government</SelectItem>
                                <SelectItem value="Corporate">Corporate / PSU</SelectItem>
                                <SelectItem value="NGO">NGO / Trust</SelectItem>
                                <SelectItem value="Individual">Individual / Private Owner</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g. vsingh@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
             <div className="grid md:grid-cols-2 gap-6">
                 <FormField
                    control={form.control}
                    name="projectLocation"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Project Location</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g. Jaipur, Rajasthan" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="siteType"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Type of Site</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select site type" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="Temple">Temple / Religious Structure</SelectItem>
                                <SelectItem value="Haveli">Haveli / Residence</SelectItem>
                                <SelectItem value="Fort">Fort / Palace</SelectItem>
                                <SelectItem value="Stepwell">Stepwell / Water Body</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={form.control}
                name="scope"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Approximate Scope / Your Enquiry</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Briefly describe the project, its current condition, and what you hope to achieve."
                        className="resize-y min-h-[120px]"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit" size="lg" className="w-full md:w-auto h-12 px-10 text-base font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5">Submit Enquiry</Button>
        </form>
        </Form>
    </Card>
  );
}
