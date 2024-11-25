const path = "/reactnative/";

const treadhItems = [
  {
    text: "UI",
  },
  {
    text: "JS",
  },
  {
    text: "Background",
  },
];

const architectureItems = [
  {
    text: "Старая архитектура",
    link: `${path}oldArch`,
    items: [
      {
        text: "Bridge",
        link: `${path}oldArch/bridge`,
      },
    ],
  },
  {
    text: "Новая архитектура",
    link: `${path}newArch`,
    items: [
      {
        text: "JSI",
        link: `${path}newArch/jsi`,
      },
      {
        text: "Fabric",
      },
      {
        text: "Turbo Modules",
        link: `${path}newArch/turboModules`,
      },
      {
        text: "Codegen",
      },
    ],
  },
  {
    text: "Общие концепции",
    link: "",
    items: [
      {
        text: "Yoga",
        link: "",
      },
      {
        text: "React Element Tree",
        link: "",
      },
      {
        text: "React Shadow Tree",
        link: "",
      },
      {
        text: "Host View Tree",
        link: "",
      },
      {
        text: "Hermes",
        link: "",
      },
      {
        text: "Host Objects",
        link: "",
      },
      {
        text: "Direct Bindings",
        link: "",
      },
    ],
  },
];

const baseItems = [
  {
    text: "Структура проекта",
    link: `${path}base/structure`,
  },
];

const items = [
  {
    text: "Базовые знания",
    link: `${path}base`,
    items: baseItems,
  },
  {
    text: "Архитектура",
    link: "",
    items: architectureItems,
    collapsed: true,
  },
  {
    text: "Threads",
    link: `${path}treadh`,
    items: treadhItems,
    collapsed: true,
  },
];

export const reactNative = {
  text: "ReactNative",
  link: path,
  items,
};
