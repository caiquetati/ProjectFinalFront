import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import styles from './Perfil.module.css';
import axios from 'axios';
import logo from './logo-tokio-marine-seguradora-256 (1).png';
import Excluir from './Excluir'; // Importe o componente de exclusão

Modal.setAppElement('#root');

const PerfilAcessos = () => {
  const sections = [
    {
      title: "Filtro",
      fields: [
        { id: "id", label: "ID", placeholder: "Digite o ID", type: "text" },
        { id: "nome", label: "Nome", placeholder: "Digite o nome", type: "text" },
        { id: "centrocusto", label: "Centro de Custo", placeholder: "Digite o Centro de Custo", type: "text" },
        { id: "ativo", label: "Ativo", type: "select", options: ["Sim", "Não"] }
      ]
    }
  ];

  const [dados, setDados] = useState([]);
  const [filtros, setFiltros] = useState({
    id: '',
    nome: '',
    centrocusto: '',
    ativo: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [perfilToEdit, setPerfilToEdit] = useState(null);
  const [perfilToDelete, setPerfilToDelete] = useState(null);

  useEffect(() => {
    fetchDados();
  }, [filtros]);

  const fetchDados = async (params = {}) => {
    try {
      const response = await axios.get('http://localhost:8080/servico/buscar', { params });
      setDados(response.data);
      console.log('Dados recebidos:', response.data);
    } catch (error) {
      console.error('Houve um erro ao buscar os dados!', error);
    }
  };

  const handleFiltroChange = (e) => {
    const { id, value } = e.target;
    setFiltros({ ...filtros, [id]: value });
  };

  const handleFiltroSubmit = (e) => {
    e.preventDefault();
    fetchDados(filtros);
  };

  const handleCadastroPerfil = async () => {
    const novoPerfil = {
      nome: "Novo Perfil",
      centroCusto: 1234.0,
      userInclusao: "Usuário",
      dataInclusao: "",
      ativo: "Sim"
    };

    try {
      const response = await axios.post('http://localhost:8080/servico/inserir', novoPerfil);
      console.log('Perfil cadastrado com sucesso:', response.data);
      fetchDados();
    } catch (error) {
      console.error('Erro ao cadastrar perfil:', error);
    }
  };

  const openModal = (perfil) => {
    setPerfilToEdit(perfil);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPerfilToEdit(null);
  };

  const handleAlterar = async () => {
    try {
      const response = await axios.put('http://localhost:8080/servico/alterar', perfilToEdit);
      console.log('Perfil alterado com sucesso:', response.data);
      closeModal();
      fetchDados();
    } catch (error) {
      console.error('Erro ao alterar perfil:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerfilToEdit({ ...perfilToEdit, [name]: value });
  };

  const handleExcluir = async () => {
    if (perfilToDelete) {
      try {
        await axios.delete(`http://localhost:8080/servico/${perfilToDelete.id}`);
        console.log('Perfil excluído com sucesso');
        fetchDados();
        setPerfilToDelete(null); // Limpar o perfilToDelete após a exclusão
      } catch (error) {
        console.error('Erro ao excluir perfil:', error);
      }
    }
  };

  const openDeleteModal = (perfil) => {
    setPerfilToDelete(perfil);
    setIsModalOpen(true);
  };

  return (
    <section className={styles.perfil}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.titulo_perfil}>
        <h1>Perfil de Acesso</h1>
      </div>
      <div className={styles.consulta_container_perfil}>
        <div className={styles.header_container_perfil}>
          <h3 className={styles.subtitulo}>Dados da consulta</h3>
          <Link to="/cadastro-perfil" className={styles.incluir_perfil}>Incluir Perfil Acesso</Link>
        </div>

        <div className={styles.dados_container_perfil}>
          {sections.map((section, index) => (
            <div className={styles.rh_perfil} key={index}>
              <div className={styles.titulo_rh_perfil}>
                <h2>{section.title}</h2>
              </div>
              <div className={styles.conteudo_perfil}>
                <form className={styles.form_perfil} onSubmit={handleFiltroSubmit}>
                  <div className={styles.field_container_perfil}>
                    {section.fields.map((field) => (
                      <div className={styles.campo_form_perfil} key={field.id}>
                        <label htmlFor={field.id}>{field.label}</label>
                        {field.type === "select" ? (
                          <select
                            id={field.id}
                            name={field.id}
                            className={styles.input_perfil}
                            onChange={handleFiltroChange}
                            value={filtros[field.id]}
                          >
                            <option value="">Selecione</option>
                            {field.options.map((option, index) => (
                              <option key={index} value={option}>{option}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            placeholder={field.placeholder}
                            className={styles.input_perfil}
                            onChange={handleFiltroChange}
                            value={filtros[field.id]}
                          />
                        )}
                      </div>
                    ))}
                    <button type="submit" className={styles.incluir_perfil}>Filtrar</button>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tabela_container}>
          <h1 className={styles.dados}>Lista de Dados:</h1>
          <table className={styles.tabela}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Centro de Custo</th>
                <th>Usuário Inclusão</th>
                <th>Data Inclusão</th>
                <th>Ativo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((dado) => (
                <tr key={dado.id}>
                  <td>{dado.id}</td>
                  <td>{dado.nome}</td>
                  <td>{dado.centroCusto}</td>
                  <td>{dado.userInclusao}</td>
                  <td>{dado.dataInclusao}</td>
                  <td>{dado.ativo}</td>
                  <td>
                    <button
                      className={styles.btnAlterar}
                      onClick={() => openModal(dado)}
                    >
                      Alterar
                    </button>
                    <button
                      className={styles.btnExcluir}
                      onClick={() => openDeleteModal(dado)} // Chame openDeleteModal ao invés de handleExcluir diretamente
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Excluir
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleExcluir}
      />

      <Modal
        isOpen={isModalOpen && !!perfilToEdit}
        onRequestClose={closeModal}
        contentLabel="Editar Perfil"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        {perfilToEdit && (
          <div>
            <h2 className={styles.modalTitle}>Editar Perfil</h2>
            <form className={styles.form_modal}>
              <div className={styles.modalField}>
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={perfilToEdit.nome}
                  onChange={handleInputChange}
                  className={styles.modalInput}
                />
              </div>
              <div className={styles.modalField}>
                <label>Centro de Custo:</label>
                <input
                  type="text"
                  name="centroCusto"
                  value={perfilToEdit.centroCusto}
                  onChange={handleInputChange}
                  className={styles.modalInput}
                />
              </div>
              <div className={styles.modalField}>
                <label>Usuário Inclusão:</label>
                <input
                  type="text"
                  name="userInclusao"
                  value={perfilToEdit.userInclusao}
                  onChange={handleInputChange}
                  className={styles.modalInput}
                />
              </div>
              <div className={styles.modalField}>
                <label>Data Inclusão:</label>
                <input
                  type="date"
                  name="dataInclusao"
                  value={perfilToEdit.dataInclusao}
                  onChange={handleInputChange}
                  className={styles.modalInput}
                />
              </div>
              <div className={styles.modalField}>
                <label>Ativo:</label>
                <select
                  name="ativo"
                  value={perfilToEdit.ativo}
                  onChange={handleInputChange}
                  className={styles.modalInput}
                >
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              <div className={styles.modalButtons}>
                <button type="button" onClick={handleAlterar} className={styles.modalButtonSalvar}>
                  Salvar
                </button>
                <button type="button" onClick={closeModal} className={styles.modalButtonCancelar}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default PerfilAcessos;
