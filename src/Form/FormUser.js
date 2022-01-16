import React, {useState} from 'react';

import './UserForm.css';

const FormUsers = (props) => {
    const {applyFilters} = props;
    const [filterUser, setFilter] = useState({name: '', username: '', email: ''});

    function setFilters() {
        applyFilters(filterUser);
    }

    function ClickName(e) {
        setFilter({...filterUser, name: e.target.value});
    }

    function ClickUsername(e) {
        setFilter({...filterUser, username: e.target.value});
    }

    function ClickEmail(e) {
        setFilter({...filterUser, email: e.target.value});
    }

    return (
        <div className="row">
            <form className="row">
                <div><label> Name:<input name="name" value={filterUser.name} onChange={ClickName}/></label></div>
                <div><label>UserName:<input name="username" value={filterUser.username} onChange={ClickUsername}/></label></div>
                <div><label>Email: <input name="email"value={filterUser.email} onChange={ClickEmail}/> </label> </div>
            </form>
            <button onClick={setFilters}>Click</button>
        </div>
    );
};

export default FormUsers;