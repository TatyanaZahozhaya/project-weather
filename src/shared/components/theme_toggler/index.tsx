import { useSelector } from 'react-redux';
import { SharedComponents, IAppState, useAppDispatch, Actions } from '@shared';

export const ThemeToggler = () => {
    const { theme } = useSelector((state: IAppState) => state.theme);
    const dispatch = useAppDispatch();
    const { setAppTheme } = Actions;

    const onToggleTheme = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (e.currentTarget.value === 'light') {
            dispatch(setAppTheme('dark'));
        } else {
            dispatch(setAppTheme('light'));
        }
    };

    return (
        <SharedComponents.ThemeButton
            ariaLabel="theme toggler (light/dark)"
            title="theme toggler (light/dark)"
            onClick={onToggleTheme}
            value={theme}
        />
    );
};
