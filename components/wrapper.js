import wrapper from "@/styles/page.module.css";

export default function Wrapper({ children }) {
  return <main className={wrapper.main}>{children}</main>;
}
