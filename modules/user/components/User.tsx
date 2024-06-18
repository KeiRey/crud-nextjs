'use client';

import Container from '@/components/elements/Container'
import PageHeading from '@/components/elements/PageHeading'
import React from 'react'
import { useGetUserQuery } from '@/store/api/goresApi/apiSlice';
import TableUser from './TableUser';

function User() {
  const [page, setPage] = React.useState(1);
  const [listShow, setListShow] = React.useState<string>('10');
  const [searchName, setSearchName] = React.useState('');
  const { data: dataUser, refetch } = useGetUserQuery({ page, searchName, listShow });
  
  React.useEffect(() => {
    refetch();
  }, [page, searchName, listShow]);

  return (
    <Container data-aos="fade-up">
      <PageHeading title="User Page" description={'Handle user data'} />
      <TableUser setListShow={setListShow} listShow={listShow} refetch={refetch} searchName={searchName} setSearchName={setSearchName} page={page} setPage={setPage} dataUser={dataUser}/>
    </Container>
  )
}

export default User
