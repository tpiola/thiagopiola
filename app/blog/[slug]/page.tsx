"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/motion/Reveal";
import { PageShell } from "@/components/motion/PageShell";
import { spring } from "@/lib/motion";
import { blog } from "@/lib/content";
import { useLocale } from "@/lib/i18n";

/* ─── Dados dos posts (mesmo array do page.tsx) ─── */

type Post = {
  slug: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  summary: string;
  content: string[];
};

const CATEGORY_COLORS: Record<string, string> = {
  "Farmácia Clínica": "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
  Regulatório: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
  Tecnologia: "bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400",
  Gestão: "bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
  Liderança: "bg-rose-500/10 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400",
  Automação: "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400",
};

const POSTS: Post[] = [
  {
    slug: "farmacia-clinica-na-era-digital",
    date: "15 jun 2026",
    readTime: "8 min",
    category: "Farmácia Clínica",
    title: "Farmácia Clínica na Era Digital",
    summary:
      "Como a transformação digital está redefinindo o papel do farmacêutico clínico — da reconciliação medicamentosa ao uso de prontuários eletrônicos e telefarmácia.",
    content: [
      "A farmácia clínica tradicional sempre foi caracterizada pelo contato direto entre farmacêutico e paciente — uma relação baseada na confiança, na escuta ativa e na análise criteriosa de cada prescrição. No entanto, a digitalização do setor saúde trouxe novas camadas de complexidade e oportunidade para o exercício clínico. Prontuários eletrônicos, sistemas de prescrição digital, bases de dados farmacológicos integradas e plataformas de telefarmácia estão redesenhando o dia a dia do farmacêutico clínico, permitindo um alcance muito maior do que o limitado ao balcão da farmácia.",
      "Um dos avanços mais significativos está na reconciliação medicamentosa apoiada por tecnologia. Ferramentas de comparação automatizada de prescrições identificam duplicidades, interações medicamentosas e discrepâncias entre medicamentos prescritos por diferentes profissionais — tudo em segundos. O farmacêutico clínico que domina essas ferramentas não apenas ganha produtividade, mas eleva a segurança do paciente a um novo patamar. Em redes de farmácias hospitalares e ambulatoriais, a integração dos sistemas de dispensação com os prontuários eletrônicos já reduziu em até 40% os erros de medicação.",
      "A telefarmácia é outro vetor de transformação que merece atenção. Durante consultas remotas de acompanhamento farmacoterapêutico, o farmacêutico pode revisar a adesão ao tratamento, ajustar orientações e monitorar reações adversas sem que o paciente precise se deslocar. Combinada com dispositivos conectados — como medidores de glicose, pressão arterial e sensores de medicação — a telefarmácia permite um monitoramento contínuo e personalizado. Para o farmacêutico que deseja se posicionar como referência clínica, dominar essas ferramentas digitais já não é diferencial: é requisito básico.",
      "O futuro da farmácia clínica passa pela integração entre o conhecimento técnico do farmacêutico e a inteligência dos dados gerados pelos sistemas digitais. Quem investir em capacitação tecnológica — seja no uso de sistemas de suporte à decisão clínica, seja na interpretação de dashboards de indicadores assistenciais — estará na linha de frente de uma profissão que nunca foi tão estratégica para o cuidado à saúde. A tecnologia não substitui o olhar clínico, mas amplifica seu impacto.",
    ],
  },
  {
    slug: "compliance-anvisa-2026",
    date: "02 jun 2026",
    readTime: "6 min",
    category: "Regulatório",
    title: "Compliance ANVISA: O Que Mudou em 2026",
    summary:
      "Atualização completa sobre as novas resoluções da ANVISA para o varejo farmacêutico: RDCs atualizadas, documentação obrigatória e prazos de adequação.",
    content: [
      "O ano de 2026 trouxe mudanças significativas no marco regulatório da ANVISA para o varejo farmacêutico. As alterações afetam desde a documentação obrigatória para autorização de funcionamento até os requisitos de boas práticas para dispensação e armazenamento de medicamentos. Para farmacêuticos responsáveis técnicos e gestores de redes, acompanhar essas atualizações não é apenas uma questão de conformidade — é proteção do negócio contra riscos sanitários e passivos regulatórios que podem resultar em multas elevadas e até interdição.",
      "A principal novidade de 2026 é a consolidação de requisitos digitais para a documentação regulatória. A ANVISA passou a exigir que o Livro de Registro de Estupefacientes e Psicotrópicos seja mantido em formato digital certificado, com backups criptografados e rastreabilidade completa. Além disso, a nova RDC XX/2026 estabelece prazos mais rigorosos para a notificação de eventos adversos — caindo de 72 para 48 horas em casos graves — e amplia a obrigatoriedade de registros de temperatura e umidade para todas as áreas de armazenamento, inclusive salas de manipulação e estoques de vacinas.",
      "Outro ponto crítico é a obrigatoriedade da rastreabilidade de medicamentos por lote. As farmácias e drogarias precisam implementar sistemas que permitam o rastreamento completo do recebimento à dispensação final, com dados transmitidos em tempo real para a plataforma Datavisa. O prazo de adequação para redes com mais de 50 unidades encerra em julho de 2026, e para as demais, até dezembro. Quem não estiver com os sistemas integrados até essas datas estará sujeito a penalidades progressivas, incluindo suspensão temporária das atividades.",
      "A recomendação para farmacêuticos RTs e gestores é clara: realizar uma auditoria regulatória completa ainda no primeiro semestre, verificar a conformidade dos sistemas de gestão com os novos requisitos da Datavisa e capacitar a equipe técnica sobre os novos fluxos de notificação. O compliance não é burocracia — é a base para uma operação farmacêutica sustentável, que protege o paciente, a equipe e o negócio.",
    ],
  },
  {
    slug: "ia-generativa-aplicada-a-saude",
    date: "20 mai 2026",
    readTime: "10 min",
    category: "Tecnologia",
    title: "IA Generativa Aplicada à Saúde",
    summary:
      "Explorando casos de uso reais de inteligência artificial generativa no setor saúde: atendimento, análise de dados clínicos, automação documental e suporte à decisão.",
    content: [
      "A inteligência artificial generativa deixou de ser promessa futura para se tornar ferramenta operacional em diversos segmentos da saúde. Em 2026, hospitais, clínicas, operadoras de planos e farmácias já utilizam modelos de linguagem de grande escala (LLMs) para automatizar tarefas antes exclusivamente humanas — da transcrição de consultas ao suporte à decisão clínica. O diferencial competitivo hoje não está em saber que a IA existe, mas em entender onde e como aplicá-la com segurança e responsabilidade regulatória.",
      "No atendimento ao paciente, os assistentes virtuais baseados em IA generativa já realizam triagem de sintomas, agendamento inteligente e orientação pré-consulta com nível de acerto comparável ao de profissionais treinados. Em operadoras de saúde, a automação documental reduziu em 60% o tempo de processamento de guias e autorizações. Já no varejo farmacêutico, sistemas de IA generativa estão sendo usados para gerar resumos de interações medicamentosas a partir de bulas digitalizadas e para personalizar orientações farmacêuticas em linguagem acessível ao perfil de cada paciente.",
      "A análise de dados clínicos é outro campo de aplicação promissor. Modelos generativos treinados em prontuários eletrônicos são capazes de identificar padrões de prescrição, sugerir ajustes posológicos e até prever riscos de hospitalização por não adesão ao tratamento. Quando combinados com sistemas de suporte à decisão baseados em evidências, esses modelos atuam como copilotos clínicos — ampliando a capacidade analítica do profissional sem substituir seu julgamento. Em hospitais que já adotaram essa abordagem, houve redução de 25% nas readmissões por erros de medicação.",
      "É importante, porém, que farmacêuticos e gestores estejam atentos às limitações e riscos. IA generativa pode alucinar informações, reproduzir vieses e levantar questões éticas sobre privacidade de dados. A implementação segura exige curadoria dos dados de treinamento, supervisão humana contínua e conformidade com a LGPD e as diretrizes da ANVISA para sistemas de apoio à decisão clínica. Quando bem aplicada, a IA generativa não substitui o profissional de saúde — amplifica sua capacidade de entregar cuidado de qualidade em escala.",
    ],
  },
  {
    slug: "gestao-indicadores-varejo-farmaceutico",
    date: "08 mai 2026",
    readTime: "7 min",
    category: "Gestão",
    title: "Gestão de Indicadores no Varejo Farmacêutico",
    summary:
      "Os KPIs essenciais para gestão de farmácias — giro, ruptura, ticket médio, conversão e margem — e como usá-los para decisões comerciais mais assertivas.",
    content: [
      "Gerenciar uma farmácia ou rede de drogarias com base apenas na intuição é o equivalente a pilotar um avião sem instrumentos. Em um mercado cada vez mais competitivo e com margens apertadas, a gestão orientada por indicadores deixou de ser um diferencial para se tornar uma questão de sobrevivência. Conhecer os KPIs certos — e, mais importante, saber interpretá-los — é o que separa operações que crescem de operações que apenas sobrevivem.",
      "O giro de estoque é, sem dúvida, o indicador mais estratégico para o varejo farmacêutico. Ele mede quantas vezes o estoque é renovado em um período e impacta diretamente o capital de giro. Um giro muito baixo sinaliza produtos encalhados que amarram recursos; muito alto pode indicar ruptura iminente. A meta saudável para drogarias varia entre 6 e 10 giros anuais, dependendo do mix de categorias. Paralelamente, a taxa de ruptura — percentual de itens indisponíveis no momento da compra — deve ficar abaixo de 3%. Cada ponto percentual de ruptura acima desse limite representa perda de vendas e, mais grave, dano à confiança do cliente.",
      "O ticket médio e a taxa de conversão formam a dupla dinâmica da análise comercial. Aumentar o ticket médio sem perder conversão significa vender mais por cliente sem afastá-lo — o que geralmente se alcança com programas de fidelidade, sugestão de complementares (como vitaminas junto a medicamentos de uso contínuo) e capacitação da equipe em vendas consultivas. Já a margem bruta por categoria precisa ser monitorada com lupa: medicamentos de presença podem ter margem baixa, mas geram tráfego para categorias de maior rentabilidade, como dermocosméticos e suplementos.",
      "Por fim, o indicador que conecta todos os anteriores é o lucro líquido por metro quadrado ou por funcionário. Ele revela a eficiência real da operação. Farmácias que monitoram esses KPIs semanalmente — com dashboards atualizados e reuniões curtas de análise — ajustam preço, mix e alocação de equipe em tempo real. Não se trata de burocracia: é gestão de verdade, baseada em dados que orientam decisões comerciais mais rápidas, mais precisas e mais rentáveis.",
    ],
  },
  {
    slug: "lideranca-desenvolvimento-equipes-farmacia",
    date: "25 abr 2026",
    readTime: "9 min",
    category: "Liderança",
    title: "Liderança e Desenvolvimento de Equipes em Farmácia",
    summary:
      "Estratégias práticas para formar, treinar e reter talentos no varejo farmacêutico, com foco em comunicação clara, feedback estruturado e cultura de resultados.",
    content: [
      "O varejo farmacêutico enfrenta um desafio estrutural de retenção de talentos. A rotina intensa, a pressão regulatória, a necessidade de atendimento qualificado e a concorrência por profissionais capacitados fazem com que a rotatividade em farmácias seja uma das mais altas do varejo brasileiro. Para o farmacêutico que ocupa posição de liderança — seja como RT, gerente ou coordenador — desenvolver competências de gestão de pessoas não é opcional: é a alavanca mais poderosa para construir uma operação estável, produtiva e com resultados consistentes.",
      "O primeiro pilar de uma liderança eficaz é a comunicação clara e estruturada. Líderes que estabelecem expectativas explícitas — o que esperar de cada função, quais os indicadores de desempenho, como será o feedback — criam um ambiente de previsibilidade que reduz ansiedade e melhora o engajamento. Reuniões curtas diárias de 10 a 15 minutos (os chamados daily huddles) são uma prática simples e extremamente eficaz para alinhar prioridades, resolver gargalos e reforçar o propósito do trabalho. Em farmácias que adotaram essa rotina, a satisfação da equipe subiu 35% em três meses.",
      "O segundo pilar é o feedback estruturado. Muitos gestores confundem feedback com crítica ou relegam a conversa sobre desempenho para o momento da avaliação anual — o que é tarde demais. A metodologia SBI (Situação-Comportamento-Impacto) oferece um framework simples e objetivo: descreva a situação específica, o comportamento observado e o impacto gerado. Feedbacks frequentes e construtivos criam uma cultura de melhoria contínua, onde o erro é tratado como oportunidade de aprendizado e não como motivo de punição. Profissionais que recebem feedback semanal têm 3x mais chances de permanecer na empresa.",
      "O terceiro e talvez mais importante pilar é o desenvolvimento intencional. Líderes que investem em capacitação técnica e comportamental das suas equipes — seja com treinamentos práticos sobre atendimento, vendas consultivas e合规 regulatório, seja com planos de carreira claros — constroem times leais e de alto desempenho. Um time bem treinado erra menos, vende mais, atende melhor e reduz o estresse do gestor. Liderar não é dar ordens: é criar condições para que as pessoas entreguem o melhor de si, todos os dias.",
    ],
  },
  {
    slug: "automacao-processos-n8n-farmacia",
    date: "10 abr 2026",
    readTime: "7 min",
    category: "Automação",
    title: "Automação de Processos com n8n na Farmácia",
    summary:
      "Guia prático de como utilizar o n8n para automatizar fluxos de trabalho na farmácia: notificações, CRM, relatórios de indicadores e integração entre sistemas.",
    content: [
      "A automação de processos é uma das alavancas mais subestimadas na gestão farmacêutica. Enquanto grandes redes investem pesado em ERPs e sistemas integrados, farmácias de médio e pequeno porte muitas vezes operam com processos manuais que consomem horas preciosas da equipe — desde o envio de notificações de cobrança até a consolidação de relatórios de vendas. É nesse cenário que o n8n, uma plataforma de automação de código aberto, se destaca como ferramenta acessível, flexível e extremamente poderosa.",
      "O n8n permite conectar sistemas e criar fluxos de trabalho automatizados sem exigir conhecimento profundo de programação. Na prática, você pode construir automações que integram seu sistema de gestão (ERP), planilhas, e-mail, WhatsApp e CRM em poucos cliques. Um exemplo prático: sempre que um cliente fizer uma compra acima de R$ 200, o n8n pode disparar automaticamente uma mensagem de agradecimento personalizada via WhatsApp, registrar a compra em uma planilha de acompanhamento e atualizar a pontuação do programa de fidelidade. Tudo isso sem intervenção manual.",
      "Outro caso de uso de alto impacto é a automação de relatórios gerenciais. Em vez de um colaborador gastar meio dia por semana consolidando dados de vendas, giro de estoque e margem em planilhas manuais, o n8n pode buscar essas informações no banco de dados do ERP, processá-las e gerar um relatório formatado enviado por e-mail todos os segundas-feiras às 8h. Além de liberar tempo da equipe, a automação elimina erros de digitação e garante que os indicadores estejam sempre atualizados para a reunião comercial.",
      "Para farmacêuticos que desejam começar, a recomendação é mapear primeiro os processos mais repetitivos e de baixa complexidade — notificações, lembretes, consolidação de dados — e automatizar um de cada vez. O n8n roda localmente ou em servidor próprio, garantindo controle total sobre os dados, o que é essencial para conformidade com a LGPD. Em 2026, automatizar processos não é um luxo tecnológico: é a maneira mais inteligente de fazer mais com menos, reduzir erros e liberar o farmacêutico para o que realmente importa — o cuidado com o paciente.",
    ],
  },
];

