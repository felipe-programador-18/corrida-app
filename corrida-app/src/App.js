import React, {useState} from 'react';
import Button from './button';
import './App.css';
import Paragrafo from './paragr';
import Remember from './remmeber';
import Create from './create';


function App(){
// setflag another code to remember
const [one, setone] = useState(0) 

//practice about useState
  const [Maisone, setAumenta] = useState(0)
  const Increased = () => {
     setAumenta(Maisone+1)
     console.log('test here')

     setone(one+1)
     console.log('test click here', + one)
  }
 const Decrement = () => {
   setAumenta(Maisone-1)
   
 }

 //here is tagget element of set in the choise!!!
 const [brand, setBrand] = useState('')

 // work local storage!!////////////////
 const [valor, setValor] = useState('')
 const [mostrar, setMostrar] = useState('')

const Addinging = (chave, valor) =>{
  localStorage.setItem(chave,valor)
}

const Busca = (chave) =>{
  localStorage.getItem( chave.id)
  alert('Name search is: ' + valor)
}

const Apaga = (chave) =>{
  localStorage.removeItem(chave)
}


const Seeing = () => {
  setMostrar(mostrar+1)
}
//////////////////////////////////////

const Aumenta = (props) =>{
    return (
      <p>
       {props.more}
         </p>
       )
  }
  const Caught = (props) =>{
   return(
    <h1>
   {props.text}
   </h1>
   )
  }

 
 //here i get value of option!!
const Pegaopt = (props) =>{
  return(
    <option>{props.value}</option>
  )
}








  return (
    <div className="App">
    
    <Caught text='let is starte now!!!'/>

    <Paragrafo text = 'testando now!!!' />
    
   
    <Aumenta more={Maisone} />
    <Button text ='+' onClick={Increased}  />
    <Button text='-' onClick={Decrement} /><br/>
   
    
    <select muda={brand}  onChange={(e) => setBrand(e.target.value)}  >
    
    <Pegaopt value='ferrari'/>
    <Pegaopt value='lamburguini'/>
    <Pegaopt value='camaro'  />
    <Pegaopt value='renalt' />
    </select>
    <Paragrafo text= {'you select: ' + brand} />



    <label> Escreva um nome :</label>
    <input type='text'   value ={valor.id}      onChange={(e) => setValor(e.target.value)}  />
    <Button text='armazena' onClick={() => Addinging('ls_name', valor.id)}       />
    <Button text ='busca' onClick={() => Busca('ls_name')} />
    <Button text ='Deleta' onClick={() => Apaga('ls_name')} />
      <br/> {valor}
   

      <p text={valor} onChange= {(e) => Seeing(e.target.valor)}     />

      <Remember kimore = 'hi there i a again to practice more about react let jump right now' />
      

      <Aumenta more={one} />
      <Create missed= '+' onClick={Increased} />

    </div>
  );
}

export default App;
