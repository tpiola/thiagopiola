import type {Metadata} from 'next';
import {ProfessionalHome} from '@/components/home/ProfessionalHome';
import './home.css';

export const revalidate = 300;

export const metadata: Metadata = {
  title: {absolute: 'Thiago Piola | Farmacêutico CRF/SP 58.519 · Operação, treinamento e adesão ao tratamento'},
  description:
    'Farmacêutico responsável técnico há mais de 12 anos em grande rede de varejo farmacêutico. Finalista do Farmacêutico Notável 2025 entre 14 mil farmacêuticos. Treinamento de equipes, operação de drogarias, programas de adesão e projetos com a indústria.',
  alternates: {canonical: '/'}
};

export default function Home() {
  return <ProfessionalHome />;
}
