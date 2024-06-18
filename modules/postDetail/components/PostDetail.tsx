"use client";

import { PostType } from "@/common/types/post";
import Container from "@/components/elements/Container";
import { useGetPostCommentsQuery, useGetPostQuery } from "@/store/api/goresApi/apiSlice";
import { useParams } from "next/navigation";
import React from "react";
import PostCard from "@/components/elements/PostCard";
import CommentList from "./CommentList";
import Breakline from "@/components/elements/Breakline";
import BackButton from "@/components/elements/BackButton";

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: dataPost, isLoading } = useGetPostQuery("");
  const { data: dataComment, isLoading : loadingComment } = useGetPostCommentsQuery(parseInt(id));

  const selectPost = dataPost?.find(
    (post: PostType) => post.id === parseInt(id)
  );

  if (isLoading) return <div>Loading...</div>;
  return (
    <Container data-aos="fade-up">
      <BackButton/>
      <PostCard
        id={selectPost.id}
        user_id={selectPost.user_id}
        title={selectPost.title}
        body={selectPost.body}
        className="hover:!scale-1 mt-3"
      />
      <Breakline />
      <CommentList dataComment={dataComment} loadingComment={loadingComment} />
    </Container>
  );
}

export default PostDetail;
