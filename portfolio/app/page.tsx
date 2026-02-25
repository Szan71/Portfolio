import DataChart from '@/components/DataChart';
import JobMarketStory from '@/components/JobMarketStory';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-2">Sujan Khadka</h1>
          <p className="text-blue-400 text-lg">Software Engineer & Data Analyst</p>
        </header>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">Story #1: Open Source Trends</h2>
          <p className="text-gray-400 mb-6">
            Leveraging my background in software engineering and current focus on data analytics, 
            this live chart fetches real-time data from GitHub to visualize project popularity.
          </p>
          
          {/* Passing the URL directly for now; later we will fetch this from Sanity */}
          <DataChart url="https://api.github.com/search/repositories?q=stars:>50000&sort=stars" />
        </section>

        <section className="space-y-8">
  <div className="border-l-4 border-emerald-500 pl-6">
    <h2 className="text-2xl font-bold text-white">Story #2: National Job Market Intelligence</h2>
    <p className="text-zinc-500 mt-2 max-w-2xl">
      An interactive look at Canadas labor market dynamics. This dashboard tracks job vacancies, 
      payroll trends, and hourly wages across provinces using unadjusted quarterly data 
      from StatCan Table 14-10-0325-01.
    </p>
  </div>
  
  {/* The high-end dashboard component we built earlier */}
  <JobMarketStory />
</section>
      </div>
    </main>
  );
}