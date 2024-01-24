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
      <Menu.Items className="flex flex-col items-start w-40 gap-1 p-0.5 bg-black absolute top-full right-0 rounded translate-y-2">
        <Menu.Item>
          {({ active }) => (
            <a
              className={`p-2 w-full ${active && "bg-backdrop "}`}
              href="/account-settings"
            >
             Profile
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
            className={`p-2 w-full ${active && "bg-backdrop "}`}
              href="/account-settings"
            >
                Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
            className={`p-2 w-full ${active && "bg-backdrop "}`}
              href="/account-settings"
            >
                Log out
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default User;
