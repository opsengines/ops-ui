'use client'

// React Imports
import { useEffect, useRef } from 'react'

// Third-party Imports
import styled from '@emotion/styled'

// Component Imports
import MaterioLogo from '@core/svg/Logo'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

const LogoText = styled.span`
  color: ${({ color }) => color ?? 'var(--mui-palette-text-primary)'};
  font-size: 1.15rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  margin-left:'-10px'
  transition: ${({ transitionDuration }) =>
    `margin-inline-start ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`};

  ${({ isHovered, isCollapsed }) =>
    isCollapsed && !isHovered ? 'opacity: 0; margin-inline-start: 0;' : 'opacity: 1; margin-inline-start: 10px;'}
`

const Logo = ({ color }) => {
  // Refs
  const logoTextRef = useRef(null)

  // Hooks
  const { isHovered, transitionDuration } = useVerticalNav()
  const { settings } = useSettings()

  // Vars
  const { layout } = settings

  const logoStyle = {
    fontFamily: 'Black Ops One',
    fontWeight: 400,
    fontStyle: 'normal'
  }

  useEffect(() => {
    if (layout !== 'collapsed') {
      return
    }

    if (logoTextRef && logoTextRef.current) {
      if (layout === 'collapsed' && !isHovered) {
        logoTextRef.current?.classList.add('hidden')
      } else {
        logoTextRef.current.classList.remove('hidden')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, layout])

  return (
    <div className='flex items-center min-bs-[22px]'>
      {/* <MaterioLogo className='text-[18px] text-primary' /> */}
      <img src='/images/robo.png' style={{ width: '60px', height: '50px' }} />
      <h3 style={logoStyle}>OpsEngine</h3>
      {/* <LogoText
        color={color}
        ref={logoTextRef}
        isHovered={isHovered}
        isCollapsed={layout === 'collapsed'}
        transitionDuration={transitionDuration}
      >
        <span style={{ marginLeft: '-23px' }}>{themeConfig.templateName}</span>
      </LogoText> */}
    </div>
  )
}

export default Logo
