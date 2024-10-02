import LeftSidebar from "@/components/LeftSidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>
        <LeftSidebar />

        {children}
        <p className="text-black-1">RightSidebar</p>
      </main>
    </div>
  );
};

export default RootLayout;
