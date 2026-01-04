import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center">
            Formulário de Contato
          </h1>
          <p className="text-primary-foreground/80 text-center mt-2">
            Preencha todos os campos obrigatórios
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
            <ContactForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 - Exercício jQuery Plugins convertido para React</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
