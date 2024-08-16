import { lazy } from "react";

const MainPageLazy = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        //@ts-ignore
        res(import("./MainPage"));
      }, 1500);
    })
);

export {MainPageLazy};
