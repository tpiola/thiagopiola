import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageShell } from "@/components/motion/PageShell";

export const metadata: Metadata = {
  title: "Política de Privacidade — Thiago Piola",
  description:
    "Política de privacidade e proteção de dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD). Saiba quais dados coletamos, como utilizamos e quais são os seus direitos.",
  openGraph: {
    title: "Política de Privacidade — Thiago Piola",
    description:
      "Política de privacidade e proteção de dados pessoais conforme a LGPD.",
    url: "https://thiagopiola-site.vercel.app/privacidade",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidade — Thiago Piola",
    description:
      "Política de privacidade e proteção de dados pessoais conforme a LGPD.",
  },
  alternates: {
    canonical: "https://thiagopiola-site.vercel.app/privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacidadePage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-surface text-foreground">
        <Header />
        <div className="mx-auto max-w-3xl px-5 pt-32 pb-20 md:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Política de Privacidade
          </h1>
          <p className="text-sm text-muted mb-10">
            Última atualização: junho de 2026
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Introdução
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Esta Política de Privacidade descreve como Thiago Piola coleta,
              usa, armazena e protege os dados pessoais dos visitantes e
              usuários do site thiagopiola.com.br, em conformidade com a Lei
              Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).
            </p>
            <p className="text-muted leading-relaxed">
              Ao utilizar este site, você concorda com as práticas descritas
              nesta política. Se não concordar, recomendamos que não forneça
              seus dados pessoais ou entre em contato conosco para esclarecer
              dúvidas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. Dados Coletados
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Podemos coletar as seguintes categorias de dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-muted leading-relaxed space-y-2">
              <li>
                <strong>Dados de navegação:</strong> endereço IP, tipo de
                navegador, páginas acessadas, tempo de visita e origem do
                tráfego, coletados automaticamente por ferramentas de análise
                (Google Analytics, Vercel Analytics).
              </li>
              <li>
                <strong>Dados fornecidos voluntariamente:</strong> nome e
                endereço de e-mail quando você preenche o formulário de
                newsletter ou entra em contato através do site.
              </li>
              <li>
                <strong>Cookies e tecnologias similares:</strong> utilizamos
                cookies necessários para o funcionamento do site e cookies
                analíticos para entender como você interage com o conteúdo. Você
                pode gerenciar suas preferências de cookies a qualquer momento.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. Finalidade do Tratamento
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Seus dados são utilizados para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 text-muted leading-relaxed space-y-2">
              <li>Envio de newsletter e conteúdos informativos (mediante consentimento).</li>
              <li>Melhoria da experiência de navegação e personalização de conteúdo.</li>
              <li>Análise de audiência e desempenho do site.</li>
              <li>Resposta a solicitações feitas através dos canais de contato.</li>
              <li>Cumprimento de obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Base Legal para o Tratamento
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Os dados pessoais são tratados com base nas seguintes hipóteses
              legais previstas na LGPD:
            </p>
            <ul className="list-disc pl-6 text-muted leading-relaxed space-y-2">
              <li>
                <strong>Consentimento (art. 7º, I):</strong> para envio de
                newsletter e comunicações de marketing.
              </li>
              <li>
                <strong>Legítimo interesse (art. 7º, IX):</strong> para análises
                de audiência e melhoria do site.
              </li>
              <li>
                <strong>Cumprimento de obrigação legal (art. 7º, II):</strong>{" "}
                para atender exigências regulatórias aplicáveis.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Compartilhamento de Dados
            </h2>
            <p className="text-muted leading-relaxed">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com
              terceiros para fins de marketing próprio. Podemos compartilhar
              dados com:
            </p>
            <ul className="list-disc pl-6 text-muted leading-relaxed mt-4 space-y-2">
              <li>
                <strong>Plataformas de hospedagem e infraestrutura:</strong>{" "}
                Vercel Inc. (hospedagem do site).
              </li>
              <li>
                <strong>Ferramentas de análise:</strong> Google Analytics
                (Google LLC) e Vercel Analytics.
              </li>
              <li>
                <strong>Plataformas de automação:</strong> Make (para
                processamento de inscrições na newsletter).
              </li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              Todos os prestadores de serviços estão em conformidade com a LGPD
              e operam sob contratos que garantem a proteção adequada dos dados.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Cookies
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Utilizamos cookies para garantir o funcionamento adequado do site
              e melhorar sua experiência. Os cookies são pequenos arquivos de
              texto armazenados no seu navegador.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Tipos de cookies utilizados:</strong>
            </p>
            <ul className="list-disc pl-6 text-muted leading-relaxed space-y-2">
              <li>
                <strong>Cookies essenciais:</strong> necessários para o
                funcionamento básico do site. Não podem ser desativados.
              </li>
              <li>
                <strong>Cookies analíticos:</strong> coletam informações
                anônimas sobre como os visitantes usam o site, permitindo
                melhorias contínuas.
              </li>
              <li>
                <strong>Cookies de preferência:</strong> lembram suas escolhas
                (como tema claro/escuro e idioma) para personalizar sua
                experiência.
              </li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              Você pode gerenciar ou desativar cookies nas configurações do seu
              navegador. No entanto, a desativação de cookies essenciais pode
              afetar o funcionamento do site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Direitos do Titular
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Em conformidade com a LGPD, você possui os seguintes direitos
              sobre seus dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-muted leading-relaxed space-y-2">
              <li>Confirmar a existência de tratamento de dados.</li>
              <li>Acessar seus dados pessoais.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>
                Solicitar a anonimização, bloqueio ou eliminação de dados
                desnecessários ou tratados em desconformidade com a lei.
              </li>
              <li>Portar seus dados a outro fornecedor de serviço.</li>
              <li>
                Eliminar dados tratados com seu consentimento, exceto nas
                hipóteses legais de guarda obrigatória.
              </li>
              <li>
                Revogar o consentimento a qualquer tempo, sem prejuízo da
                legalidade do tratamento realizado antes da revogação.
              </li>
              <li>
                Opor-se ao tratamento realizado com base no legítimo interesse.
              </li>
              <li>
                Solicitar revisão de decisões automatizadas que afetem seus
                interesses.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              8. Segurança dos Dados
            </h2>
            <p className="text-muted leading-relaxed">
              Adotamos medidas técnicas e organizacionais adequadas para
              proteger seus dados pessoais contra acesso não autorizado,
              destruição, perda, alteração ou qualquer forma de tratamento
              inadequado ou ilícito. Isso inclui criptografia em trânsito
              (HTTPS/TLS), firewalls, controles de acesso restrito e revisões
              periódicas de segurança.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              9. Retenção de Dados
            </h2>
            <p className="text-muted leading-relaxed">
              Mantemos seus dados pessoais apenas pelo período necessário para
              cumprir as finalidades descritas nesta política ou para atender
              obrigações legais. Dados de newsletter são mantidos enquanto você
              permanecer inscrito. Ao revogar o consentimento ou solicitar a
              exclusão, seus dados serão removidos em até 30 dias, salvo
              exigência legal de retenção.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              10. Contato e Encarregado (DPO)
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Para exercer seus direitos, esclarecer dúvidas sobre esta
              política ou realizar qualquer solicitação relacionada aos seus
              dados pessoais, entre em contato:
            </p>
            <ul className="text-muted leading-relaxed space-y-1">
              <li>
                <strong>E-mail:</strong>{" "}
                <a
                  href="mailto:contato@thiagopiola.com.br"
                  className="text-[var(--brand)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  contato@thiagopiola.com.br
                </a>
              </li>
              <li>
                <strong>Site:</strong>{" "}
                <a
                  href="https://thiagopiola-site.vercel.app"
                  className="text-[var(--brand)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  thiagopiola.com.br
                </a>
              </li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              Responderemos sua solicitação em até 15 dias úteis, conforme o
              prazo estabelecido pela LGPD.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              11. Alterações nesta Política
            </h2>
            <p className="text-muted leading-relaxed">
              Esta política pode ser atualizada periodicamente para refletir
              mudanças nas práticas de tratamento de dados ou na legislação
              aplicável. Recomendamos a revisão periódica desta página. A data
              da última atualização está indicada no início do documento.
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </PageShell>
  );
}
