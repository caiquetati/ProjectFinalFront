import React from 'react';
import styles from './index.module.css';

const Formulario = () => {
  const sectionsa = [
    {
      title: "Candidato",
      links: [
        { name: "Crachá", url: "./Crachá" },
        { name: "Matricula", url: "/Matricula" },
        { name: "Vaga estacionamento", url: "/Vaga estacionamento" },
        { name: "Status dos candidatos", url: "/Status dos candidatos" },
        { name: "Etapas", url: "/Etapas" },
        { name: "Ajuste de Relátorio", url: "/Ajuste de Relátorio" },
      ]
    },
    {
      title: "Recursos Humanos",
      links: [
        { name: "Cargo", url: "/Cargo" },
        { name: "Validação do Contrato", url: "/Validação do Contrato" },
        { name: "Mensagem do Sistema", url: "/Mensagem do Sistema" },
        { name: "Parametros", url: "/Parametros" },
        { name: "Logs de Carga", url: "/Logs de Carga" },
        { name: "Logs a descartar", url: "/Logs a descartar" },
        { name: "Logs de Carga RHA-Geral", url: "/Logs de Carga RHA-Geral" },
        { name: "Manutenção Cargos Gestores", url: "/Manutenção Cargos Gestores" },
        { name: "Colaboradores Terceiros", url: "/Colaboradores Terceiros" },
      ]
    },
    {
      title: "Segurança da Informação",
      links: [
        { name: "Acessos do Candidato", url: "/Acessos do Candidato" },
        { name: "Acessos XS3", url: "/Acessos XS3" },
        { name: "Perfil de Acesso", url: '/PerfilAcessos' },
        { name: "Evento", url: "/Evento" },
        { name: "Tipo de Evento", url: "/Tipo de Evento" },
        { name: "Local Evento", url: "/Local Evento" },
        { name: "Agendamento Vacina", url: "/Matricula" },
        { name: "Agendamento do RH", url: "/Crachá" },
        { name: "Agendamento Realizados Vacina", url: "/Matricula" },
        { name: "Arquivo vacina", url: "/Crachá" },
        { name: "Datas para agendamento", url: "/Matricula" },
        { name: "BPOs Tokio", url: "/Crachá" },
        { name: "Validador Colaborador", url: "/Matricula" },
        { name: "Usuarios-Cadastro Terceiros", url: "/Crachá" },
      ]
    },
    {
      title: "RH",
      links: [
        { name: "Crachá", url: "./Crachá" },
        { name: "Matricula", url: "/Matricula" },
        { name: "Vaga estacionamento", url: "/Vaga estacionamento" },
        { name: "Status dos candidatos", url: "/Status dos candidatos" },
        { name: "Etapas", url: "/Etapas" },
        { name: "Ajuste de Relátorio", url: "/Ajuste de Relátorio" },
      ]
    },
    {
      title: "TI",
      links: [
        { name: "Cargo", url: "/Cargo" },
        { name: "Validação do Contrato", url: "/Validação do Contrato" },
        { name: "Mensagem do Sistema", url: "/Mensagem do Sistema" },
        { name: "Parametros", url: "/Parametros" },
        { name: "Logs de Carga", url: "/Logs de Carga" },
        { name: "Logs a descartar", url: "/Logs a descartar" },
        { name: "Logs de Carga RHA-Geral", url: "/Logs de Carga RHA-Geral" },
        { name: "Manutenção Cargos Gestores", url: "/Manutenção Cargos Gestores" },
        { name: "Colaboradores Terceiros", url: "/Colaboradores Terceiros" },
      ]
    },
    {
      title: "MK",
      links: [
        { name: "Acessos do Candidato", url: "/Acessos do Candidato" },
        { name: "Acessos XS3", url: "/Acessos XS3" },
        { name: "Perfil de Acesso", url: '/PerfilAcessos' },
        { name: "Evento", url: "/Evento" },
        { name: "Tipo de Evento", url: "/Tipo de Evento" },
        { name: "Local Evento", url: "/Local Evento" },
        { name: "Agendamento Vacina", url: "/Matricula" },
        { name: "Agendamento do RH", url: "/Crachá" },
        { name: "Agendamento Realizados Vacina", url: "/Matricula" },
        { name: "Arquivo vacina", url: "/Crachá" },
        { name: "Datas para agendamento", url: "/Matricula" },
        { name: "BPOs Tokio", url: "/Crachá" },
        { name: "Validador Colaborador", url: "/Matricula" },
        { name: "Usuarios-Cadastro Terceiros", url: "/Crachá" },
      ]
    }
  ];

  return (
    <div className={styles.perfil}>
      <div className={styles.titulo}>
        <h1>RH Admissão</h1>
      </div>
      <div className={styles.dados_container}>
        {sectionsa.slice(0, 3).map((section) => (
          <div className={styles.rh} key={section.title}>
            <div className={styles.titulo_rh}>
              <h2>{section.title}</h2>
            </div>
            <div className={styles.conteudo}>
              <form className={styles.form}>
                <ul className={styles.lista_nomes}>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.url}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </form>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dados_container}>
        {sectionsa.slice(3, 6).map((section) => (
          <div className={styles.rh} key={section.title}>
            <div className={styles.titulo_rh}>
              <h2>{section.title}</h2>
            </div>
            <div className={styles.conteudo}>
              <form className={styles.form}>
                <ul className={styles.lista_nomes}>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.url}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formulario;
