import Nome from "./components/Nome";
import { useState } from 'react';

function App() {
  const [aluno, setAluno] = useState('Sujeito Programador');
  const [nome, setCad] = useState('');
  const [idade, setIda] = useState('');
  const [email, setEma] = useState('');
  const [user, setUser] = useState({});
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Estudar',
    'Pausar os estudos',
    'voltar aos estudos',
  ]);



  function handleChangeName() {
    setAluno('teste');
  }

  function handlerRegister(e) {
    e.preventDefault();

    alert('Usuario Cadastrado!')
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })

  }

  function handlerTarefas(e) {
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput('');
  }

    return (
      <div>
        <h1>Bem vindo ao meu projeto</h1> <br></br>
        <h2>Olá {aluno}</h2>
        <button onClick={handleChangeName}>Mudar Nome</button>
        <p></p>

        <form onSubmit={handlerRegister}>
          <br />
          <label>Nome</label><br />
          <input placeholder='Digite seu nome' value={nome} onChange={(e) => setCad(e.target.value)} /><br /><br />

          <label>Idade</label><br />
          <input placeholder='Digite sua idade' value={idade} onChange={(e) => setIda(e.target.value)} /><br /><br />

          <label>Email</label><br />
          <input placeholder='Digite seu email' value={email} onChange={(e) => setEma(e.target.value)} /><br /><br />

          <button type="submit">Registar</button>
        </form>
        <br /><br />

        <div>
          <span>Bem Vindo: {user.nome} </span><br />
          <span>Idade: {user.idade} </span><br />
          <span>Email: {user.email} </span><br />
        </div>

        <form onSubmit={handlerTarefas}>
          <br />
          <label>Registro de Tarefas</label><br />
          <input placeholder='Digite sua tarefa' value={input} onChange={(e) => setInput(e.target.value)} /><br /><br />
          <button type="submit">Registar</button>
          </form>
        <br /><br />

        <ul>{tarefas.map(tarefas => (
          <li key={tarefas}>{tarefas}</li>
        ))}
        </ul>


      </div>

    );
  }

export default App;
