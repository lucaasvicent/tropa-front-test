import TabNavigation from "./TabNavigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <div style={{ width: '200px', minWidth: '200px', height: '100vh' }}>
        <TabNavigation />
      </div>
      <div style={{ flex: 1, overflow: 'auto', height: '100vh' }}>
        {children}
      </div>
    </div>
  );
}
