import { CommentType } from '@/common/types/post';
import { Blockquote } from '@mantine/core';
import { GoComment } from 'react-icons/go';

interface CommentCardType extends CommentType{
  color?: string;
}

export default function CommentCard(params : CommentCardType) {
  const icon = <GoComment />;
  return (
    <Blockquote color={params.color} radius="lg" iconSize={32} cite={`- ${params.name}`} icon={icon} mt="xl" className='!py-4'>
      {params.body}
    </Blockquote>
  );
}