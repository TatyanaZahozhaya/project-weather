import { useState } from 'react';

import { SharedComponents, Actions, useAppDispatch, Paths } from '@shared';

export const SearchField = () => {
    const [name, setName] = useState('');

    const dispatch = useAppDispatch();
    const { addCityName } = Actions;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value.length >= 0) {
            setName(e.target.value);
        }
    };

    const onSubmitForm = (e: React.FormEvent): void => {
        if (name.length === 0) {
            alert('enter city name ');
        } else {
            dispatch(addCityName(name)); 
            setName('');
        }
    };

    return (
        <SharedComponents.FormSearchField
            onSubmit={onSubmitForm}
            action={Paths.RESPONSE_LIST}
            target="_parent">
            <SharedComponents.InputSearchField
                label="Enter city name"
                ariaLabel="city ​​search form"
                value={name}
                onChange={handleChange}
            />
        </SharedComponents.FormSearchField>
    );
};
