import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import List from "@/components/List.vue";

export default {
  title: "List",
  component: List
};

export const ToStorybook = () => ({
    components: { List },
    template: '<List />',
});

ToStorybook.story = {
    name: 'Basic',
};
