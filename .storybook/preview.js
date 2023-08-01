import ReduxProvider from "@/providers/redux.provider";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => {
      return (
        <ReduxProvider>
          <Story />
        </ReduxProvider>
      );
    },
  ],
};

export default preview;
