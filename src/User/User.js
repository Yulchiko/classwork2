import "./OneUser.css"

const User  = ({user}) => {
    const {id, name, surname, email} = user;

    return(
        <div className="Users">
            <p className="User"> {id} - {name}  {surname} -  {email}</p>
        </div>
    );

};
export default User;