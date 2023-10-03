import Head from 'next/head';

import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Dashboard = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link href="/assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="/assets/css/nucleo-svg.css" rel="stylesheet" />
        <link
          href="/assets/css/soft-ui-dashboard-tailwind.css?v=1.0.4"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <main className="ease-soft-in-out mt-0 transition-all duration-200">
        {children}
      </main>
    </>
  );
};

export default Dashboard;
