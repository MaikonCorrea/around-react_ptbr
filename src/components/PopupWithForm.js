import React from 'react';

export default function PopupWithForm(props) {
    return (
        <form className={`${props.name} ${props.isOpen ? 'popup_opened' : ''}`} name={props.name}>
            <div className={`${props.name}__popup`}>
                <h2 className={`${props.name}__popup-title`}>{props.title}</h2>
                {props.children}
                <button name="button" className={`${props.name}__button-save`} type="submit" disabled={props.isSaving}> 
                    <span className={`loading-button-text`}>{props.isSaving ? 'Salvando...' : 'Salvar'}</span>
                    <span className={`loading-container`}>
                    <span className={`loading-animation`}></span>
                    </span>
                </button>
                <button className={`${props.name}__button-close-popup button-close-popup`}></button>
            </div>
        </form>
    )

}