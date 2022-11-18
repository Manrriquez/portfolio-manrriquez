import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box} from '../../styles/GlobalComponents';
import {FlexLg, TextEducation} from './Styled';
import { Chrono } from 'react-chrono';
import { BsBag, BsBook} from 'react-icons/bs'

const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`
    },
    {
      title: "25 July 1940",
      cardTitle: "The Battle of Britain",
      cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
      cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
        The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`
    },
    {
      title: "June 1941",
      cardTitle: "Operation Barbarossa",
      cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
      cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
        Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
        On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`
    },
    {
      title: "7 December 1941",
      cardTitle: "Pearl Harbor",
      cardSubtitle: `The destroyer USS Shaw explodes in dry dock after being hit by Japanese aircraft`,
      cardDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt, followed by Britain and the Netherlands, ordered the freezing of Japanese assets.
        Many Japanese now believed that there was no alternative between economic ruin and going to war with the United States and the European colonial powers. In October 1941, a hardline government under General Hideki Tojo came to power, and preparations were made to deliver a devastating blow against the Americans.`
    },
    {
      title: "15 February 1942",
      cardTitle: "The fall of Singapore",
      cardSubtitle: `Lieutenant General Arthur Percival and staff on their way to the Singapore Ford factory to negotiate the island’s surrender with General Yamashita`,
      cardDetailedText: `The Japanese began their invasion of Malaya on 8 December 1941, and very soon the British and empire defenders were in full retreat.
        Told previously that the Japanese were no match for European troops, morale among the defending forces slumped as General Tomoyuki Yamashita’s forces moved swiftly southwards towards Singapore.
        The sinking of the British capital ships HMS Prince of Wales and Repulse by Japanese aircraft also contributed to the decline in morale, and panic began to set in among the civil population and the fighting troops. British commander Lieutenant General Arthur Percival had hoped to make a stand at Johore, but was forced to withdraw to Singapore Island. The Japanese landed there on 8/9 February, and before long the defence collapsed. To avoid further bloodshed, and with his water supply gone, Percival surrendered on 15 February.
        Churchill described the surrender as, “the worst disaster… in British military history”. Over 130,000 British and empire troops surrendered to a much smaller Japanese force, which only suffered 9,824 battle casualties during the 70-day campaign. Singapore was not only a humiliating military defeat, but also a tremendous blow to the prestige of the ‘white man’ throughout Asia.`
    },
  ];


const Education = () => {
    
  return (
    <StyledSection>
        <Container>
            <Row>
                <Col size='10rem'>
                    <Box>
                        <TypographyTitle>HABILIDADES</TypographyTitle>
                        <TypographyDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reiciendis?</TypographyDescription>
                    </Box>
                    <Row>
                        <Col>
                            <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: "2rem"}}>
                               <TextEducation>
                                  <BsBag />
                                  Carreira
                               </TextEducation>
                               <TextEducation>
                                  <BsBook />
                                  Educação
                               </TextEducation>
                            </div>
                            <FlexLg>
                              <div style={{ width: "100%"}}>
                                  <Chrono items={items} theme={{
                                      primary: '#393536',
                                      secondary: '#FCA61F',
                                      cardBgColor: '#FFFF',
                                      cardForeColor: '#393536',
                                      titleColor: '#393536',
                                      titleColorActive: '#393536',
                                  }} mode="VERTICAL_ALTERNATING" />
                              </div>
                            </FlexLg>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Education;