import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SharedComponents, Actions, useAppDispatch, Paths } from '@shared';

export const SearchField = () => {
    const [name, setName] = useState('');
    const dispatch = useAppDispatch();
    const { addCityName } = Actions;
    const nameField = useRef<HTMLAnchorElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value.length >= 0) {
            setName(e.target.value);
        }
    };

    const onSubmitForm = (e: React.FormEvent): void => {
        e.preventDefault();
        if (name.length === 0) {
            alert('enter city name ');
        } else {
            dispatch(addCityName(name));
            setName('');
        }
        if (nameField.current !== null) {
            nameField.current.click();
        }
    };

    return (
        <>
            <SharedComponents.FormSearchField onSubmit={onSubmitForm}>
                <Link
                    ref={nameField}
                    to={`${Paths.RESPONSE_LIST}/${name}`}
                />
                <SharedComponents.InputSearchField
                    label="Enter city name"
                    ariaLabel="city ​​search form"
                    value={name}
                    onChange={handleChange}
                />
            </SharedComponents.FormSearchField>
        </>
    );
};
