/* eslint-disable camelcase */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiUser, FiInfo, FiSmile } from 'react-icons/fi';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, TableContainer } from './styles';

interface dataInstitution {
  id: string;
  name: string;
  location: string;
  // eslint-disable-next-line camelcase
  created_at: Date;
}

interface createInstitution {
  name: string;
  location: string;
  // eslint-disable-next-line camelcase
  user_id: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();

  const [institutions, setInstitutions] = useState<dataInstitution[]>([]);
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function loadInstitution(): Promise<void> {
      const response = await api.get('/institution');
      console.log(response);

      const repository = response.data;

      setInstitutions(repository);
    }

    loadInstitution();
  }, []);

  const handleSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ({ name, user_id, location }: createInstitution) => {
      const institutionId = window.localStorage.getItem('@Fortbrasil:user');
      if (institutionId) {
        const userId = JSON.parse(institutionId);
        const testeIdUser = userId.id;
        await api.post('/institution', {
          location,
          name,
          user_id: testeIdUser,
        });
        history.go(0);
      }
    },
    [],
  );

  async function deleteInstitution(id: string): Promise<void> {
    try {
      await api.delete(`/institution/${id}`);
      history.go(0);
    } catch (error) {
      throw new Error('erro ao deletar');
    }
  }

  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="Todo List" />
        </div>
        {/* <a href="/">Voltar</a> */}
        <Link to="/">Voltar</Link>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastrar novo Estabelecimento</h1>

          <Input name="name" icon={FiSmile} placeholder="Nome da tarefa" />
          <Input name="location" icon={FiInfo} placeholder="Descricão" />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome do estabelecimento</th>
                <th>Localização</th>
                <th>Data criação</th>
                <th>#</th>
              </tr>
            </thead>

            <tbody>
              {institutions.map(institution => (
                <tr key={institution.id}>
                  <td className="title">{institution.name}</td>
                  <td className="">{institution.location}</td>
                  <td>{institution.created_at}</td>

                  <button
                    type="submit"
                    onClick={() => {
                      deleteInstitution(institution.id);
                    }}
                  >
                    Deletar
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
