import React, { useEffect, useState } from "react";
import { styles } from "../styles/common";
import PageHeader from "../components/PageHeader";
import CarouselSection from '../components/Animation/Carousel';
const Home = () => {
   const [isVisible, setIsVisible] = useState(false);

   const technologyIcons = {
    ai: [
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo.svg" },
        { name: "GPT-4", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "LangChain", icon: "https://python.langchain.com/img/favicon.ico" },
        { name: "Claude", icon: "https://www.anthropic.com/favicon.ico" },
        { name: "CUDA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cuda/cuda-original.svg" },
        { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
        { name: "Pinecone", icon: "https://app.pinecone.io/favicon.ico" },
        { name: "Weights & Biases", icon: "https://wandb.ai/favicon.ico" },
        { name: "OpenAI", icon: "https://openai.com/favicon.ico" },
        { name: "Stable Diffusion", icon: "https://stability.ai/favicon.ico" },
        { name: "MLflow", icon: "https://www.mlflow.org/favicon.ico" }
    ],
    languages: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" },
        { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" }
    ],
        backend: [
                { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
                { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
                { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
                { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
                { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
                { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
            ],
    frontend: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" }
    ],

    devops: [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Snowflake", icon: "https://www.snowflake.com/wp-content/themes/snowflake/assets/img/snowflake-logo-blue.svg" }
    ],
    databases: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
    ],
    aws: [
    { name: "Lambda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "S3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "ECS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "EKS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "SQS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "SNS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "CloudWatch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "API Gateway", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Step Functions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" }
],
monitoring: [
    { name: "Splunk", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/splunk/splunk-original.svg" },
    { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
    { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
    { name: "DataDog", icon: "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg" }
]
};

       const renderTechSection = (title, techs) => {
            if (!techs || !Array.isArray(techs)) return null;

            return (
                <div className="mb-8">
                    <h3 className={`${styles.typography.textBase} font-semibold mb-4`}>{title}</h3>
                    <div className="relative overflow-hidden py-4">
                        {/* Left fade effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 dark:from-gray-900/90 to-transparent z-10"></div>

                        {/* Right fade effect */}
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 dark:from-gray-900/90 to-transparent z-10"></div>

                        {/* Scrolling container */}
                        <div className="flex animate-scroll-right gap-8">
                            {duplicatedTechs.map((tech, index) => (
                                <div
                                    key={`${tech.name}-${index}`}
                                    className="flex flex-col items-center flex-shrink-0 w-24 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                                >
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="h-12 w-12 mb-2 drop-shadow-lg"
                                    />
                                    <span className={`${styles.typography.textBase} text-sm text-center`}>
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        };

   useEffect(() => {
       const timer = setTimeout(() => setIsVisible(true), 50);
       return () => clearTimeout(timer);
   }, []);

   return (
     <div className={styles.mainWrapper}>
        <PageHeader title="Welcome to My Developer Portfolio" />
        <main className={`${styles.pageContentWrapper} pt-32`}>
            <div className={`${styles.projectContainer} ${styles.pageTransition.base} ${isVisible ? styles.pageTransition.visible : styles.pageTransition.hidden}`}>
                <div className={styles.firstProjectMobile}>
                    <p className={`${styles.typography.textBase} text-left`}>
                        Hi there! I'm River Cha, a software engineer focused on cloud solutions and infrastructure automation.
                        Currently at Trident Trust Corporate Services, I architect and develop scalable software solutions
                        for crypto data processing using Python, Go, and AWS services.
                    </p>
                    <p className={`${styles.typography.textBase} text-left mb-12`}>
                        I'm passionate about building efficient, cloud-native applications and implementing automated
                        solutions that drive operational excellence. Whether it's designing microservices architectures
                        or optimizing data processing workflows, I focus on creating reliable and scalable systems.
                    </p>

                    <h2 className={`${styles.typography.headerSecondary} mb-8`}>Technology Stack</h2>

                    <CarouselSection title="AI & Machine Learning" techs={technologyIcons.ai} />
                    <CarouselSection title="Programming Languages" techs={technologyIcons.languages} />
                    <CarouselSection title="Frontend Technologies" techs={technologyIcons.frontend} />
                    <CarouselSection title="Backend Technologies" techs={technologyIcons.backend} />
                    <CarouselSection title="AWS Services" techs={technologyIcons.aws} />
                    <CarouselSection title="DevOps & Cloud" techs={technologyIcons.devops} />
                    <CarouselSection title="Databases" techs={technologyIcons.databases} />
                    <CarouselSection title="Monitoring & Analytics" techs={technologyIcons.monitoring} />
                </div>
            </div>
        </main>
    </div>
   );
};

export default Home;