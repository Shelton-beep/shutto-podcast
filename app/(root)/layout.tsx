const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>
        <p className="text-black-1">LeftSidebar</p>
        {children}
        <p className="text-black-1">RightSidebar</p>
      </main>
    </div>
  );
};

export default RootLayout;
