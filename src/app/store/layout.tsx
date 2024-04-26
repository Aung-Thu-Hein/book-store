import StoreProvider from "../lib/provider";
import { Sidebar } from "../ui/sidebar/SideBar";

type Props = {
  children: React.ReactNode;
};

export default function BookStoreLayout(props: Props) {
  return (
    <StoreProvider>
      <div className="flex flex-col bg-gray-200 xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
        <Sidebar />
        <div className="py-2 w-full md:ml-[208px]">
          {props.children}
        </div>
      </div>
    </StoreProvider>
  );
}
