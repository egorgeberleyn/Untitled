import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createPageStory } from "../createPageStory";

const { PageStory } = createPageStory({
    pageId: "error.ftl"
});

export default {
    title: "Error/Error",
    component: PageStory,
} as ComponentMeta<typeof PageStory>;

export const Default: ComponentStory<typeof PageStory> = () => <PageStory />;
