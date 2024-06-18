import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { TiHeart } from 'react-icons/ti';
import classes from '@/common/styles/FooterSocial.module.css';
import { FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div className='flex items-center gap-1'>
            <span>© 2024 with ❤ by keimalcase</span>
        </div>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
            <a target='_blank' href='https://keimal.vercel.app'>
                <ActionIcon size="lg" color="gray" variant="subtle">
                    <FaGlobe style={{ width: rem(18), height: rem(18) }} />
                </ActionIcon>
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/keimalreyyan/'>
                <ActionIcon size="lg" color="gray" variant="subtle">
                    <FaLinkedin style={{ width: rem(18), height: rem(18) }} />
                </ActionIcon>
            </a>
            <a target='_blank' href='https://www.instagram.com/keimaaal/'>
                <ActionIcon size="lg" color="gray" variant="subtle">
                    <FaInstagram style={{ width: rem(18), height: rem(18) }} />
                </ActionIcon>
            </a>
        </Group>
      </Container>
    </div>
  );
}