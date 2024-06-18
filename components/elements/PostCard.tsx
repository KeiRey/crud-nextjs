import { Paper, Text } from "@mantine/core";
import { PostType } from "@/common/types/post";
import classes from "@/common/styles/CardGradient.module.css";
import { GoComment, GoHeart } from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGetPostCommentsQuery } from "@/store/api/goresApi/apiSlice";

interface PostCardType extends PostType {
  className?: string;
}

function PostCard(params : PostCardType) {
  const path = usePathname()
  const { data: dataComment } = useGetPostCommentsQuery(params.id);
  return (
    <Paper
      withBorder
      radius="md"
      className={` dark:!bg-neutral-800 ${classes.card} ${params.className}`}
    >
      <Link href={`/post/${params.id}`}>
        <Text size="xl" fw={500}>
          {params.title}
        </Text>
      </Link>
      <Text size="sm" mt="sm" c="dimmed">
        {params.body}
      </Text>
        <div className="flex items-center justify-end gap-5 w-full mt-3">
          <div><GoHeart size={20}/></div>
          <Link href={`/post/${params.id}`} className="flex items-center gap-1">
            <GoComment size={20}/>
            <span className="text-sm">{dataComment?.length || 0}</span>
          </Link>
        </div>
    </Paper>
  );
}

export default PostCard;
