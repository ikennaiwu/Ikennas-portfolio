export default function About() {
return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                <div className="flex-1 text-center">
                    <h2 className="text-2xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <div className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                            I am a Full Stack Engineer experienced in building frontend interfaces,
                            backend APIs, and deploying scalable systems.
                        </p>
                        <p>
                            My approach focuses on performance, clean architecture, and real-world problem solving. 
                            I enjoy bridging the gap between complex backend logic and intuitive user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}