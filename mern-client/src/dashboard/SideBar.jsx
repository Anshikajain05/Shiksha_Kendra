import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import userImg from "../assets/profile.jpg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Sidebar>
        <SidebarLogo href="#" img={userImg} imgAlt="logo">
          <p>{user?.displayName || "Admin"}</p>
        </SidebarLogo>

        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem icon={HiChartPie}>
              <Link to="/admin/dashboard">Dashboard</Link>
            </SidebarItem>

            <SidebarItem icon={HiOutlineCloudUpload}>
              <Link to="/admin/dashboard/Upload">Uploadbook</Link>
            </SidebarItem>

            <SidebarItem icon={HiInbox}>
              <Link to="/admin/dashboard/ManageBook">ManageBook</Link>
            </SidebarItem>

            <SidebarItem icon={HiUser}>
              <Link to="/admin/dashboard/users">Users</Link>
            </SidebarItem>

            <SidebarItem icon={HiShoppingBag}>
              Materials
            </SidebarItem>

            {/* Conditional Auth UI */}
            {user ? (
              <SidebarItem icon={HiTable}>
                <Link to="/logout">Log Out</Link>
              </SidebarItem>
            ) : (
              <SidebarItem icon={HiArrowSmRight}>
                <Link to="/login">Sign In</Link>
              </SidebarItem>
            )}
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
};

export default SideBar;
