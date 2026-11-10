import About from '@/components/About';
import BeforeAfter from '@/components/BeforeAfter';
import BookingForm from '@/components/BookingForm';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StickyCTA from '@/components/StickyCTA';
import Testimonials from '@/components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <BeforeAfter />
        <Calculator />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
