
import { InputText } from 'primereact/inputtext'; 
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
               
const Login = () => {

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const {register, handleSubmit} = useForm();

    const { setLogado } = useContext(Context);

    const navigate = useNavigate();

    function logar (dados) {
        if(dados.email == "isaiaswebnet@gmail.com" && dados.senha == "123456") {
            setLogado (true);
            navigate('/home');
        }
    }

    return ( 
        <>
            <div className='bg-primary-500 h-screen flex align-items-center justify-content-center px-3'>
                <form onSubmit={handleSubmit(logar)} className='col-12 md:col-3 surface-0 p-3 border-round-md'>
                <h3 className='text-center mt-0 text-4xl'>Seja bem-vindo</h3>
                    <label 
                        htmlFor="email"
                        className='block uppercase font-bold text-sm mb-1'>E-mail: </label>
                    <InputText
                        id='email'
                        placeholder='email@email.com'
                        className='mb-3 w-full surface-0 text-color'
                        {...register('email', { required: true })}
                    />
                    <label 
                        htmlFor="senha"
                        className='block uppercase font-bold text-sm mb-1'>Senha: </label>
                    <div className='mb-3'>
                        <IconField>
                            <InputIcon 
                                className={`pi ${mostrarSenha ? 'pi-eye': 'pi-eye-slash'} cursor-pointer`}
                                onClick={() => setMostrarSenha(!mostrarSenha)} />
                            <InputText
                                type={mostrarSenha ? 'text' : 'password'}
                                id='senha'
                                placeholder='******'
                                className='w-full'
                                {...register('senha', { required: true })}
                            />
                        </IconField>
                    </div>
                    <Button 
                        label="Entrar"
                        type='Submit'
                        className='w-full' 
                    />
                </form>
            </div>
        </>
     );
}
 
export default Login;