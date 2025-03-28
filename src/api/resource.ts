import { Reqres } from "@/utils/reqres";
export type ResponseResource = {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: Resource[];
	support: Support;
};

export type Resource = {
	id: number;
	name: string;
	year: number;
	color: string;
	pantone_value: string;
};

type Support = {
	url: string;
	text: string;
};

const reqres = new Reqres();

export const getAllResource = async (page: number) => {
	const response = await reqres.get(`/resource?page=${page}`);
	const result = (await response.json()) as ResponseResource;
	return result;
};
