import { CheckCircle2, Zap, Image, FileCode } from "lucide-react";
import "@/styles/main.scss";

const features = [
  {
    icon: FileCode,
    title: "Compilação SASS",
    description: "Arquivos .scss são compilados automaticamente para CSS otimizado."
  },
  {
    icon: Image,
    title: "Compressão de Imagens",
    description: "Imagens são otimizadas automaticamente no build de produção."
  },
  {
    icon: Zap,
    title: "Minificação JavaScript",
    description: "Código JS é comprimido e otimizado com Terser."
  }
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10 py-20">
        <div className="container mx-auto px-6">
          <div className="animate-fadeIn text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <CheckCircle2 className="h-4 w-4" />
              Vite + SASS + Otimização
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Equivalente ao <span className="text-primary">Gulpfile</span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Este projeto usa Vite como bundler moderno, substituindo as tarefas tradicionais do Gulp 
              com configurações nativas para SASS, compressão de imagens e minificação de JavaScript.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#features" 
                className="sass-button sass-button--primary"
              >
                Ver Funcionalidades
              </a>
              <a 
                href="https://vitejs.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sass-button sass-button--outline"
              >
                Documentação Vite
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Tarefas Automatizadas
          </h2>
          
          <div className="grid-auto mx-auto max-w-4xl">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="sass-card animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="sass-card__title">{feature.title}</h3>
                <p className="sass-card__description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Config Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Configuração
          </h2>
          
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-lg">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-destructive/60"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400/60"></div>
                <div className="h-3 w-3 rounded-full bg-primary/60"></div>
                <span className="ml-2 text-sm text-muted-foreground">vite.config.ts</span>
              </div>
              
              <pre className="overflow-x-auto p-4 text-sm">
                <code className="text-foreground">
{`// Configuração SASS
css: {
  preprocessorOptions: {
    scss: {
      additionalData: '@use "@/styles/_variables";'
    }
  }
}

// Minificação JS (equivalente gulp-uglify)
build: {
  minify: 'terser',
  terserOptions: {
    compress: { drop_console: true }
  }
}

// Otimização de Assets
build: {
  assetsInlineLimit: 4096,
  cssCodeSplit: true
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            Projeto configurado com Vite — Alternativa moderna ao Gulp
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
