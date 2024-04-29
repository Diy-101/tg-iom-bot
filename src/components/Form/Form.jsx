import React, {useEffect} from 'react';
import "./Form.css"
const tg = window.Telegram.WebApp;

const Form = () => {
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const [subject, setSubject] = React.useState('physical');

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send the data'
        })
    }, []);

    useEffect(() => {
        if(!city || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city])

    const onChangeCountry = (event) => {
        setCountry(event.target.value);
    }
    const onChangeCity = (event) => {
        setCity(event.target.value);
    }
    const onChangeSubject = (event) => {
        setSubject(event.target.value);
    }


    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input value={country} className={'input'} type="text" placeholder={'Country'} onChange={onChangeCountry}/>
            <input value={city} className={'input'} type="text" placeholder={'City'} onChange={onChangeCity}/>
            <select value={subject} className={'select'} onChange={onChangeSubject}>
                <option value={'physial'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;