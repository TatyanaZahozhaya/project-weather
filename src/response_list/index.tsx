import { useParams } from 'react-router-dom';
import { SharedComponents } from '@shared';

export const ResponseList = () => {
    const { name } = useParams();

    if (!name) {
        return <SharedComponents.WarningMessage text="No city id" />;
    }

    return <SharedComponents.CitiesList name={name} />;
};
