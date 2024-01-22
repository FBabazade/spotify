import React from "react";
import { Menu } from "@headlessui/react";
const User = () => {
  return (
    <Menu as="nav" className="relative">
      <Menu.Button className="w-8 h-8 flex  items-center !bg-black rounded-full">
        <img
          src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2069741069832562&amp;height=50&amp;width=50&amp;ext=1708066447&amp;hash=Afrlsfj58CdKtaFM-4_corUFRK2BpqXQOVTPz-kt1LZ-TA"
          alt="Фаиль Бабаев"
          className="p-0.5 !rounded-full mMx2LUixlnN_Fu45JpFB Xz3tlahv16UpqKBW5HdK Yn2Ei5QZn19gria6LjZj"
        />
      </Menu.Button>
      <Menu.Items className="flex flex-col items-start w-48 gap-1 bg-iconhover absolute top-full right-0 rounded-md">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default User;