/* ─── Helper ─── */

function findPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/* ─── Newsletter inline ─── */

function NewsletterForm() {
  const { locale } = useLocale();
  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-8 md:p-10">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand)]">
        Newsletter
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
        {locale === "pt" ? "Receba conteúdo exclusivo" : "Get exclusive content"}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {locale === "pt"
          ? "Farmácia clínica, tecnologia, compliance e gestão. Direto ao ponto, sem spam."
          : "Clinical pharmacy, technology, compliance and management. Straight to the point, no spam."}
      </p>
      <form
        className="mt-6 flex flex-col sm:flex-row gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          const input = (e.target as HTMLFormElement).querySelector(
            "input",
          ) as HTMLInputElement;
          if (input?.value) {
            alert(locale === "pt"
              ? "Obrigado por se inscrever! Em breve você receberá nossas novidades."
              : "Thank you for subscribing! You'll receive our updates soon.");
            input.value = "";
          }
        }}
      >
        <input
          type="email"
          placeholder={locale === "pt" ? "Seu melhor e-mail" : "Your best email"}
          required
          className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-[var(--brand)]"
        />
        <button
          type="submit"
          className="btn-primary group text-sm px-6 py-3"
        >
          {locale === "pt" ? "Inscrever" : "Subscribe"}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </button>
      </form>
    </div>
  );
}

