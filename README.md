# LAEPE - UFSC Website

Website institucional da Liga Acadêmica de Enfermagem Pré‑Hospitalar e Emergência da UFSC.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e micro-interações
- **React** - Biblioteca de interface

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd laepe-website
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
laepe-website/
├── app/                    # App Router do Next.js 14
│   ├── api/               # API Routes
│   │   └── contact/       # Endpoint de contato
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── Navbar.tsx         # Navegação principal
│   ├── Hero.tsx           # Seção hero
│   ├── Section.tsx        # Wrapper de seções
│   ├── Stats.tsx          # Estatísticas
│   ├── CardsGrid.tsx      # Grid de cards
│   ├── Gallery.tsx        # Galeria de imagens
│   ├── Testimonials.tsx   # Depoimentos
│   ├── SupportCTA.tsx     # Chamada para apoio
│   ├── StudentsCTA.tsx    # Chamada para alunos
│   ├── ContactForm.tsx    # Formulário de contato
│   └── Footer.tsx         # Rodapé
├── public/                # Arquivos estáticos
│   ├── assets/            # Imagens e recursos
│   ├── robots.txt         # SEO
│   ├── sitemap.xml        # Sitemap
│   └── manifest.json      # PWA
├── tailwind.config.js     # Configuração do Tailwind
├── next.config.js         # Configuração do Next.js
├── tsconfig.json          # Configuração do TypeScript
└── package.json           # Dependências
```

## 🎨 Design System

### Cores
- **Primária**: `#0A8C34` (Verde)
- **Secundária**: `#3C3483` (Roxo)
- **Secundária Escura**: `#3B366A` (Roxo escuro)
- **Neutra**: `#7A779A` (Cinza)
- **Foreground**: `#000000` (Preto)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run type-check   # Verificação de tipos TypeScript
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## ♿ Acessibilidade

- Navegação por teclado completa
- Estados de foco visíveis
- Contraste WCAG 2.1 AA
- ARIA labels e landmarks
- Imagens com alt descritivo

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outros
```bash
npm run build
npm run start
```

## 📧 API de Contato

O formulário de contato utiliza a rota `/api/contact` que:
- Valida dados no servidor
- Simula envio de e-mail (mock)
- Retorna respostas apropriadas

Para implementar envio real de e-mail, edite `app/api/contact/route.ts`.

## 🖼️ Imagens

Adicione as imagens necessárias em `public/assets/`:
- `laepe-logo.png` - Logo principal
- `gallery/` - Imagens da galeria
- `og-image.png` - Imagem para redes sociais

## 📄 Licença

Este projeto é privado e pertence à LAEPE - UFSC.

## 🤝 Contribuição

Para contribuir com o projeto:
1. Faça um fork
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Contato

- **E-mail**: laepeufsc@gmail.com
- **Instagram**: [@laepe.ufsc](https://www.instagram.com/laepe.ufsc/)
- **Facebook**: [facebook.com/laepe.ufsc](https://www.facebook.com/laepe.ufsc/)
