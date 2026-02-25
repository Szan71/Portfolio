"use client";
import { Download, Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

export default function AboutPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-neutral-100 py-12 px-4 print:p-0 print:bg-white font-serif">
      {/* Action Header - Hidden on PDF */}
      <div className="max-w-[850px] mx-auto mb-6 flex justify-end print:hidden font-sans">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-md"
        >
          <Download size={16} /> Download as PDF
        </button>
      </div>

      {/* Main Resume Container */}
      <div className="max-w-[850px] mx-auto bg-white shadow-lg print:shadow-none p-8 md:p-16 text-slate-900 leading-tight border border-gray-200 print:border-none">
        
        {/* Header - Centered Style */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Sujan Khadka</h1>
          <div className="flex flex-wrap justify-center gap-x-2 text-[13px] text-gray-700">
            <span>Vancouver, BC</span> | <span>(437) 955-7646</span> | 
            <a href="mailto:thenamessuzan@gmail.com" className="text-blue-700 hover:underline">thenamessuzan@gmail.com</a>
          </div>
          <div className="flex justify-center gap-4 mt-1 text-[13px] text-blue-700 font-medium">
            <a href="https://linkedin.com/in/thenamessuzan" target="_blank" className="hover:underline">linkedin.com/in/thenamessuzan</a>
            <a href="https://github.com/Szan71" target="_blank" className="hover:underline">github.com/Szan71</a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-black mb-2 pb-0.5">Summary</h2>
          <p className="text-[13px] text-justify leading-snug">
            <strong>Data Analytics professional with a 4.06 GPA</strong> and a B.Sc. in Computer Science, specializing in turning messy data into executive-ready insights. Expert in <strong>SQL, Python, and Power BI</strong>, with a proven record of architecting data governance for <strong>2.5M+ users</strong> with <strong>99.8% integrity</strong>. Driven by a UX-first approach to analytics and a Six Sigma commitment to ethical, measurable impact.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-black mb-3 pb-0.5">Professional Experience</h2>
          
          <div className="mb-4">
            <div className="flex justify-between font-bold text-[13.5px]">
              <span>Lead Systems Analyst & UX Strategist | Alliance Maintenance Ltd | Vancouver</span>
              <span>Jan 2025 - Present</span>
            </div>
            <ul className="list-disc ml-5 mt-1 text-[13px] space-y-0.5">
              <li><strong>Operational Analytics:</strong> Developed an automated outreach pipeline tracking system, increasing conversion tracking accuracy by 35%.</li>
              <li><strong>Insight Enablement:</strong> Built executive-ready Power BI dashboards that synthesized operational logs into clear trend reports.</li>
              <li><strong>Website Enablement (UX):</strong> Refactored frontend components to increase adoption of digital assets and resources.</li>
              <li><strong>Data Dictionary:</strong> Authored a corporate data dictionary to ensure governance alignment across cross-functional teams.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between font-bold text-[13.5px]">
              <span>Software Engineer (Data Systems) | Info Developers Pvt. Ltd. | Nepal</span>
              <span>Jan 2022 – May 2024</span>
            </div>
            <ul className="list-disc ml-5 mt-1 text-[13px] space-y-0.5">
              <li><strong>Scale Management:</strong> Architected relational databases for national-scale portals serving <strong>2.5M users</strong>.</li>
              <li><strong>Query Optimization:</strong> Engineered SQL (Postgres) scripts optimizing retrieval by <strong>71%</strong> and reducing manual anomalies by <strong>90%</strong>.</li>
              <li><strong>Technical Documentation:</strong> Drafted insight briefs and technical specifications bridging the gap between policy and practice.</li>
              <li><strong>QA Engineering:</strong> Led testing for web-facing components to resolve UI/UX bottlenecks before launch.</li>
            </ul>
          </div>
        </section>

        {/* Technical Projects */}
        <section className="mb-6">
          <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-black mb-2 pb-0.5">Technical Projects</h2>
          <div className="mb-3 text-[13px]">
            <p className="font-bold tracking-tight">BildStrata: Strata Building Management Platform | <span className="italic">Python, SQL, CMS</span></p>
            <ul className="list-disc ml-5 mt-0.5 space-y-0.5">
              <li>Developed an end-to-end BildStrata application focused on improving user journeys for building managers and residents.</li>
              <li>Integrated automated form handling and asset libraries to drive higher user engagement.</li>
            </ul>
          </div>
          <div className="text-[13px]">
            <p className="font-bold tracking-tight">Integrated Customer Sales Insight Platform | <span className="italic">Power BI, SQL, Python</span></p>
            <ul className="list-disc ml-5 mt-0.5 space-y-0.5">
              <li>Architected a dashboard suite transforming fragmented sales data into pattern analysis and forecasting.</li>
              <li>Implemented data-sharing strategies and data dictionaries to ensure the dataset was refresh-ready.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-black mb-2 pb-0.5">Technical Skills & Certifications</h2>
          <ul className="text-[13px] space-y-1">
            <li><strong>Tools:</strong> Power BI Desktop (DAX/Power Pivot), Excel (Advanced), Python (Pandas/NumPy), SQL (Postgres/SQLite).</li>
            <li><strong>Domains:</strong> Ethical AI, Data Governance, Operational Analytics, UX/Web Enablement, KPI Definition.</li>
            <li><strong>Certifications:</strong> Six Sigma Yellow Belt, Data Analyst Associate (DataCamp), Customer Analytics in Python.</li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-[14px] font-bold uppercase tracking-wider border-b border-black mb-2 pb-0.5">Education</h2>
          <div className="flex justify-between text-[13px] mb-1">
            <span><strong>Post-Degree Diploma in Data Analytics (GPA: 4.06/4.33)</strong> | Douglas College, BC</span>
          </div>
          <div className="flex justify-between text-[13px] mb-1">
            <span><strong>Post-Degree Diploma in Project Management IT (GPA: 3.55/4.00)</strong> | Canadore College, ON</span>
          </div>
          <div className="flex justify-between text-[13px]">
            <span><strong>Bachelor of Science in Computer Science & IT</strong> | Tribhuvan University, Nepal</span>
          </div>
        </section>
      </div>
    </main>
  );
}