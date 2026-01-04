import { ContactForm } from "@/components/ContactForm";
import { ImageCarousel } from "@/components/ImageCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center">
            Exercício Plugins jQuery → React
          </h1>
        </div>
      </header>

      {/* Carousel */}
      <ImageCarousel />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Formulário de Contato</h2>
          <p className="text-muted-foreground text-center mb-8">
            Preencha todos os campos obrigatórios
          </p>
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
            <ContactForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 - Exercício jQuery Plugins convertido para React</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
