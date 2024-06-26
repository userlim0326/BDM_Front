import React, { Fragment, useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  MenuSeparator,
} from "@headlessui/react";
import { useStore } from "../../Store"; // Zustand store 가져오기
import "../layout/Header.css";
import { Link } from "react-router-dom";
import { useUserImage } from "../../hooks/useUserImage"; // useUserImage 훅 가져오기
import useToken from "../../hooks/useToken";

const UserProfile = () => {
  const toggleLogin = useStore((state) => state.toggleLogin);
  const [userImage, setUserImage] = useState<string>(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  );

  const token = useToken();

  const { userImage: fetchedUserImage, loading } = useUserImage(token!);

  useEffect(() => {
    if (token && !loading && fetchedUserImage) {
      setUserImage(fetchedUserImage);
    }
  }, [token, loading, fetchedUserImage]);

  const handleLogout = () => {
    toggleLogin();
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    localStorage.removeItem("userImage"); // 이미지 파일 삭제
    alert("로그아웃되었습니다.");
  };

  return (
    <React.Fragment>
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="menu-button">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img className="h-12 w-12 rounded-full" src={userImage} alt="" />
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="menu-items">
            <MenuItem>
              {({ focus }) => {
                const itemClassName = `${focus ? "bg-gray-100" : ""} block w-full rounded-md px-3 py-2 text-left text-sm text-gray-700`;
                return (
                  <Link to={"/MyPageHome"}>
                    <button className={itemClassName}>마이페이지</button>
                  </Link>
                );
              }}
            </MenuItem>
            <MenuItem>
              {({ focus }) => {
                const itemClassName = `${focus ? "bg-gray-100" : ""} block w-full rounded-md px-3 py-2 text-left text-sm text-gray-700`;
                return <button className={itemClassName}>설정</button>;
              }}
            </MenuItem>
            <MenuSeparator className="mx-1 my-1 h-px bg-gray-200" />
            <MenuItem>
              {({ focus }) => {
                const itemClassName = `${focus ? "bg-gray-100 text-red-600" : "text-red-600"} block w-full rounded-md px-3 py-2 text-left text-sm text-gray-700`;
                return (
                  <button className={itemClassName} onClick={handleLogout}>
                    로그아웃
                  </button>
                );
              }}
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </React.Fragment>
  );
};

export default UserProfile;
