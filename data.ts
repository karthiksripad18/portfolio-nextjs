import {RiComputerLine} from 'react-icons/ri';
import { IService, ISkill } from './type';
import {BsCircleFill, BsCodeSlash} from 'react-icons/bs';
import {MdTouchApp} from 'react-icons/md';
import {FaServer} from 'react-icons/fa';

export const services: IService[] = [
    {
        title: "Frontend Development",
        about: "Build interactive websites with React, Redux, Javascript",
        Icon: RiComputerLine
    },
    {
        title: "Competitive Coding",
        about: "Regular competitive coding with HackerRak and AlgoExpert",
        Icon: BsCodeSlash
    },
    {
        title: "UI/UX Design",
        about: "Build stunning user interface using Figma",
        Icon: MdTouchApp
    },
    {
        title: "API Development",
        about: "Develop API Endpoint using Django and Django Restframework",
        Icon: FaServer
    }
];

export const languages: ISkill[] = [
    {
        name: 'Javascript',
        level: '95%',
        Icon: BsCircleFill
    },
    {
        name: 'Typescript',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'NodeJs',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'HTML5',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'CSS',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name: 'Sass',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Python',
        level: '65%',
        Icon: BsCircleFill
    },
];

export const tools: ISkill[] = [
    {
        name: 'ReactJs',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'Redux',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name: 'NextJs',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Tailwind CSS',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'Angular (2+)',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'Material Ui',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name: 'Django',
        level: '70%',
        Icon: BsCircleFill
    },
]