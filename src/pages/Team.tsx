import leaderImg from "../assets/leader.webp";
import teamImg from "../assets/team.webp";
import ground from "../assets/ground.webp";
import collab from "../assets/collab.webp";
export default function Team() {
  return (
    <div className="pt-16">

      {/* 🔥 HERO */}
<section className="py-12 md:py-20 text-center !bg-slate-200">
        <div className="max-w-5xl mx-auto px-6">

          <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-2">
            Our Team
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            People Behind the Impact
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Our team combines expertise in climate science, technology and execution
            to deliver scalable sustainability solutions globally.
          </p>

        </div>
      </section>

      {/* 🔥 LEADERSHIP */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Leadership
            </h2>

           <p className="text-slate-600 mb-4 leading-relaxed">
  Our leadership team drives strategic direction, innovation and execution
  across all climate initiatives, ensuring long-term impact and sustainability.
</p>

<p className="text-slate-600 mb-4 leading-relaxed">
  With deep expertise in climate markets, finance and technology, they guide
  Ecoveda’s mission to deliver scalable and high-integrity solutions globally.
</p>

<p className="text-slate-600 mb-4 leading-relaxed">
  They play a critical role in building strong partnerships, shaping policy-aligned
  strategies and ensuring every project meets international standards and delivers
  measurable environmental outcomes.
</p>

<p className="text-slate-600 leading-relaxed">
  Through a combination of experience, innovation and accountability, our leadership
  ensures that Ecoveda continues to scale its impact while maintaining transparency
  and trust across all stakeholders.
</p>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src={leaderImg}
              alt="Leadership"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>

        </div>
      </section>

      {/* 🔥 TEAM CULTURE */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* IMAGE */}
          <div className="order-2 lg:order-1">
            <img
              src={teamImg}
              alt="Team Culture"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Team Culture
            </h2>

           <p className="text-slate-600 mb-4 leading-relaxed">
  We foster a collaborative and impact-driven environment where innovation,
  responsibility and continuous learning are at the core of everything we do.
</p>

<p className="text-slate-600 mb-4 leading-relaxed">
  Our team works closely with communities, organisations and partners to
  deliver real-world climate solutions that create measurable change.
</p>

<p className="text-slate-600 mb-4 leading-relaxed">
  We encourage open communication, cross-functional collaboration and a culture
  of ownership, enabling every team member to contribute meaningfully to our mission.
</p>

<p className="text-slate-600 leading-relaxed">
  By nurturing talent and promoting innovation, we create an environment where
  ideas turn into impactful solutions that support global sustainability goals.
</p>
          </div>

        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

    {/* TEXT */}
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
        On-Ground Impact
      </h2>

      <p className="text-slate-600 mb-4 leading-relaxed">
        Our work extends beyond strategy into real-world implementation,
        where our teams actively engage with communities to drive meaningful change.
      </p>

      <p className="text-slate-600 mb-4 leading-relaxed">
        From field assessments to project execution, we ensure that every initiative
        delivers measurable environmental and social impact.
      </p>

      <p className="text-slate-600 leading-relaxed">
        This hands-on approach allows us to bridge the gap between planning and execution,
        creating sustainable outcomes at scale.
      </p>
    </div>

    {/* IMAGE */}
    <div>
      <img
        src={ground}
        alt="Field Work"
        className="w-full h-auto rounded-2xl shadow-lg object-cover"
      />
    </div>

  </div>
</section>

<section className="py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

    {/* IMAGE */}
    <div className="order-2 lg:order-1">
      <img
        src={collab}
        alt="Collaboration"
        className="w-full h-auto rounded-2xl shadow-lg object-cover"
      />
    </div>

    {/* TEXT */}
    <div className="order-1 lg:order-2">
      <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
        Collaboration & Partnerships
      </h2>

      <p className="text-slate-600 mb-4 leading-relaxed">
        We believe impactful climate solutions are built through strong partnerships
        with governments, organisations and local communities.
      </p>

      <p className="text-slate-600 mb-4 leading-relaxed">
        By working collaboratively, we combine expertise, resources and innovation
        to deliver scalable and sustainable solutions.
      </p>

      <p className="text-slate-600 leading-relaxed">
        Our ecosystem-driven approach ensures long-term success and continuous
        improvement across all our climate initiatives.
      </p>
    </div>

  </div>
</section>

    </div>
  );
}