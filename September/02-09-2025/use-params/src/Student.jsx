import {Link, Outlet, useParams} from "react-router-dom";

const Student = () => {
    const params = useParams();
    const {firstName} = params;

    return (
        <div>
            <h1>Hello, {firstName}!</h1>
            <Outlet />
        </div>
    );
}

export default Student;