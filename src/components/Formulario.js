import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
import PropTypes from 'prop-types'; 

const Formulario = ({guardarCategoria}) => {
    
    const OPCIONES = [ 
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertaiment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sport', label: 'Deporte'},
        {value: 'technology', label: 'Tecnologia'}
    ]


    const [categoria, SelectNoticias] = useSelect('general', OPCIONES); 

    // sumit para el form le pase categoria appj
    const buscadorNoticias = e => { 
        e.preventDefault(); 
        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscadorNoticias}
                >

                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    
                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-bolck']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>

                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = { 
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;