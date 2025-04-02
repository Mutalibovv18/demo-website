import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Zap, Target, Brain, BarChart as ChartBar, Users, Clock, Shield, Sparkles, Notebook as Robot, Trophy, Database, Gauge, HelpCircle } from 'lucide-react';
import { User } from "lucide-react";
import dilbar from './components/images/dilbar.jpeg'
import random from './components/images/random.jpg'
import curly from './components/images/curly.jpg'
import about from './components/images/about.jpg'

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeTimeframe, setActiveTimeframe] = useState<number>(3);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const processData = {
    3: [
      { name: 'Initial Setup', value: 'Campaign Structure & Setup' },
      { name: 'Data Collection', value: 'Audience Research' },
      { name: 'Optimization', value: 'Initial Performance Review' }
    ],
    7: [
      { name: 'Week 1', value: 'A/B Testing' },
      { name: 'Week 2', value: 'Budget Optimization' },
      { name: 'Week 3', value: 'Creative Refinement' },
      { name: 'Week 4', value: 'Scale Successful Campaigns' }
    ],
    30: [
      { name: 'Phase 1', value: 'Market Analysis' },
      { name: 'Phase 2', value: 'Campaign Expansion' },
      { name: 'Phase 3', value: 'Advanced Optimization' },
      { name: 'Phase 4', value: 'Sustainable Growth' }
    ]
  };

  const teamMembers = [
    { name: "Dilbar", role: "CEO & Founder", image: dilbar },
    { name: "Jane Smith", role: "Head of Strategy", image: random },
    { name: "Mike Johnson", role: "Lead Designer", image: curly },
    { name: "Emily Davis", role: "Marketing Director", image: "/images/emily.jpg" }
  ];

  const data = [
    { name: 'Jan', Growth: 10 },
    { name: 'Feb', Growth: 25 },
    { name: 'Mar', Growth: 40 },
    { name: 'Apr', Growth: 60 },
    { name: 'May', Growth: 80 },
    { name: 'Jun', Growth: 100 },
  ];

  


  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-light dark:bg-gradient-dark transition-colors duration-200">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <section className="pt-32 pb-20 px-4 bg-white dark:bg-black text-black dark:text-white relative">
  {/* Dark Mode Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-red-600 to-transparent opacity-30 dark:block hidden"></div>

  {/* Light Mode Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-white via-red-200 to-transparent opacity-20 light:block hidden"></div>

  <div className="container mx-auto text-center relative">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-bold mb-6"
    >
      <span className="block">Smart Bidding for</span>
      <span className="text-red-500 block">Maximum ROAS</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl mb-8 max-w-2xl mx-auto"
    >
      Our AI-driven bidding strategies adjust in real-time to enhance ad performance across multiple platforms.
    </motion.p>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col md:flex-row gap-4 justify-center"
    >
      <a
        href="https://calendly.com/forpath65/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors duration-200"
      >
        Book a Free Strategy Call
      </a>
      <button 
        onClick={() => scrollToSection('about')}
        className="px-8 py-4 border-2 border-red-700 text-black dark:text-white rounded-lg hover:bg-red-700 hover:text-white transition-colors duration-200"
      >
        Learn More
      </button>
    </motion.div>
  </div>
</section>










<section className="py-20 px-4 bg-white dark:bg-black text-black dark:text-white relative">
  {/* Dark Mode Gradient (Does NOT affect text or images) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-red-600 to-transparent opacity-40 dark:block hidden pointer-events-none"></div>

  {/* Light Mode Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-white via-red-200 to-transparent opacity-20 light:block hidden pointer-events-none"></div>

  <div className="container mx-auto relative z-10">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Image Section (Clear & Sharp) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-1/2 relative z-10"
      >
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Analytics Dashboard"
          className="rounded-lg shadow-xl"
        />
      </motion.div>

      {/* Text Section (Perfect Readability) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-1/2 relative z-10"
      >
        <h2 className="text-5xl font-extrabold mb-6 text-black dark:text-white">
          Winning ads aren’t random
        </h2>
        <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-300 mb-6">
          There’s a science to it. Creative is the heartbeat of your brand's growth. Without ads that convert cold audiences, growth slows and ad spend becomes inefficient—but with the correct messaging, UGC is the king of TOF acquisition.
        </p>
        <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-300 mb-6">
          We engineer creative that doesn’t just perform at low scale. It’s designed to acquire new customers efficiently and scale to cold audiences within KPI.
        </p>
        <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-300">
          Our process, powered by data insights and experience, lowers CAC and ensures your ads reach new markets effectively—every time.
        </p>
      </motion.div>

    </div>
  </div>
</section>



<section id="about" className="py-20 px-4 relative bg-white dark:bg-black text-black dark:text-white overflow-hidden">
  {/* Dark Mode Gradient (Only on BG, Text & Image Stay Clear) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-red-600 to-transparent opacity-40 dark:block hidden pointer-events-none"></div>

  {/* Light Mode Gradient (Only on BG, Text & Image Stay Clear) */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-red-200 to-transparent opacity-20 light:block hidden pointer-events-none"></div>

  <div className="container mx-auto relative z-10">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 relative z-10"
      >
        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg">
          <img 
            src={about}
            alt="eveRise Team"
            className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 relative z-10 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black dark:text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-300 mb-6">
          Founded in 2024, eveRise is a forward-thinking agency built on innovation, strategy, and deep industry insights. We don’t just run campaigns—we craft experiences that connect brands with their audiences on a deeper level.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-300 mb-6">
          Our team is composed of creative thinkers, data-driven strategists, and technology enthusiasts who work together to push boundaries in the digital space.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-300">
          At eveRise, we believe in constant evolution, adapting to the latest trends, and ensuring our clients always stay ahead of the curve.
        </p>
      </motion.div>

    </div>
  </div>
</section>



<section className="py-20 px-4 bg-white dark:bg-black text-black dark:text-white relative">
  {/* Dark Mode Gradient (Only on BG, Text & Image Stay Clear) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-red-600 to-transparent opacity-30 dark:block hidden pointer-events-none"></div>

  {/* Light Mode Gradient (Only on BG, Text & Image Stay Clear) */}
  <div className="absolute inset-0 bg-gradient-to-t from-white via-red-200 to-transparent opacity-20 light:block hidden pointer-events-none"></div>

  <div className="container mx-auto relative z-10">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
    >
      Why We're Different
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "AI-Powered Optimization",
          description: "Our proprietary AI algorithms analyze millions of data points to optimize your campaigns in real-time.",
          icon: Robot
        },
        {
          title: "Predictive Analytics",
          description: "Advanced forecasting models to predict campaign performance and optimize budget allocation.",
          icon: ChartBar
        },
        {
          title: "Industry Expertise",
          description: "Over $50M in managed ad spend across various industries with proven success.",
          icon: Trophy
        },
        {
          title: "Real-Time Monitoring",
          description: "24/7 automated campaign monitoring with instant adjustments and alerts.",
          icon: Gauge
        },
        {
          title: "Data-Driven Strategy",
          description: "Custom strategies built on comprehensive market analysis and competitor data.",
          icon: Database
        },
        {
          title: "Innovation Focus",
          description: "Early adopters of new ad technologies and continuous platform optimization.",
          icon: Sparkles
        }
      ].map((reason, index) => (
        <motion.div
          key={reason.title}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
          className="p-6 rounded-lg bg-black/60 backdrop-blur-sm transition-all duration-300 group relative overflow-hidden border-2 border-transparent hover:border-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:scale-105"
        >
          <div className="flex items-center mb-4">
            <reason.icon className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold ml-3 text-white">{reason.title}</h3>
          </div>
          <p className="text-gray-300">{reason.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>



<section id="services" className="py-20 px-4 bg-white dark:bg-black text-black dark:text-white relative">
  {/* Light Mode Gradient (For Background) */}
  <div className="absolute inset-0 bg-gradient-to-t from-white via-red-200 to-transparent opacity-20 light:block hidden pointer-events-none"></div>

  {/* Dark Mode Gradient (For Background) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-red-600 to-transparent opacity-30 dark:block hidden pointer-events-none"></div>

  <div className="container mx-auto relative z-10">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
    >
      Our Services
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "AI Automation",
          description: "Leverage cutting-edge AI for real-time bid adjustments and audience targeting. Our machine learning models continuously optimize ad performance, ensuring maximum ROI.",
          icon: Brain
        },
        {
          title: "Unit Economics Optimization",
          description: "Maximize profitability by performing detailed cost analysis, optimizing your customer acquisition cost (CAC) and lifetime value (LTV). We help refine your unit economics for sustained growth.",
          icon: ChartBar
        },
        {
          title: "Paid Ads Management",
          description: "Expert management of your Meta, Google, and other paid ad campaigns. From strategy creation to real-time monitoring, we ensure your ads reach the right audience and deliver results.",
          icon: Target
        }
      ].map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
          className="relative p-8 rounded-lg bg-black/60 backdrop-blur-sm transition-all duration-300 group border-2 border-transparent hover:border-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:scale-105"
        >
          {/* Content */}
          <div className="relative z-10">
            <service.icon className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



<section id="process" className="py-20 px-4 bg-white dark:bg-black text-black dark:text-white relative">
  {/* Light Mode Gradient (For Background) */}
  <div className="absolute inset-0 bg-gradient-to-t from-white via-red-200 to-transparent opacity-20 light:block hidden pointer-events-none"></div>

  {/* Dark Mode Gradient (For Background) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-red-600 to-transparent opacity-30 dark:block hidden pointer-events-none"></div>

  <div className="container mx-auto relative z-10">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
    >
      Our Process
    </motion.h2>

    {/* Timeframe Selection Buttons */}
    <div className="flex justify-center mb-8 space-x-4">
      {[3, 7, 30].map((days) => (
        <button
          key={days}
          onClick={() => setActiveTimeframe(days)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
            activeTimeframe === days
              ? 'bg-red-600 text-white'
              : 'bg-black/60 text-gray-300'
          }`}
        >
          {/* Hover effect */}
          <span className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
          {days} Days
        </button>
      ))}
    </div>

    {/* Process Steps */}
    <div className="bg-black/60 rounded-lg p-8 shadow-lg">
      <div className="space-y-6">
        {processData[activeTimeframe].map((step, index) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.2, ease: "easeOut" }}
            className="relative p-6 rounded-lg bg-black/60 hover:shadow-xl transition-all duration-300 group"
          >
            {/* Red Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 flex items-center space-x-4 text-white">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold">{step.name}</h3>
                <p className="text-gray-300">{step.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

    



<section  className="py-20 px-4 bg-white dark:bg-black text-black dark:text-white relative">
      {/* Light Mode Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-gray-300 to-transparent opacity-20 light:block hidden pointer-events-none"></div>

      {/* Dark Mode Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-red-600 to-transparent opacity-30 dark:block hidden pointer-events-none"></div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Our Team
        </motion.h2>
        <p className="text-lg text-gray-400 mb-12">Meet the experts behind our success</p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-center">
          {teamMembers.slice(0, 3).map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-white text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-700">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-32 h-32 text-gray-400 p-6" />
                )}
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    
      
    
 
      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black/40">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-4xl font-bold text-center mb-12 text-white">
      Frequently Asked Questions
    </h2>
    <div className="space-y-6">
      {[
        {
          question: "What happens during the strategy call?",
          answer:
            "During the 30-minute call, we'll discuss your business goals, current ad performance, and outline a custom strategy to scale your brand using paid advertising.",
        },
        {
          question: "Do I need to prepare anything?",
          answer:
            "Having basic information about your current marketing efforts and business goals is helpful, but not required. We'll guide the conversation to get the information we need.",
        },
        {
          question: "Is this really free?",
          answer:
            "Yes, the strategy call is completely free with no obligations. We believe in providing value upfront and letting our expertise speak for itself.",
        },
        {
          question: "How soon can we start working together?",
          answer:
            "If we're a good fit, we can typically begin implementing your custom strategy within 48-72 hours of the call.",
        },
        {
          question: "What makes your approach different?",
          answer:
            "We combine AI-powered optimization with human expertise to create data-driven strategies that consistently outperform traditional approaches.",
        },
      ].map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
          className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border-2 border-transparent transition-all duration-300 ease-in-out hover:border-red-600 hover:scale-105"
        >
          <div className="flex items-start">
            <HelpCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section id='contact' className="py-20 px-4 bg-white dark:bg-black text-black dark:text-white relative">
    {/* Light Mode Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-white via-red-200 to-transparent opacity-20 light:block hidden pointer-events-none"></div>

    {/* Dark Mode Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-red-600 to-transparent opacity-30 dark:block hidden pointer-events-none"></div>

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-black/60 backdrop-blur-sm rounded-lg shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 className="text-4xl font-bold text-center mb-6">
          Book Your Free Strategy Call
        </h2>
        <p className="text-center text-lg text-gray-300 mb-8">
          This isn’t just a consultation—it’s a roadmap to growth. In this call, we’ll analyze your business, your competitors, and your marketing efforts to uncover key opportunities for rapid scaling.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Benefits List */}
          <div className="space-y-5">
            {[ 
              { icon: Shield, text: "Custom Ad Strategy - Tailored campaigns that drive results." },
              { icon: Users, text: "Competitor Analysis - Learn what’s working for others and gain an edge." },
              { icon: ChartBar, text: "Budget Planning - Maximize ROI with data-driven ad spend." },
              { icon: Brain, text: "AI Growth Strategy - Use automation to scale efficiently." },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                className="flex items-center group"
              >
                <item.icon className="w-6 h-6 text-red-600 mr-3 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-black dark:text-white">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Line Chart */}
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Growth" stroke="#ff6363" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Call-To-Action Button */}
        <div className="flex items-center justify-center">
          <a
            href="https://calendly.com/forpath65/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-4 rounded-lg font-semibold text-center relative overflow-hidden group bg-red-600 text-white transition-all duration-300"
          >
            <span className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
            Schedule Your Free Session
          </a>
        </div>
      </motion.div>
    </div>
  </section>

  <footer className="bg-black text-white py-12 px-4">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center mb-4">
          <span className="relative text-3xl font-bold flex items-center">
            <span className="text-[#631b16]">eve</span>
            <span className={`${isDark ? "text-white" : "text-black"}`}>Rise</span>
          </span>
        </div>
        <p className="text-gray-400">
          Transforming brands through AI-powered paid advertising.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="#process" className="text-gray-400 hover:text-white">Process</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Services</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Paid Ads</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Unit Economy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">AI Automation</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Contact</h3>
        <ul className="space-y-2">
          <li className="text-gray-400">contact@everrise.com</li>
          <li className="text-gray-400">+1 (555) 123-4567</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} EverRise. All rights reserved.</p>
    </div>
  </div>
</footer>

      <Navigation />
    </div>
  );
}

export default App;