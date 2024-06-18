import { UserType } from "@/common/types/user";
import React from "react";
import { Group, ActionIcon, rem, TextInput, Button, Select } from "@mantine/core";
import { TiPencil, TiPlus, TiTrash } from "react-icons/ti";
import { DataTable } from "mantine-datatable";
import ModalDetail from "./ModalDetail";
import { useDisclosure } from "@mantine/hooks";
import Swal from "sweetalert2";
import { useDeleteUserMutation } from "@/store/api/goresApi/apiSlice";
import { ToastAlert } from "@/hooks/ToastAlert";
import { DATA_LIST } from "@/common/constant/List";

type TableUserProps = {
  dataUser: UserType[];
  refetch: any;
  page: number;
  setPage: any;
  searchName: string;
  listShow: string;
  setListShow: any;
  setSearchName: any;
};

function TableUser({
  dataUser,
  refetch,
  page,
  setPage,
  searchName,
  setSearchName,
  setListShow,
  listShow,
}: TableUserProps) {
  const [deleteUser, { isLoading: loadingDelete, error: errorDelete }] = useDeleteUserMutation();
  const [isCreate, setIsCreate] = React.useState<boolean>(false);
  const [userDetail, setUserDetail] = React.useState<UserType>({
    id: 0,
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const [opened, { open, close }] = useDisclosure(false);

  const handleDetail = (id: any) => {
    setIsCreate(false);
    const user = dataUser.find((user) => user.id === id);
    setUserDetail(
      user || {
        id: 0,
        name: "",
        email: "",
        gender: "",
        status: "",
      }
    );
    open();
  };

  const handleCreate = () => {
    setIsCreate(true);
    open();
    setUserDetail({
      id: 0,
      name: "",
      email: "",
      gender: "",
      status: "",
    });
  };

  const handleDelete = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUser(id);
          ToastAlert("Deleted! Your file has been deleted.", "success");
        } catch (error) {
          ToastAlert("Error! Something went wrong.", "error");
        } finally {
          refetch();
        }
      }
    });
  };

  return (
    <>
      <div className="flex items-center w-full justify-between mb-2">
        <div className="flex items-center gap-2">
          <TextInput
            placeholder="Search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <Select
            className="max-w-[80px]"
            value={listShow}
            onChange={(value) => setListShow(value)}
            placeholder="Show data"
            data={DATA_LIST}
          />
        </div>
        <Button onClick={handleCreate} color="green">
          Create
          <TiPlus />
        </Button>
      </div>
      <DataTable
        minHeight={300}
        withTableBorder
        className="dark:!bg-neutral-800"
        records={dataUser}
        rowClassName={"dark:!bg-neutral-800 dark:!text-white"}
        borderRadius="md"
        striped
        highlightOnHover
        verticalSpacing="md"
        columns={[
          { accessor: "id" },
          { accessor: "name" },
          { accessor: "email" },
          { accessor: "gender" },
          {
            accessor: "status",
            render: (user: UserType) => {
              if (user.status === "active") {
                return (
                  <span className="text-white px-2 py-[2px] rounded-md bg-green-500">
                    {user.status}
                  </span>
                );
              } else {
                return (
                  <span className="text-white px-2 py-[2px] rounded-md bg-red-500">
                    {user.status}
                  </span>
                );
              }
            },
          },
          {
            accessor: "Action",
            textAlign: "right",
            render: (user: UserType) => (
              <Group gap={0} justify="flex-end">
                <ActionIcon
                  onClick={() => handleDetail(user.id)}
                  variant="subtle"
                  color="gray"
                >
                  <TiPencil style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
                <ActionIcon
                  onClick={() => handleDelete(user.id)}
                  variant="subtle"
                  color="red"
                >
                  <TiTrash style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
              </Group>
            ),
          },
        ]}
        totalRecords={100}
        recordsPerPage={dataUser?.length}
        page={page}
        onPageChange={(p) => setPage(p)}
        paginationActiveBackgroundColor="green"
        paginationText={({from, to}) => `Showing ${to} data`}
        paginationActiveTextColor="#e6e348"
      />
      <ModalDetail
        refetch={refetch}
        userDetail={userDetail}
        opened={opened}
        close={close}
        isCreate={isCreate}
      />
    </>
  );
}

export default TableUser;
