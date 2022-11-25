import React, {useState, useEffect} from 'react';
import { supabase } from './conexao/conexao';
import './App.css'

const App = () => {

  const [produtos, setProdutos]=useState([])

  const [prod, setProduto]=useState({
    nome:'', preco:'', categoria:'', cod_interno:''
  })



console.log(prod)
 
//Listagem produtos 
  useEffect(() => {
    buscaProdutos()
  }, [])


  async function buscaProdutos(){
    const {data} = await supabase
    .from('Produtos')
    .select('*')
    setProdutos(data)



  }

  function handleChange(event){
    setProduto(prevFormData=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function criarProduto(){
    await supabase
    .from('Produtos')
    .insert({ 
      nome: prod.nome, 
      preco: prod.preco,
      categoria: prod.categoria,
      cod_interno: prod.cod_interno 
    })
  }

  return (
    <div>

      <form onSubmit={criarProduto}>
        <input
          type="text"
          placeholder="Nome Produto"
          name='nome'
          onChange={handleChange}
          />

        <input
          type="number"
          step="0.01" min="0" max="10"
          placeholder="Preço"
          name='preco'
          onChange={handleChange}
          />

        <input
          type="text"
          placeholder="Categoria"
          name='categoria'
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Cod. Interno"
          name='cod_interno'
          onChange={handleChange}
        />



        <button type='submit'>Adicionar</button>

      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Cod. Interno</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((data)=>
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.nome}</td>
              <td>{data.preco}</td>
              <td>{data.categoria}</td>
              <td>{data.cod_interno}</td>
            </tr>
        )}
        
        </tbody>
      </table>
    </div>
  )
}


export default App