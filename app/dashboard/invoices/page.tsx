// app/dashboard/invoices/page.tsx
export default async function Page() {
  // simulate slow data fetch
  await new Promise((r) => setTimeout(r, 500));
  return <p>Invoices Page</p>;
}