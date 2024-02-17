import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../redux/actions";

const Users = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.AppState.users);
  console.info("Users in User component", userState);

  return (
    <div>
      <button onClick={() => dispatch(getUsersRequest())}>Get Users</button>
      <div>
        USERS:{" "}
        {userState?.data?.map((user) => (
          <div key={user.id}>{user.email}</div>
        ))}
      </div>
    </div>
  );
};

export default Users;
