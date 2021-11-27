import React from 'react';
import './styles.scss';
import curatorPhoto from '../../images/imagem-perfil.jpg';


function CuratorItem() {
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="foto do perfil" />
            </div>
            <div className="curator__details">
                <div>

                <h3>Victor Alves</h3>
                <h6>Curadoria</h6>
                </div>
                <p>Sou formado em Redes de Computadores, trabalho a empresa Cencosud S.A prestando suporte N2 a outras equipes como serviço financeiro, área de retail, área SAP, RH, Redes, DataCenter, Encantado pela área de desenvolvimento/programação resolvi me dedicar e estudar para adquirir mais conhecimento e abrir leque de novas oportunidades.
                </p>

            </div>

        </div>

    )


}

export default CuratorItem