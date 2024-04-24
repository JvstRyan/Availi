import { Users } from "@/app/api/users";
import { Tooltip } from "@mui/material/";
import UserEditModal from "./UserEditModal";
import UserDeleteModal from "./UserDeleteModal";


const UserListItem = ({name, email, roles, id }: Users) => {


  return (
    <>
        <ul className="flex justify-evenly gap-x-36 items-center border-b-2 border-secondary p-5">
           <UserEditModal id={id} name={name} email={email} roles={roles} />
              <li className="min-w-36 max-w-36 truncate">{name}</li>
              <Tooltip title={email} arrow>
              <li className=" min-w-36 max-w-36 truncate">{email}</li>
              </Tooltip>
              <li className="min-w-24 max-w-24 truncate">{roles}</li>
            <UserDeleteModal id={id} name={name}/>
          </ul>
    </>
  );
};

export default UserListItem;
