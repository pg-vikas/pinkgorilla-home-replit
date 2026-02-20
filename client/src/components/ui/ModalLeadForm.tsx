import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ModalLeadForm({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      toast({
        title: "Application Received",
        description: "We will review your details and reach out within 24 hours.",
      });
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-[#09090b] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-display">Start Your Build</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required className="bg-white/5 border-white/10 text-white" placeholder="John Doe" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input id="email" type="email" required className="bg-white/5 border-white/10 text-white" placeholder="john@company.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="business">Business Name</Label>
            <Input id="business" required className="bg-white/5 border-white/10 text-white" placeholder="Acme Corp" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="building">What are you building?</Label>
            <Textarea 
              id="building" 
              required 
              className="bg-white/5 border-white/10 text-white min-h-[100px]" 
              placeholder="Tell us about your project and goals..." 
            />
          </div>
          
          <Button type="submit" className="w-full h-12 text-lg font-bold" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
