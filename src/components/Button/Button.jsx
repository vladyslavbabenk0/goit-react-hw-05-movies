import { StyledNavLink } from '../App.styled';
import style from '../App.module.css';

export const Button = () => {
    return (
        <div>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
            <div className={style.line}></div>
        </div>
    );
}
