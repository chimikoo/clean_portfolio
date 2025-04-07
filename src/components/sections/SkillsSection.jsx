export default function SkillsSection() {
    const skills = [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Node.js", level: 90 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "UI/UX Design", level: 65 },
      { name: "Database Management", level: 65 },
    ];
  
    const services = [
      {
        title: "Web Development",
        description: "Creating responsive and performant websites using modern technologies.",
        icon: "🌐",
      },
      {
        title: "Mobile App Development",
        description: "Building cross-platform mobile applications with React Native.",
        icon: "📱",
      },
      {
        title: "UI/UX Design",
        description: "Designing intuitive and engaging user interfaces and experiences.",
        icon: "🎨",
      },
      {
        title: "API Development",
        description: "Creating robust and scalable APIs for your applications.",
        icon: "⚙️",
      },
    ];
  
    return (
      <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Skills & Services
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                My technical skills and services I offer
              </p>
            </div>
          </div>
  
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="grid gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-800">
                    <div
                      className="h-2 rounded-full bg-emerald-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Services I Offer</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-lg border border-gray-800 bg-gray-800 p-6 text-gray-100 shadow-sm"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  