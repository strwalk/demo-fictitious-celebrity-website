'use client';

import { useRouter } from 'next/navigation';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';

export default function DropDownMenu() {
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Menu</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="menu"
        variant="flat"
        onAction={(key) => router.push(key.toString())}
      >
        <DropdownItem key="/">Top</DropdownItem>
        <DropdownItem key="/news">News</DropdownItem>
        <DropdownItem key="/profile">Profile</DropdownItem>
        <DropdownItem key="/blogs">Blog</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
