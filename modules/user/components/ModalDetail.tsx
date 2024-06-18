import { UserType } from "@/common/types/user";
import { ToastAlert } from "@/hooks/ToastAlert";
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from "@/store/api/goresApi/apiSlice";
import { Button, Group, Modal, Radio, Select, TextInput } from "@mantine/core";
import React, { ChangeEvent, FormEvent } from "react";

type ModalDetailProps = {
  userDetail: UserType;
  opened: boolean;
  isCreate: boolean;
  refetch: any;
  close: () => void;
};

function ModalDetail({
  userDetail,
  opened,
  close,
  refetch,
  isCreate,
}: ModalDetailProps) {
  const [update, { isLoading: loadingUpdate, error: errorUpdate }] =
    useUpdateUserMutation();
  const [post, { isLoading: loadingPost, error: errorPost }] =
    useCreateUserMutation();
  const [formData, setFormData] = React.useState<UserType>({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    let params = {
      id: userDetail.id,
      name: formData.name || userDetail.name,
      email: formData.email || userDetail.email,
      gender: formData.gender || userDetail.gender,
      status: formData.status || userDetail.status,
    };
    e.preventDefault();
    if (isCreate) {
      await post(formData);
      if (!loadingPost) {
        if (errorPost) {
          ToastAlert("Error! Something went wrong.", "error");
        } else {
          ToastAlert("User created successfully", "success");
        }
        refetch();
        close();
      }
    } else {
      await update(params);
      if (!loadingUpdate) {
        if (errorUpdate) {
          ToastAlert("Error! Something went wrong.", "error");
        } else {
          ToastAlert("User updated successfully", "success");
        }
        refetch();
        close();
      }
    }
  };

  const TITLE = isCreate ? "Create User" : "Edit User";

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        className="dark:text-neutral-800"
        title={TITLE}
      >
        <form onSubmit={handleSubmit} className="w-full flex  flex-col gap-3">
          <TextInput
            required={isCreate}
            name="name"
            defaultValue={userDetail.name}
            label="Input Name"
            placeholder="Input Name"
            onChange={handleChange}
          />
          <TextInput
            name="email"
            required={isCreate}
            defaultValue={userDetail.email}
            label="Input Email"
            onChange={handleChange}
            placeholder="Input Email"
          />
          <Radio.Group
            name="gender"
            label="Gender"
            required={isCreate}
            defaultValue={userDetail.gender}
          >
            <Group mt="xs">
              <Radio onChange={handleChange} value="male" label="Male" />
              <Radio onChange={handleChange} value="female" label="Female" />
            </Group>
          </Radio.Group>
          <Select
            name="status"
            label="Status"
            required={isCreate}
            onChange={(e) => {
              setFormData({ ...formData, status: e || "" });
            }}
            defaultValue={userDetail.status}
            placeholder="Select status"
            data={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
          />
          <Button type="submit" fullWidth>
            {isCreate ? "Create" : "Update"}
          </Button>
        </form>
      </Modal>
    </>
  );
}

export default ModalDetail;
