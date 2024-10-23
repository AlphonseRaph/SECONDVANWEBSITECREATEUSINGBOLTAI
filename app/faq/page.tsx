import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of vans do you offer?",
    answer: "We offer a wide variety of conversion vans including luxury passenger vans, camper vans, cargo vans, and custom builds. Our inventory includes various makes and models to suit different needs and preferences."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer multiple financing options through our trusted lending partners. You can apply for financing directly through our website or speak with our finance team for personalized assistance."
  },
  {
    question: "Is nationwide delivery available?",
    answer: "Yes, we offer nationwide delivery services. Delivery costs vary based on location. Contact our sales team for a detailed quote for your specific location."
  },
  {
    question: "What warranty options are available?",
    answer: "All our vans come with a standard warranty covering major components. Extended warranty options are available for purchase. Each warranty package can be customized to fit your needs."
  },
  {
    question: "Can I trade in my current vehicle?",
    answer: "Yes, we accept trade-ins! We'll evaluate your vehicle and offer a fair market value that can be applied to your purchase."
  },
  {
    question: "How do I schedule a viewing or test drive?",
    answer: "You can schedule a viewing or test drive through our website's contact form, or by calling us directly. We recommend scheduling in advance to ensure the vehicle is available."
  }
];

export default function FAQ() {
  return (
    <main className="min-h-screen py-16">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don't see your question here? Contact our support team for assistance.
          </p>
        </div>
      </div>
    </main>
  );
}