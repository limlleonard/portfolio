import cchecker4 from "@img/cchecker4.png"
import ragger from "@img/ragger.png"
import imageTile from "@img/image_tile.jpg"
import djBlog from "@img/django_blog.png"
import konstruktion from "@img/react_konstruktion.png"
import row from "@img/4in1row.png"
import spiral from "@img/spiral.png"
import five from "@img/g2_five.png"
import statistic2 from "@img/statistic2.png"
export type ProjectInfo = {
    href: string;
    imageSrc: string;
    title: string;
};

export const projectData: ProjectInfo[] = [
    {
        href: "https://github.com/limlleonard/cchecker_frontend",
        imageSrc: cchecker4,
        title: "projects.cc",
    },

    {
        href: "https://github.com/limlleonard/ragger_react",
        imageSrc: ragger,
        title: "projects.rag",
    },
    {
        href: "https://github.com/limlleonard/image_tile",
        imageSrc: imageTile,
        title: "projects.imageTile",
    },
    {
        href: "https://github.com/limlleonard/dj_blog",
        imageSrc: djBlog,
        title: "projects.blog",
    },
    {
        href: "https://github.com/limlleonard/react_schule3_konstruktion",
        imageSrc: konstruktion,
        title: "projects.kegel",
    },
    {
        href: "https://github.com/limlleonard/game1_four_in_a_row",
        imageSrc: row,
        title: "projects.fourIn1Row",
    },
    {
        href: "https://github.com/limlleonard/js_spiral",
        imageSrc: spiral,
        title: "projects.spiral",
    },
    {
        href: "https://github.com/limlleonard/project_personal/tree/main/g2_five_in_a_line",
        imageSrc: five,
        title: "projects.fiveIn1Row",
    },
    {
        href: "https://pubs.rsc.org/en/content/articlelanding/2020/sm/d0sm00460j#!",
        imageSrc: statistic2,
        title: "projects.regression",
    },
];
