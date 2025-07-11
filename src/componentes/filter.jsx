
export default function Filter({ tarefas, setTarefas }) {

  
  function Reset() {
    setTarefas([]); 
  }

  
  function Ordenar(ordem) {
    if (ordem === "cres") {
      const tarefas_cres = [...tarefas].sort((a, b) =>
        a.nome.localeCompare(b.nome)
      );
      setTarefas(tarefas_cres); 
    } else {
      
      const tarefas_desc = [...tarefas].sort((a, b) =>
        b.nome.localeCompare(a.nome)
      );
      setTarefas(tarefas_desc); 
    }
  }

  
  const ordenarPorPrioridade = () => {
    const prioridadeValor = { Alta: 3, Media: 2, Baixa: 1 }; 
    const listaOrdenada = [...tarefas].sort(
      (a, b) =>
        (prioridadeValor[b.prioridade] - prioridadeValor[a.prioridade]) ?? 0
    );
    setTarefas(listaOrdenada); 
  };

  
// Função que ordena as tarefas pela data de início (do mais antigo para o mais recente)
const ordenarPorDataInicio = () => {
  // Usa sort para comparar as datas em formato de string
  const tarefasOrdenadas = [...tarefas].sort((a, b) =>
    a.dataInicio.localeCompare(b.dataInicio)
  );
  setTarefas(tarefasOrdenadas); // Atualiza a lista com a nova ordem
};

/*
Funcionalidade - Data de início: 
Ordenar por data de início permite ao usuário ver quais tarefas começaram primeiro.
Isso é útil para acompanhar o progresso, revisar tarefas pendentes antigas ou seguir uma ordem cronológica de execução.
*/

// Função que ordena as tarefas pela data de término (do mais antigo para o mais recente)
const ordenarPorDataTermino = () => {
  const tarefasOrdenadas = [...tarefas].sort((a, b) =>
    a.dataTermino.localeCompare(b.dataTermino)
  );
  setTarefas(tarefasOrdenadas);
};

/*
Funcionalidade - Data de término :
Ordenar por data de término ajuda o usuário a visualizar prazos e urgências.
É essencial para gerenciamento do tempo e planejamento, pois mostra quais tarefas precisam ser concluídas primeiro.
*/


  
  return (
    <div className="filter-buttons">
    
      <button onClick={Reset}>Reset</button>

      
      <span
        style={{
          alignSelf: "center",
          marginLeft: "10px",
          marginRight: "8px",
          color: "#ccc",
        }}
      >
        Filtrar por:
      </span>

      
      <button onClick={() => Ordenar("cres")}>Crescente</button>
      <button onClick={() => Ordenar("desc")}>Decrescente</button>
      <button onClick={ordenarPorPrioridade}>Prioridade</button>
      <button onClick={ordenarPorDataInicio}>Data de Início</button>
      <button onClick={ordenarPorDataTermino}>Data de Término</button>
    </div>
  );
}
