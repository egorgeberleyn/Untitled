import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createPageStory } from "../createPageStory";

const { PageStory } = createPageStory({
    pageId: "info.ftl"
});

export default {
    title: "Info/Info",
    component: PageStory,
} as ComponentMeta<typeof PageStory>;

export const Default: ComponentStory<typeof PageStory> = () => <PageStory />;
