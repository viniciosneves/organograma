import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const times = [
    {
      nome: 'Programação',
      fundo: '#E8FFFF'
    },
    {
      nome: 'Front-End',
      fundo: '#E9FFE3'
    },
    {
      nome: 'Data Science',
      fundo: '#F5E6FF'
    },
    {
      nome: 'Devops',
      fundo: '#FFE9E9'
    },
    {
      nome: 'UX e Design',
      fundo: ''
    },
    {
      nome: 'Mobile',
      fundo: ''
    },
    {
      nome: 'Inovação e Gestão',
      fundo: ''
    },
]

  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}/>
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
      </section>
    </div>
  );
}

export default App;
