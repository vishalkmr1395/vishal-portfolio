import CompanySection from '../components/CompanySection/CompanySection'
import EduCard from '../components/EduCard/EduCard'
import ExperienceCards from '../components/ExperienceCards/ExperienceCards'
import Footer from '../components/Footer/Footer'
import Hero from '../components/HeroComponent/Hero'
import  Slider from '../components/Slider/Slider'

function Home() {

const recommendations = [
  {
    author: "Jitender Kumar",
    role: "Head of Product and Engineering at Zluri",
    relation: "Managed Vishal Kumar directly",
    date: "April 6, 2025",
    text: `Vishal did excellent in leading an initiative to overhaul the user experience at Zluri. 

Some key traits that stood out for him were:
1. Being able to gain the trust and work well with the team.
2. Being able to understand product and experience aspects alongside engineering. 
3. Being adaptable and finding a project management methodology best suited to this unique project. 

I would love to have him in our team again.`
  },
  {
    author: "Prajjwal Vijaywargiya",
    role: "SDE at Amazon || Qiskit Advocate || Quantum Computing, ML, DL Enthusiast",
    relation: "Reported directly to Vishal Kumar",
    date: "March 21, 2025",
    text: `Vishal’s technical expertise, strategic foresight, and systematic approach made a significant impact during my time at Amazon. Whether planning big projects or refining smaller details, he always had a clear vision of the end goal. His ability to anticipate obstacles and make informed decisions helped us stay ahead of challenges. Design, process improvement, operational activities - he always insisted on the highest standards. 

Beyond technical mentorship, he pushed me to go the extra mile and empowered me to handle challenges independently. His feedback was always constructive and actionable, guiding me toward solutions rather than just providing answers. 

I’m incredibly grateful for his mentorship and continued support, and I highly recommend him as a skilled, insightful, and inspiring leader.`
  },
  {
    author: "Rajesh Sethi",
    role: "Engineering @ Walmart Labs",
    relation: "Worked with Vishal Kumar on the same team",
    date: "March 20, 2025",
    text: `I had the pleasure of working alongside Vishal during his tenure at Freshworks. His exceptional leadership skills and technical expertise were evident in the numerous initiatives he spearheaded, particularly in cross-team collaborations. 
One of his most notable achievements was leading the database sharding process for a tier 0 service, a complex task that he handled with remarkable proficiency and dedication. 

What sets Vishal apart is his genuine passion for technology. His enthusiasm is contagious, and he consistently inspires his peers to strive for excellence. His excellent communication skills and ability to build strong professional relationships made him a valued team member. 

His commitment to growth and his eagerness to learn will undoubtedly make him a standout in any environment. I wholeheartedly recommend Vishal for any future opportunities. His dedication, expertise, and collaborative spirit make him an invaluable asset to any organization.`
  },
  {
    author: "Bishal Karki",
    role: "Software Engineer",
    relation: "Reported directly to Vishal Kumar",
    date: "July 12, 2024",
    text: `It's impressive how Vishal led and organized the team to create V2 of Zluri platform. I like his concerns for learning, growth and motivation of the team members.`
  }
];


  return (
    <>
    <Hero />
    <CompanySection />
    <ExperienceCards />
    <Slider data={recommendations} />
    <EduCard />
    <Footer />
      </>
  )
}

export default Home
