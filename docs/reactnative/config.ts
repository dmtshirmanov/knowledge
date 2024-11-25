const path = "/reactnative";

enum ReactNativePaths {
  BASE = path,
  CORE = `${path}/core`,
}

const CORE = {
  text: "Базовые элементы",
  link: ReactNativePaths.CORE,
  items: [
    // {
    //   text: "View",
    //   link: `${ReactNativePaths.CORE}/view`
    // },
    // {
    //   text: "Text",
    //   link: `${ReactNativePaths.CORE}/text`
    // },
    // {
    //   text: "Image",
    //   link: `${ReactNativePaths.CORE}/image`
    // },
    // {
    //   text: "ScrollView",
    //   link: `${ReactNativePaths.CORE}/scrollView`
    // },
    // {
    //   text: "TextInput",
    //   link: `${ReactNativePaths.CORE}/textInput`
    // },
  ],
};

const items = [CORE];

export const reactNative = {
  text: "ReactNative",
  link: ReactNativePaths.BASE,
  items,
};
