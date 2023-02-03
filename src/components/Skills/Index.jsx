import React from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../assets/styles/GlobalTypography';
import { Box} from '../../assets/styles/GlobalComponents';
import { AccordionBox, AccordionConjuntTitleAndIcon, AccordionContent, AccordionItem, AccordionTitle, AccordionWrapper, FlexLg, ImageSkill, ProgressTitle, Wrapper } from './Styled';
import SkillBar from 'react-skillbars';
import {BsCodeSlash} from 'react-icons/bs'
import {BiCodeCurly} from 'react-icons/bi'
import {MdOutlineDesignServices} from 'react-icons/md'
import {FiDatabase} from 'react-icons/fi'
import skillImage from '../../assets/img/skills-image.svg'

const skillsFrontend = [
    { type: 'ReactJS', level: 68 },
    { type: 'VueJS', level: 73 },
    { type: 'MUI', level: 63 },
    { type: 'S-C', level: 65 },
    { type: 'Tailwind', level: 85 },
    { type: 'Bootstrap', level: 87 },
    { type: 'SASS', level: 78 },
    { type: 'CSS', level:  92 }
];

const skillsBackend = [
    { type: 'Java', level: 71 },
    { type: 'Spring Boot', level: 55 },
    { type: 'Junit', level: 45 },
    { type: 'Swagger', level: 72 },
    { type: 'JWT', level: 50 },
    { type: 'Spring Security', level: 55 },
    { type: 'NodeJS', level:  67 },
    { type: 'Express', level:  61 },
    { type: 'MySQL', level:  81 },
    { type: 'MongoDB', level:  71 },
];

const skillsDevops = [
    { type: 'Heroku', level: 75 },
    { type: 'AWS', level: 66 },
    { type: 'Docker', level: 72 },
];

const skillsOutros = [
    { type: 'Figma', level: 65 },
    { type: 'Github', level: 89 },
    { type: 'Insomia', level: 66 },
    { type: 'Linux', level: 70 },
    { type: 'Ui Design', level: 64 },
    { type: 'Colletions', level: 74 },
];


const colors = {
    bar: "#FCA61F",
    title: {
      text: "#fff",
      background: "#FCA61F"
    }
};


const Accordion = ({ title, children, icon }) => {

    const [isOpen, setOpen] = React.useState(false);

    return (
        <AccordionWrapper>

            <AccordionTitle className={`accordion-title ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
                <AccordionConjuntTitleAndIcon>{icon} {title}</AccordionConjuntTitleAndIcon>
            </AccordionTitle>

            <AccordionItem className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <AccordionContent>{children}</AccordionContent>
            </AccordionItem>

        </AccordionWrapper>
    );
};

const Skills = () => {
    
  return (
    <StyledSection id="skills">
        <Container>
            <Row>
                <Col size='10rem'>
                    <Box>
                        <TypographyTitle>SKILLS</TypographyTitle>
                        <TypographyDescription>
                            Segue essa seção sendo um breve resumo, sobre minhas hard skills, seguindo a porcentagem sobre
                            cada skill, assim tendo uma clareza diante meus conhecimentos em tal skill.
                        </TypographyDescription>
                    </Box>
                    <Row>
                        <Col size="3rem">
                                <Wrapper>
                                    <Accordion icon={<BiCodeCurly/>} title="Frontend Development">
                                        <SkillBar skills={skillsFrontend} colors={colors} height={30} />
                                    </Accordion>
                                </Wrapper>
                                <Wrapper>
                                    <Accordion icon={<BsCodeSlash />} title="Backend Development">
                                     <SkillBar skills={skillsBackend} colors={colors} height={30} />
                                    </Accordion>
                                </Wrapper>

                                <Wrapper>
                                    <Accordion  icon={<FiDatabase />} title="DevOps" >
                                       <SkillBar skills={skillsDevops} colors={colors} height={30} />     
                                    </Accordion>
                                </Wrapper>
                                <Wrapper>
                                    <Accordion icon={<MdOutlineDesignServices/>} title="Outros">
                                      <SkillBar skills={skillsOutros} colors={colors} height={30} />
                                    </Accordion>
                                </Wrapper>
                        </Col>
                        <Col style={{textAlign: 'center'}} size="3rem"><ImageSkill src={skillImage} alt="Figura de 2D animada"/></Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Skills;