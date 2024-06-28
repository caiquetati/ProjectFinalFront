import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './Perfil.module.css'; // Importe os estilos do Perfil.module.css

Modal.setAppElement('#root');

const Excluir = ({ isOpen, onClose, onConfirm }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleConfirm = () => {
    if (isChecked) {
      onConfirm();
      onClose();
    } else {
      alert('Você precisa marcar a caixa "Li e estou ciente" para confirmar a exclusão.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmação de Exclusão"
      className={styles.modal} // Utilize as classes do Perfil.module.css aqui
      overlayClassName={styles.overlay} // Utilize as classes do Perfil.module.css aqui
    >
      <div className={styles.warning}>
        <h2>Warning</h2>
        <p>Tem certeza que deseja excluir esse item permanentemente?</p>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />{' '}
          Li e estou ciente
        </label>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleConfirm} className={styles.buttonExcluir}>
          Excluir
        </button>
        <button onClick={onClose} className={styles.buttonCancelar}>
          Cancelar
        </button>
      </div>
    </Modal>
  );
};

export default Excluir;
