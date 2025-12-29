import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Check } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  businessName: z.string().min(2, "Business name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  industry: z.string({ required_error: "Please select an industry" }),
  budget: z.string({ required_error: "Please select a budget range" }),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast({
      title: "Request Sent!",
      description: "We'll be in touch shortly to schedule your strategy call.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
          Start <span className="text-primary">Building</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Tell us about your business goals. We'll show you how to reach them.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-24 grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <div className="bg-card border border-white/5 p-8 rounded-3xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." {...field} className="bg-background/50 border-white/10" />
                      </FormControl>
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-background/50 border-white/10" />
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
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} className="bg-background/50 border-white/10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-white/10">
                            <SelectValue placeholder="Select Industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="landscaping">Landscaping</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="hvac">HVAC/Plumbing</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="law">Legal</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Budget</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50 border-white/10">
                            <SelectValue placeholder="Select Range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="starter">$200 - $500/mo</SelectItem>
                          <SelectItem value="growth">$500 - $1000/mo</SelectItem>
                          <SelectItem value="scale">$1000 - $2500/mo</SelectItem>
                          <SelectItem value="enterprise">$2500+/mo</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anything else?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your project..." className="bg-background/50 border-white/10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full bg-primary text-black hover:bg-primary/90 font-bold" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Book Strategy Call
              </Button>
            </form>
          </Form>
        </div>

        {/* Info Side */}
        <div className="space-y-8">
           <div className="p-8 rounded-3xl bg-secondary/10 border border-secondary/20">
             <h3 className="text-2xl font-bold mb-4 text-secondary">Why Book a Call?</h3>
             <ul className="space-y-4">
               {["Get a free digital audit of your current site", "See a live demo of Gorilla Apps", "Custom pricing quote for your industry", "No pressure consultation"].map(item => (
                 <li key={item} className="flex items-start gap-3">
                   <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
           </div>
           
           <div className="p-8 rounded-3xl bg-card border border-white/5">
             <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
             <div className="space-y-2 text-muted-foreground">
               <p>hello@pinkgorilla.agency</p>
               <p>(555) 867-5309</p>
               <p>Los Angeles, CA</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
