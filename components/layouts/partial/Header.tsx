import cx from "clsx";
import { useState } from "react";
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  rem,
} from "@mantine/core";

import classes from "@/common/styles/HeaderTabs.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import ToggleTheme from "@/components/elements/ToggleTheme";
import Link from "next/link";

const user = {
  name: "Keimal Reyyan",
  email: "reyyankeimal1@gmail.com",
  image:
    "https://res.cloudinary.com/keimaaal/image/upload/f_auto,q_auto/v1717943192/v1/keimaal/profile",
};

export function HeaderTabs() {
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className={`dark:!bg-neutral-800 ${classes.header}`}>
      <Container className={` ${classes.mainSection}`} size="md">
        <Group justify="space-between">
          <div>
            <ToggleTheme />
          </div>
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group className="dark:text-neutral-400" gap={7}>
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius="xl"
                    size={20}
                  />
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                  <MdOutlineKeyboardArrowDown
                    style={{ width: rem(12), height: rem(12) }}
                  />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <Link href={'/user'}>
                    <Menu.Item
                        leftSection={
                        <TiUser
                            style={{ width: rem(16), height: rem(16) }}
                        />
                        }
                    >
                        User
                    </Menu.Item>
                </Link>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}
