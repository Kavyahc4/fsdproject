import React from 'react'



//element
//component

//let jsx=<h1>Hello react with jsx!!</h1>

//let element=React.createElement('h1',{},'This is the React without jsx!!!')

//embed the js expressions or values inside the jsx for example
// const name="sname"
// let element=<h1> heloo ,{name}</h1>

//if u are using mulltple elements like h1,p tags you should wrap with using <> </>
// let element=(
//   <>
//     <h1>helooo</h1>
//     <p>world!!</p>
//   </>
// )

//component
//functional component,class component
//functional component
  // function Component(){
  //   return <h1> I am a Functional componenent!!</h1>
  // }
  function Child1(){
    return <h1 className='child1'> I am a Child1 componenent!!</h1>
  }
  function Child2(){
    return <h1 style={{background:"green" ,color:"white"}}> I am a Child2 componenent!!</h1>
  }
  function Child3(){
    return <h1> I am a Child3 componenent!!</h1>
  }
  
  function Parent(){
    return (
      <>
        <Child2/>
        <Child3/>
        <Child1/>
      </>
    )
  }

export default Parent;