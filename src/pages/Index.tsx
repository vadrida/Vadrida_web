import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import ProcessPreview from "@/components/ProcessPreview";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <ProcessPreview />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
