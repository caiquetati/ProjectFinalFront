import React, { useState } from 'react';
import axios from 'axios';
import styles from './Cadastro.module.css';
import logo from './logo-tokio-marine-seguradora-256 (1).png'; // ajuste o caminho conforme necessário

const PerfilCadastro = () => {
  const initialPerfilState = {
    nome: '',
    centroCusto: '',
    userInclusao: '',
    dataInclusao: '',
    ativo: '',
  };

  const [perfil, setPerfil] = useState(initialPerfilState);
  const [mensagem, setMensagem] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerfil({ ...perfil, [name]: value });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const dataMaisUmDia = new Date(value);
    dataMaisUmDia.setDate(dataMaisUmDia.getDate());
    setPerfil({ ...perfil, [name]: dataMaisUmDia.toISOString().split('T')[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/servico/inserir', perfil);
      console.log('Perfil cadastrado com sucesso:', response.data);
      setPerfil(initialPerfilState); // Limpa os campos do formulário após salvar
      setMensagem({ texto: 'Perfil cadastrado com sucesso!', tipo: 'sucesso' });
    } catch (error) {
      console.error('Erro ao cadastrar perfil:', error);
      setMensagem({ texto: 'Erro ao cadastrar perfil.', tipo: 'erro' });
    }
  };

  return (
    <section className={styles.perfilCadastro}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.titulo_cadastro}>
        <h1>Cadastro de Perfil</h1>
        <image src={logo}/>
      </div>

      {mensagem && (
        <div className={`${styles.mensagem} ${styles[mensagem.tipo]}`}>
          {mensagem.texto}
        </div>
      )}

      <div className={styles.formularioCadastro}>
        <form onSubmit={handleSubmit}>
          <div className={styles.campoFormulario}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={perfil.nome}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.campoFormulario}>
            <label htmlFor="centroCusto">Centro de Custo:</label>
            <input
              type="number"
              id="centroCusto"
              name="centroCusto"
              value={perfil.centroCusto}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.campoFormulario}>
            <label htmlFor="userInclusao">Usuário de Inclusão:</label>
            <input
              type="text"
              id="userInclusao"
              name="userInclusao"
              value={perfil.userInclusao}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.campoFormulario}>
            <label htmlFor="dataInclusao">Data de Inclusão:</label>
            <input
              type="date"
              id="dataInclusao"
              name="dataInclusao"
              value={perfil.dataInclusao}
              onChange={handleDateChange}
            />
          </div>
          <div className={styles.campoFormulario}>
            <label htmlFor="ativo">Ativo:</label>
            <select
              id="ativo"
              name="ativo"
              value={perfil.ativo}
              onChange={handleInputChange}
            >
              <option value="">Selecione</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
          <div className={styles.campoFormulario}>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PerfilCadastro;
