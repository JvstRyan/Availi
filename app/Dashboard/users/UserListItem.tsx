import { Users } from "@/app/api/users";
import { Button, Tooltip } from "@mui/material/";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import UserEditModal from "./UserEditModal";


const UserListItem = ({name, email, roles, id }: Users) => {


  return (
    <>
        <ul className="flex justify-evenly gap-x-36 items-center text-white  border-b-2 border-secondary p-5">
           <UserEditModal id={id} name={name} email={email} roles={roles} />
              <li className="min-w-36 max-w-36 truncate">{name}</li>
              <Tooltip title={email} arrow>
              <li className=" min-w-36 max-w-36 truncate">{email}</li>
              </Tooltip>
              <li className="min-w-24 max-w-24 truncate">{roles}</li>
            <Button><FaRegTrashAlt color="white" size={"20px"} /></Button>
          </ul>
    </>
  );
};

export default UserListItem;
