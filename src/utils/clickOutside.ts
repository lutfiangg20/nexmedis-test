import type { DirectiveBinding, ObjectDirective } from "vue";

const vClickOutside: ObjectDirective = {
	beforeMount(el: HTMLElement, binding: DirectiveBinding) {
		el.clickOutsideHandler = (event: Event) => {
			if (!el.contains(event.target as Node)) {
				binding.value(event);
			}
		};
		document.addEventListener("click", el.clickOutsideHandler);
	},
	unmounted(el: HTMLElement) {
		if (el.clickOutsideHandler) {
			document.removeEventListener("click", el.clickOutsideHandler);
		}
	},
};

// Extend HTMLElement to include clickOutsideHandler
declare global {
	interface HTMLElement {
		clickOutsideHandler?: (event: Event) => void;
	}
}

export default vClickOutside;
