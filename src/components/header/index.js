import Ckilogo from '../../assets/images/ckilogo.png';
import './styles.css';

export function Header ()
{
    return (
    <div className='header'>
        <div className='header-left'>
            <img src={Ckilogo} width= '100' /> 
        </div>
        <div className='header-right'>
            <div>
                circle k
            </div>
            <div>
                cal poly pomona
            </div>
        </div>
    </div>
    );
}
