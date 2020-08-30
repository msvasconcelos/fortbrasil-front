/* eslint-disable arrow-parens */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

interface dataInstitution {
  id: string;
  name: string;
  location: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();

  const [institutions, setInstitutions] = useState<dataInstitution[]>([]);

  useEffect(() => {
    async function loadInstitution(): Promise<void> {
      const response = await api.get('/institution');
      console.log(response);

      const repository = response.data;

      setInstitutions(repository);
    }

    loadInstitution();
  }, []);

  async function deleteInstitution(id: string): Promise<void> {
    await api.delete(`/institution/${id}`);
    history.go(0);
  }

  return (
    <>
      <Container>
        <span>LISTA DE ESTABELECIMENTOS</span>
        {institutions.map(institution => (
          <tr key={institution.id}>
            <td className="name">{institution.name}</td>
            <td className="name">{institution.location}</td>
            <td className="name">{institution.status}</td>
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
      </Container>
    </>
  );
};

export default Dashboard;
