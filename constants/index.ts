export const navLinks = [
  {
    label: "首页",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "图像修复",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "生成填充",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "移除物体",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "物体重新上色",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "移除背景",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "个人资料",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "购买点数",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "免费",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "免费使用20点",
        isIncluded: true,
      },
      {
        label: "基本服务",
        isIncluded: true,
      },
      {
        label: "优先客服支持",
        isIncluded: false,
      },
      {
        label: "优先更新",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "普通点数包",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 点",
        isIncluded: true,
      },
      {
        label: "可以使用所有服务",
        isIncluded: true,
      },
      {
        label: "优先客服支持",
        isIncluded: true,
      },
      {
        label: "优先更新",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "豪华点数包",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 点",
        isIncluded: true,
      },
      {
        label: "可以使用所有服务",
        isIncluded: true,
      },
      {
        label: "优先客服支持",
        isIncluded: true,
      },
      {
        label: "优先更新",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "图像修复",
    subTitle: "移除图像中噪点和缺陷",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "移除背景",
    subTitle: "智能移除图像的背景",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "生成填充",
    subTitle: "使用ai生成图像需要扩展的部分",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "移除物体",
    subTitle: "从图像中识别并移除物体",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "物体重新上色",
    subTitle: "从图像中识别物体并且重绘颜色",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "正方形 (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "普通照片 (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "手机照片 (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;