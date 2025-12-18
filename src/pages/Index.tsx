import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [roiFormData, setRoiFormData] = useState({
    email: '',
    company: '',
    warehouseArea: '',
  });

  const [tenderFormData, setTenderFormData] = useState({
    email: '',
    company: '',
  });

  const handleROISubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "ROI Calculation Requested",
      description: "We'll send your customized ROI report within 24 hours.",
    });
    setRoiFormData({ email: '', company: '', warehouseArea: '' });
  };

  const handleTenderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tender Specs Downloading",
      description: "Check your email for the complete technical specifications.",
    });
    setTenderFormData({ email: '', company: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Bot" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">AGV Smart</span>
          </div>
          <Button size="lg" className="gap-2">
            <Icon name="MessageCircle" size={20} />
            Talk to India Sales
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="bg-primary/20 text-primary-foreground border-primary">
                24/7 Industrial AGV Robots
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Rugged Reliability for Indian Warehouses
              </h1>
              <p className="text-xl text-gray-300">
                No downtime. No human error. No compromise.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-gray-400">Uptime at 45°C</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-gray-400">Operations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-400">Safety Record</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get ROI Calculator
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Download Tender Specs
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/aadeccf9-a219-454c-9f2f-652ff6422e69/files/1b93044a-1e64-4e8b-908a-a2fc4720b451.jpg"
                alt="AGV Robot in Warehouse"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reduce costly downtimes and staff turnover
            </h2>
            <p className="text-xl text-muted-foreground">
              Our AGVs work where humans can't — in heat, dust, and around the clock
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon name="Users" className="text-destructive" size={24} />
                </div>
                <h3 className="font-bold text-xl">Staff Turnover</h3>
                <p className="text-muted-foreground">High employee churn disrupts operations and increases training costs.</p>
                <div className="pt-2 flex items-center gap-2 text-primary font-semibold">
                  <Icon name="ArrowRight" size={20} />
                  <span>Complete Automation</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon name="AlertTriangle" className="text-destructive" size={24} />
                </div>
                <h3 className="font-bold text-xl">Human Errors</h3>
                <p className="text-muted-foreground">Manual handling leads to mistakes, damage, and safety incidents.</p>
                <div className="pt-2 flex items-center gap-2 text-primary font-semibold">
                  <Icon name="ArrowRight" size={20} />
                  <span>Safety as Standard</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon name="Zap" className="text-destructive" size={24} />
                </div>
                <h3 className="font-bold text-xl">Equipment Failure</h3>
                <p className="text-muted-foreground">Standard electronics fail in extreme heat and dusty environments.</p>
                <div className="pt-2 flex items-center gap-2 text-primary font-semibold">
                  <Icon name="ArrowRight" size={20} />
                  <span>Industrial-grade Electronics</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            AGV Smart vs Competition
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-bold text-lg">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-lg bg-primary/5">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Award" className="text-primary" />
                      AGV Smart
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-lg">Kiva/Amazon</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold">Heat/Dust Resistance</td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <Icon name="Check" className="text-green-600 mx-auto" size={28} />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Icon name="X" className="text-red-600 mx-auto" size={28} />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold">Safety Rating</td>
                  <td className="text-center py-4 px-4 bg-primary/5 font-bold text-lg">100%</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">78%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold">Floor Quality Required</td>
                  <td className="text-center py-4 px-4 bg-primary/5 font-semibold text-green-600">Not Required</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">High Standard</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-semibold">Maintenance</td>
                  <td className="text-center py-4 px-4 bg-primary/5 font-semibold text-green-600">Simple</td>
                  <td className="text-center py-4 px-4 text-muted-foreground">Complex</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">ERP Integration</td>
                  <td className="text-center py-4 px-4 bg-primary/5">
                    <Icon name="Check" className="text-green-600 mx-auto" size={28} />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Icon name="Check" className="text-green-600 mx-auto" size={28} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Trusted by India's Leading Manufacturers
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            International standards. Local support.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <img
                    src="https://cdn.poehali.dev/projects/aadeccf9-a219-454c-9f2f-652ff6422e69/files/4eba8db7-bc0f-4eba-b6c3-ba5ea6e0e8ef.jpg"
                    alt="Client testimonial"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <p className="italic text-muted-foreground mb-2">
                      "AGV Smart increased our logistics uptime by 80% even in peak summer. 
                      The robots handle 45°C without any issues."
                    </p>
                    <p className="font-semibold">— Technical Director, Major Indian Manufacturer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <img
                    src="https://cdn.poehali.dev/projects/aadeccf9-a219-454c-9f2f-652ff6422e69/files/10368b52-7c42-43f6-a35f-61f437025ffc.jpg"
                    alt="Technology"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <p className="italic text-muted-foreground mb-2">
                      "No-fuss maintenance. Our team was trained in just one shift. 
                      Local spare parts availability is a game-changer."
                    </p>
                    <p className="font-semibold">— Operations Manager, Logistics Company</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <Badge variant="outline" className="text-lg py-2 px-4">
              <Icon name="Shield" className="mr-2" />
              ISO 9001
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              <Icon name="CheckCircle" className="mr-2" />
              CE Certified
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              <Icon name="Globe" className="mr-2" />
              FIEO Member
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              <Icon name="Award" className="mr-2" />
              CII Partner
            </Badge>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="Building2" className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-xl">10+ Years Experience</h3>
                <p className="text-muted-foreground">
                  Delivered to 20+ countries with proven track record in extreme conditions
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="Wrench" className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-xl">Local Support in India</h3>
                <p className="text-muted-foreground">
                  Dedicated service team, spare parts inventory, and training in your language
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="Lock" className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-xl">Financial Security</h3>
                <p className="text-muted-foreground">
                  Escrow support, deferred payments, international guarantees available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Forms Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* ROI Form */}
            <Card className="bg-white text-foreground">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Calculator" size={32} className="text-primary" />
                    <h3 className="text-2xl font-bold">Get Your ROI Calculation</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Receive a customized ROI report based on your warehouse specifications
                  </p>
                  <form onSubmit={handleROISubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="roi-email">Email Address *</Label>
                      <Input
                        id="roi-email"
                        type="email"
                        required
                        value={roiFormData.email}
                        onChange={(e) => setRoiFormData({ ...roiFormData, email: e.target.value })}
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="roi-company">Company Name *</Label>
                      <Input
                        id="roi-company"
                        required
                        value={roiFormData.company}
                        onChange={(e) => setRoiFormData({ ...roiFormData, company: e.target.value })}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <Label htmlFor="roi-area">Warehouse Area (sq. meters) *</Label>
                      <Input
                        id="roi-area"
                        type="number"
                        required
                        value={roiFormData.warehouseArea}
                        onChange={(e) => setRoiFormData({ ...roiFormData, warehouseArea: e.target.value })}
                        placeholder="5000"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Calculate My ROI
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Tender Specs Form */}
            <Card className="bg-white text-foreground">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="FileText" size={32} className="text-primary" />
                    <h3 className="text-2xl font-bold">Download Tender Specs</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Complete technical specifications for your tender documentation
                  </p>
                  <form onSubmit={handleTenderSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="tender-email">Email Address *</Label>
                      <Input
                        id="tender-email"
                        type="email"
                        required
                        value={tenderFormData.email}
                        onChange={(e) => setTenderFormData({ ...tenderFormData, email: e.target.value })}
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tender-company">Company Name *</Label>
                      <Input
                        id="tender-company"
                        required
                        value={tenderFormData.company}
                        onChange={(e) => setTenderFormData({ ...tenderFormData, company: e.target.value })}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div className="space-y-2 pt-4">
                      <p className="text-sm text-muted-foreground">You will receive:</p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Complete technical specifications
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Safety certifications (ISO, CE)
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Integration guidelines
                        </li>
                      </ul>
                    </div>
                    <Button type="submit" className="w-full" size="lg" variant="secondary">
                      Download Specifications
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            FAQ for Indian Procurement Teams
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                Can you provide Make in India support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we have partnerships with local Indian manufacturers for assembly and component sourcing. 
                We can provide Make in India compliance documentation and support local content requirements for government tenders.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                What is your warranty and service guarantee?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Standard 2-year comprehensive warranty with optional extensions up to 5 years. 
                We maintain spare parts inventory in India and guarantee 24-hour response time for critical issues. 
                Annual maintenance contracts available with dedicated support teams.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">
                How long does implementation take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Typical implementation: 4-6 weeks from delivery to full operation. This includes installation, 
                system integration with your existing ERP/WMS, staff training, and testing. Pilot projects can be deployed in 2-3 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">
                What about payment terms and financial security?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer flexible payment terms including: milestone-based payments, letter of credit, 
                escrow services for large orders, and deferred payment options. International bank guarantees available. 
                We work with major Indian banks for local financing solutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">
                Is my warehouse ready for AGV deployment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our AGVs work on standard industrial floors - no special surface treatment required. 
                We perform a free site assessment to evaluate your facility and provide a readiness report. 
                Most warehouses require minimal preparation, typically just marking navigation paths.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold">
                Can AGVs integrate with our existing systems?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, our AGVs integrate with major ERP systems (SAP, Oracle, Microsoft Dynamics) and WMS platforms. 
                We provide REST APIs and standard protocols for custom integrations. 
                Our technical team will work with your IT department to ensure seamless connectivity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Bot" size={28} className="text-primary" />
                <span className="text-xl font-bold">AGV Smart</span>
              </div>
              <p className="text-gray-400 text-sm">
                Industrial AGV solutions for extreme conditions. Trusted globally, supported locally.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact India</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  india.sales@agvsmart.com
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +91 22 1234 5678
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-white border-gray-600">ISO 9001</Badge>
                <Badge variant="outline" className="text-white border-gray-600">CE</Badge>
                <Badge variant="outline" className="text-white border-gray-600">FIEO</Badge>
                <Badge variant="outline" className="text-white border-gray-600">CII</Badge>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 AGV Smart Logistics. All rights reserved. | Made for Indian Manufacturing Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
