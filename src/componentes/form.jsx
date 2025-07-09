import "./form.css";
import Filter from "./filter";
import { useState } from "react";

export default function Form({tarefas, setTarefas, adicionaTarefa, tarefa, setTarefa}) {
  

  return (
    <>
      

      

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
      </>
  )

      }