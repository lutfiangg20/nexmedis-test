import { Reqres } from "@/utils/reqres";

export type UserResponse = {
	data: UserData;
	support: UserSupport;
};

export type UserData = {
	avatar: string;
	email: string;
	first_name: string;
	id: number;
	last_name: string;
};

export type UserSupport = {
	url: string;
	text: string;
};

export type UsersResponse = {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: UserData[];
	support: UserSupport;
};

const reqres = new Reqres();
export const getUserbyId = async (id: number) => {
	const response = await reqres.get(`/users/${id}`);
	const result = (await response.json()) as UserResponse;
	return result;
};

export const getAllUsers = async (page: number) => {
	const response = await reqres.get(`/users?page=${page}`);
	const result = (await response.json()) as UsersResponse;
	return result;
};
