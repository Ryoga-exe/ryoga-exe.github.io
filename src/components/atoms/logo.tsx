import React from "react"
import styled from "styled-components"

type LogoProps = {
  width?: string;
  minWidth?: string;
  fill?: string;
  isHero?: boolean;
}

const Base = styled.div<{width?: string, minWidth?: string, fill?: string, height: string, isHero: boolean}>`
  width:     ${props => (props.width    || '12%')};
  min-width: ${props => (props.minWidth || '270px')};
  fill:      ${props => (props.fill     || 'black')};
  height:    ${props => props.height};

  @media (max-width: 751px){
    min-width: ${props => (props.isHero?'230px':(props.minWidth || '270px'))};
  }
`

const Logo: React.FC<LogoProps> = ({ width, minWidth, fill, isHero=false }) => {
  const height = 9/59*parseFloat(width || '270');
  return (
    <Base width={width} minWidth={minWidth} fill={fill} height={height+'px'} isHero={isHero}>
      <svg  viewBox="0 0 590 90">
        <title>Ryoga.exe</title>
        <path d="M120 80L120 90L80 90L80 80L110 80L110 70L80 70L80 60L70 60L70 30L90 30L90 60L110 60L110 30L130 30L130 80L120 80ZM220 90L220 80L260 80L260 90L220 90ZM200 40L200 70L190 70L190 80L150 80L150 70L140 70L140 40L150 40L150 30L190 30L190 40L200 40ZM60 10L60 40L50 40L50 50L60 50L60 80L40 80L40 50L20 50L20 40L40 40L40 10L20 10L20 0L50 0L50 10L60 10ZM0 80L0 0L20 0L20 80L0 80ZM540 80L540 70L590 70L590 80L540 80ZM360 80L360 60L380 60L380 80L360 80ZM340 70L350 70L350 80L330 80L330 70L320 70L320 80L290 80L290 70L280 70L280 40L290 40L290 30L340 30L340 70ZM450 40L450 60L410 60L410 50L430 50L430 40L410 40L410 70L450 70L450 80L400 80L400 70L390 70L390 40L400 40L400 30L440 30L440 40L450 40ZM520 70L520 80L500 80L500 70L490 70L490 80L460 80L460 70L470 70L470 60L510 60L510 70L520 70ZM250 80L250 40L230 40L230 60L250 60L250 70L220 70L220 60L210 60L210 40L220 40L220 30L270 30L270 80L250 80ZM160 70L180 70L180 40L160 40L160 70ZM300 70L320 70L320 40L300 40L300 70ZM590 40L590 60L550 60L550 50L570 50L570 40L550 40L550 70L530 70L530 40L540 40L540 30L580 30L580 40L590 40ZM500 50L500 60L480 60L480 50L470 50L470 40L510 40L510 50L500 50ZM460 40L460 30L480 30L480 40L460 40ZM500 40L500 30L520 30L520 40L500 40Z"></path>
      </svg>
    </Base>
  )
}

export default Logo