import "./form.css";
import Filter from "./filter";
import { useState } from "react";

export default function Form() {
  const [tarefa, setTarefa] = useState({
    nome: "",
    status: "",
    prioridade: "",
    dataInicio: "",
    dataTermino: "",
  });

  const [tarefas, setTarefas] = useState([]);

  const adicionaTarefa = (e) => {
    e.preventDefault();

    if (
      !tarefa.nome ||
      !tarefa.status ||
      !tarefa.prioridade ||
      !tarefa.dataInicio ||
      !tarefa.dataTermino
    ) {
      alert("Preencha todos os campos.");
      return;
    }

    setTarefas([...tarefas, tarefa]);
    setTarefa({
      nome: "",
      status: "",
      prioridade: "",
      dataInicio: "",
      dataTermino: "",
    });
  };

  const concluirTarefa = (nome) => {
    const tarefasAtualizadas = tarefas.map((t) =>
      t.nome === nome ? { ...t, status: "Realizada" } : t
    );
    setTarefas(tarefasAtualizadas);
  };

  const reabrirTarefa = (nome) => {
    const tarefasAtualizadas = tarefas.map((t) =>
      t.nome === nome ? { ...t, status: "Não realizada" } : t
    );
    setTarefas(tarefasAtualizadas);
  };

  // Função que exclui uma tarefa da lista
  const excluirTarefa = (nome) => {
    // Filtra a lista de tarefas e remove aquela cujo nome corresponde ao informado
    const novasTarefas = tarefas.filter((t) => t.nome !== nome);

    // Atualiza o estado com a nova lista, sem a tarefa excluída
    setTarefas(novasTarefas);
  };

  /*
    Funcionalidade - Excluir:
    - Permite ao usuário remover tarefas que não são mais necessárias.
    - Mantém a lista de tarefas organizada e atualizada.
    - Evita acúmulo de tarefas obsoletas ou criadas por engano.
    - Dá controle total ao usuário sobre sua agenda.
  */

  // Função auxiliar para formatar data corretamente
  const formatarData = (data) => {
    return new Date(data + "T00:00:00").toLocaleDateString("pt-BR");
  };

  return (
    <>
      <h1>Agenda Pessoal</h1>

      <Filter tarefas={tarefas} setTarefas={setTarefas} />

      <form onSubmit={adicionaTarefa}>
        <label htmlFor="nome">Nome da tarefa:</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite o nome da tarefa"
          value={tarefa.nome}
          onChange={(e) => setTarefa({ ...tarefa, nome: e.target.value })}
        />

        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={tarefa.status}
          onChange={(e) => setTarefa({ ...tarefa, status: e.target.value })}
        >
          <option value="">Selecione o status</option>
          <option value="Não realizada">Não realizada</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Realizada">Realizada</option>
        </select>

        <label htmlFor="prioridade">Prioridade:</label>
        <select
          id="prioridade"
          value={tarefa.prioridade}
          onChange={(e) => setTarefa({ ...tarefa, prioridade: e.target.value })}
        >
          <option value="">Escolha a prioridade</option>
          <option value="Alta">Alta</option>
          <option value="Media">Média</option>
          <option value="Baixa">Baixa</option>
        </select>

        <label htmlFor="dataInicio">Data de Início:</label>
        <input
          id="dataInicio"
          type="date"
          value={tarefa.dataInicio}
          onChange={(e) => setTarefa({ ...tarefa, dataInicio: e.target.value })}
        />

        <label htmlFor="dataTermino">Data de Término:</label>
        <input
          id="dataTermino"
          type="date"
          value={tarefa.dataTermino}
          onChange={(e) => setTarefa({ ...tarefa, dataTermino: e.target.value })}
        />

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <h2>Minhas Tarefas</h2>
      {tarefas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Status</th>
              <th>Prioridade</th>
              <th>Início</th>
              <th>Término</th>
              <th colSpan={2}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {tarefas.map((tarefa) => (
              <tr key={tarefa.nome}>
                <td>{tarefa.nome}</td>
                <td>{tarefa.status}</td>
                <td>{tarefa.prioridade}</td>
                <td>{formatarData(tarefa.dataInicio)}</td>
                <td>{formatarData(tarefa.dataTermino)}</td>
                <td>
                  {tarefa.status === "Realizada" ? (
                    <button
                      className="botao-excluir"
                      onClick={() => reabrirTarefa(tarefa.nome)}
                    >
                      Reabrir
                    </button>
                  ) : (
                    <button
                      className="botao-concluir"
                      onClick={() => concluirTarefa(tarefa.nome)}
                    >
                      Concluir
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="botao-excluir"
                    onClick={() => excluirTarefa(tarefa.nome)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ marginTop: "20px" }}>Nenhuma tarefa cadastrada.</p>
      )}
    </>
  );
}
