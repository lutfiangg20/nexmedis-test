import { defineStore } from "pinia";
import { ref } from "vue";

export const useResourceStore = defineStore("resource", () => {
	const total = ref(0);
	const getTotal = (value: number) => {
		total.value = value;
	};
	return { total, getTotal };
});
