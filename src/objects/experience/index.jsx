import React from "react";
import { ExperienceObject, JobContent, JobsWrapper } from "./styles";

const Experience = () => (
  <ExperienceObject
    id="experiencia"
    className="container"
    data-section="experiencia"
  >
    <h1>Experiência</h1>
    <JobsWrapper>
      <JobContent job="box">
        <div>
          <img src="img/boxnet.jpg" alt="Boxnet" />
          <div>
            <span>Abr/2019 - Atual</span>
            <h2>Analista de Clientes e Conteúdo Jr</h2>
            <p>Boxnet</p>
          </div>
        </div>
        <p>
          Atendimento aos clientes por meio de email e telefone, análise de
          conteúdos jornalísticos, envio de clipping diário e relatórios
          semanais/mensais. Atividades voltadas a mensurar a qualidade de
          exposição de clientes na mídia, utilizando tabelas e apresentações
          como ferramentas.
        </p>
      </JobContent>
      <JobContent job="virta" className="virta">
        <div>
          <div>
            <span>Ago/2017 - Dez/2018</span>
            <h2>Estagiário de Comunicação</h2>
            <p>Virta Comunicação</p>
          </div>
          <img src="img/virta.jpg" alt="Boxnet" />
        </div>
        <p>
          Análise de conteúdos jornalísticos e elaboração de relatórios
          semanais/mensais. Atividades voltadas a mensurar a qualidade de
          exposição de clientes na mídia, utilizando tabelas e apresentações
          como ferramentas.
        </p>
      </JobContent>
    </JobsWrapper>
  </ExperienceObject>
);

export default Experience;
