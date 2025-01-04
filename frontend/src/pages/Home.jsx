import React, { useEffect, useState } from "react";
import { styles } from "../styles/common";
import PageHeader from "../components/PageHeader";

const Home = () => {
   const [isVisible, setIsVisible] = useState(false);

   const technologyIcons = {
    languages: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
        { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" }
    ],
    frontend: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ],
    backend: [
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Rails", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
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
    { name: "Weights & Biases", icon: "https://wandb.ai/favicon.ico" }
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
               <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-6">
                   {techs.map((tech) => (
                       <div key={tech.name} className="flex flex-col items-center transition-transform hover:scale-110">
                           <img
                               src={tech.icon}
                               alt={tech.name}
                               className="h-12 w-12 mb-2"
                           />
                           <span className={`${styles.typography.textBase} text-sm text-center`}>{tech.name}</span>
                       </div>
                   ))}
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

                    {renderTechSection("Programming Languages", technologyIcons.languages)}
                    {renderTechSection("Frontend Technologies", technologyIcons.frontend)}
                    {renderTechSection("Backend Technologies", technologyIcons.backend)}
                    {renderTechSection("AWS Services", technologyIcons.aws)}
                    {renderTechSection("DevOps & Cloud", technologyIcons.devops)}
                    {renderTechSection("Databases", technologyIcons.databases)}
                    {renderTechSection("AI & Machine Learning", technologyIcons.ai)}
                    {renderTechSection("Monitoring & Analytics", technologyIcons.monitoring)}
                </div>
            </div>
        </main>
    </div>
   );
};

export default Home;