import CKI_Logo from '../../assets/images/ckilogo.png';
import './styles.css';

export function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <img src={CKI_Logo} width="100" alt="cki logo" />
      </div>
      <div className='header-right'>
        <div className="header-name">
        circle k
        </div>
        <div className="header-school">
          cal poly pomona
        </div>
      </div>
    </div>

  );
}


