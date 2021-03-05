import React from 'react'

import {Link} from 'react-router-dom'
import { MdAssignment,MdFolder } from "react-icons/md";
import { AiOutlineInbox } from "react-icons/ai";
import './styles.css'
import Footer from '../components/footer'
import logo from '../../assets/logo.png'

const Home = () => {

    return (
        <div id="page-home">
             <header>
                    <img src={logo} alt="Ecoleta" />
                </header>
            <div className="content">
                

                <main>
                    <h1>Seu portal para<br/> listegem de dados</h1>
                    <p>Selecione os dados que deseja listar</p>
                    <div className="buttom">
                    {/* Link to é igual a a href */}
                    <Link to="/postagens">
                        <span>
                         <MdAssignment/>
                        </span>
                        <strong>Listar Postagens</strong>
                    </Link>
                    <Link to="/albuns">
                        <span>
                         <MdFolder/>
                        </span>
                        <strong>Listar Albuns</strong>
                    </Link>
                    <Link to="/todos">
                        <span>
                        <AiOutlineInbox/>
                        </span>
                        <strong>Listar Todos</strong>
                    </Link>
                    </div>
                </main>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Home