import Image from "next/image";
import Button from "../button/Button";
import GridSpot from "../gridSpot/GridSpot";
import styles from "./frameworks.module.css";

const frameworks = [
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        name: "Nextjs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        style: {
            borderRadius: "50%", 
            border: "1px solid white"
        }
    },
    {
        name: "Sass",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
    },
    {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    },
    {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    
]

const Frameworks = () => {
    return ( 
        <section className="relative">
            <GridSpot size="50vw 50vw" position="right" desktopOnly />
            <GridSpot size="120vw 120vw" position="bottom" mobileOnly />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Aux Racines des<br />Créations Numériques</h2>
                    <p className={styles.text}>Maîtrisant les fondamentaux du web avec HTML, CSS, et JavaScript, j’utilise une palette d’outils avancés pour sculpter des expériences utilisateurs fluides et captivantes. Les technologies que je présente ici ne sont qu’un aperçu de mon arsenal. Je suis constamment à l’affût de nouveaux outils pour enrichir mon offre et mieux s’adapter à vos visions les plus audacieuses.</p>
                    <div className={styles.ctas}>
                        <Button as="a" href="#contact">Contactez-moi</Button>
                        <Button as="a" href="/cv.pdf" secondary target="_blank">Voir le cv</Button>
                    </div>
                </div>
                <div className={styles.wheel}>
                    {frameworks.map(({ name: frameworkName, icon, style}, key) => (
                        <div className={styles.rotator} style={{ "--rotation-offset": `${360 / frameworks.length * key}deg` }} key={frameworkName}>
                            <Image className={styles.logo} width="64" height="64" src={icon} alt={frameworkName} style={style} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
 
export default Frameworks;