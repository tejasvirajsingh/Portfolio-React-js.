import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import TwitterIcon from "@/components/icons/twitter";
import LeetcodeIcon from "@/components/icons/Leetcode";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/Satyam-R4j" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/satyam-r4j/" },
    { icon: <TwitterIcon />, path: "https://x.com/satyamraj2104" },
    { icon: <LeetcodeIcon />, path: "https://leetcode.com/u/Satyam-Raj/" },
    // <img src="/icons/twitter-dark.svg" alt="X Logo"/>
];

const Social = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        target="_blank"
                        href={item.path}
                        className={iconsStyles}
                    >
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
