import './Card.css';

const MeuCard = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default MeuCard;