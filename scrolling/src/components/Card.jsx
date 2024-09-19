 
 
const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={user.picture.large} alt={user.name.first} />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Card;
