"use client";

import Container from "@/components/elements/Container";
import React from "react";
import Content from "./Content";
import { useGetPostQuery } from "@/store/api/goresApi/apiSlice";
import PageHeading from "@/components/elements/PageHeading";

function Post() {
  const { data : dataPost, isLoading } = useGetPostQuery("");
  const DESCRIPTION = "Share your thoughts and ideas with the world.";
  const TITLE = "Morning... Have a nice day!";
  return (
    <Container data-aos="fade-up">
      <PageHeading title={TITLE} description={DESCRIPTION} />
      <Content dataPost={dataPost} isLoading={isLoading} />
    </Container>
  );
}

export default Post;
