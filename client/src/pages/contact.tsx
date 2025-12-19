import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please enter a service type"),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Sent!",
      description: "We'll get back to you shortly to confirm your service.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-16">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300">We are here to help you with your service needs.</p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Ready to book a service or have a question? Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    <p className="text-sm text-slate-500 mb-1">Call for priority support</p>
                    <a href="tel:+919940937570" className="text-lg font-semibold text-primary hover:underline">
                      +91 9940937570
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <p className="text-sm text-slate-500 mb-1">For general inquiries</p>
                    <a href="mailto:niooraservice@gmail.com" className="text-lg font-semibold text-primary hover:underline">
                      niooraservice@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Business Hours</h3>
                    <p className="text-slate-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="pt-8 border-t">
              <h3 className="font-bold mb-2">Company Name</h3>
              <p className="text-slate-600">Nioora Private Limited</p>
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-xl border-slate-200">
            <CardHeader className="bg-slate-50 border-b">
              <CardTitle>Book a Service</CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
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
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 XXXXX XXXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. AC Repair, TV Installation" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe the issue or specific requirements..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 text-base">Submit Request</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