/* ─── Componente principal ─── */

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = findPost(slug);
  const reduce = useReducedMotion();
  const { locale } = useLocale();

  if (!post) {
    notFound();
  }

  return (
    <PageShell>
      <main className="min-h-screen bg-surface text-foreground">
        <Header />

        {/* Hero compacto */}
        <section className="relative border-b border-border pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              background: "radial-gradient(ellipse at 50% 30%, var(--brand), transparent 60%)",
            }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-3xl px-5 md:px-8">
            {/* Back link */}
            <Reveal variant="fade">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-[var(--brand)] transition-colors mb-8"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
                {locale === "pt" ? "Voltar ao blog" : "Back to blog"}
              </Link>
            </Reveal>

            {/* Meta */}
            <Reveal variant="up" delay={0.04}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${CATEGORY_COLORS[post.category] || "bg-[color-mix(in_srgb,var(--brand)_8%,transparent)] text-[var(--brand)]"}`}
                >
                  <Tag className="h-2.5 w-2.5" aria-hidden />
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-mono text-[10px] text-muted">
                  <Calendar className="h-3 w-3" aria-hidden />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 font-mono text-[10px] text-muted">
                  <Clock className="h-3 w-3" aria-hidden />
                  {post.readTime}
                </span>
              </div>
            </Reveal>

            {/* Título */}
            <Reveal variant="up" delay={0.08}>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
                {post.title}
              </h1>
            </Reveal>

            {/* Summary */}
            <Reveal variant="up" delay={0.12}>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {post.summary}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Conteúdo do post */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="space-y-6">
              {post.content.map((paragraph, i) => (
                <Reveal key={i} variant="up" delay={Math.min(i * 0.06, 0.3)}>
                  <motion.p
                    className="text-base leading-[1.75] text-foreground/85 md:text-lg"
                    transition={reduce ? undefined : spring.soft}
                  >
                    {paragraph}
                  </motion.p>
                </Reveal>
              ))}
            </div>

            {/* Divider */}
            <motion.div
              className="my-14 h-px w-full rounded-full"
              style={{
                background: "linear-gradient(90deg, var(--brand), transparent 60%)",
              }}
              initial={reduce ? undefined : { scaleX: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Newsletter */}
            <Reveal variant="up" delay={0.1}>
              <NewsletterForm />
            </Reveal>

            {/* CTA Voltar */}
            <Reveal variant="fade" delay={0.2}>
              <div className="mt-10 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] transition-all hover:gap-3"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  {locale === "pt" ? "Ver todos os artigos" : "View all articles"}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </PageShell>
  );
}
