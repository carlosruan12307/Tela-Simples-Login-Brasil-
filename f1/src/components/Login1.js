import '../Login1.css';
function Login1(){
    return(
        
       
 <body className="border border-primary">
   
      <form className=" d-flex  flex-column  text-white border border-primary p-4 m-3 form was-validated" >
     <img className="w-25 m-auto d-block" src="data:image/png;base64,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"/>
        <label className="align-self-center flex-wrap mb-3 p-3 login">LOGAR NO SISTEMA</label>
        <div className="form-floating pb-3">
        
        <input id="email" placeholder="digite seu email" type={'email'} className="form-control" required></input>
        <label className="text-black" for="email">Email</label>
        <div className='valid-feedback valid'>Tudo Certinho Bro!</div>
        <div className='invalid-feedback invalid'>Deu Ruim!</div>
        </div>
        <div className="form-floating">
         
        <input id="t" placeholder="digite" className="form-control" type={'password'} required></input>
        <label  className="text-black" for="t">Senha</label>
        <div className='valid-feedback valid'>Tudo Certinho Bro!</div>
        <div className='invalid-feedback invalid'>Deu Ruim!</div>
        </div>
        
        <div className="mt-3 input-group">
        <input type="checkbox" className="me-1 form-check"></input>
        <label className=" ">Lembrar-me</label>
        </div>
<div className="text-center">
<button className="w-100 mt-3 btn btnB">Entrar</button>
<a className="m-2 btn btnB">Efetuar Cadastro</a>
</div>
      
       
      </form>


        </body>
     
    )
       
       
}

export default Login1;