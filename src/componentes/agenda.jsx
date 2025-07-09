
import "./form.css";
import Filter from "./filter";
import { useState } from "react";
import Form from "./form";

export default function Agenda() {
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

    setForm(!form);
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

  const [form,setForm] = useState(false)
    const conteudo = <Form tarefa={tarefa} tarefas={tarefas} setTarefa={setTarefa} setTarefas={setTarefas} adicionaTarefa={adicionaTarefa}/>

  return (
    <>

      <h1>Agenda Pessoal</h1>
      

      <button onClick={() => setForm(!form)}>{!form ? "Adicionar tarefa" : "Voltar"}</button>
        
      {form ? conteudo : ""}
        
    
    <h2>Minhas Tarefas</h2>
    
        {tarefas.length > 0 ? (
            <>
            <Filter tarefas={tarefas} setTarefas={setTarefas} />
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
            </>
            
        ) : (
            <p style={{ marginTop: "20px" }}>Nenhuma tarefa cadastrada.</p>
        )}
        </>
    );
    }
