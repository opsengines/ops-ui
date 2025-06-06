// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// import { GenerateVerticalMenu } from '@components/GenerateMenu'

//Icon Import
//Icon Imports
import PolicyIcon from '@mui/icons-material/Policy'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import SettingsIcon from '@mui/icons-material/Settings'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import AssistantIcon from '@mui/icons-material/Assistant'
import SecurityIcon from '@mui/icons-material/Security'

import { Assessment } from '@mui/icons-material'

import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports

import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary, scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()

  // Vars
  const { transitionDuration } = verticalNavOptions
  const { lang: locale } = params
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 10 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <SubMenu label={dictionary['navigation'].dashboards} icon={<i className='ri-home-smile-line' />}>
          <MenuItem href={`/${locale}/dashboards/crm`}>Visibility</MenuItem>
          <MenuItem href={`/${locale}/apps/kanban`} icon={<i className='ri-drag-drop-line' />}>
            {dictionary['navigation'].kanban}
          </MenuItem>
          {/* <MenuItem href={`/${locale}/apps/chat`} icon={<i className='ri-wechat-line' />}>
            {dictionary['navigation'].chat}
          </MenuItem> */}
          {/* <MenuItem href={`/${locale}/dashboards/analytics`}>{dictionary['navigation'].analytics}</MenuItem> */}
          {/* <MenuItem href={`/${locale}/dashboards/ecommerce`}>{dictionary['navigation'].eCommerce}</MenuItem> */}
          {/* <MenuItem href={`/${locale}/dashboards/logistics`}>{dictionary['navigation'].logistics}</MenuItem> */}
        </SubMenu>

        {/* <MenuItem href={`/${locale}/apps/securityplans`} icon={<SecurityIcon />}>
          Blueprints
        </MenuItem> */}
        {/* <SubMenu label={dictionary['navigation'].frontPages} icon={<i className='ri-file-copy-line' />}>
          <MenuItem href='/front-pages/landing-page' target='_blank'>
            {dictionary['navigation'].landing}
          </MenuItem>
          <MenuItem href='/front-pages/pricing' target='_blank'>
            {dictionary['navigation'].pricing}
          </MenuItem>
          <MenuItem href='/front-pages/payment' target='_blank'>
            {dictionary['navigation'].payment}
          </MenuItem>
          <MenuItem href='/front-pages/checkout' target='_blank'>
            {dictionary['navigation'].checkout}
          </MenuItem>
          <MenuItem href='/front-pages/help-center' target='_blank'>
            {dictionary['navigation'].helpCenter}
          </MenuItem>
        </SubMenu> */}
        {/* <SubMenu label={'Engine Scans'} icon={<i className='ri-shopping-bag-3-line' />}>
          <MenuItem href={`/${locale}/apps/securityengines/sast`}>SAST Engine</MenuItem>
          <MenuItem href={`/${locale}/apps/securityengines/scm`}>SCA Engine</MenuItem>
          <MenuItem href={`/${locale}/apps/securityengines/sbom`}>SBOM Engine</MenuItem>
          <MenuItem href={`/${locale}/apps/securityengines/dast`}>DAST Engine</MenuItem>
          <MenuItem href={`/${locale}/apps/securityengines/api`}>API Engine</MenuItem>
          <MenuItem href={`/${locale}/apps/securityengines/cicd`}>CI/CD Engine</MenuItem>
          <MenuItem href={`/${locale}/apps/securityengines/cloudsecurity`}>CSPM Engine</MenuItem>
          <MenuItem href={`/${locale}/apps/securityengines/iac`}>IAC Engine</MenuItem>
          <MenuItem href={`/${locale}/apps/securityengines/secrets`}>Secrets Engine</MenuItem>
          <MenuItem href={`/${locale}/apps/securityengines/compliance`}>Compliance Engine</MenuItem>
          <MenuItem href={`/${locale}/apps/securityengines/aiml`}>AI/ML Engine</MenuItem>
        </SubMenu> */}

        <MenuItem href={`/${locale}/apps/results`} icon={<Assessment />}>
          Scans & Results
        </MenuItem>
        <MenuItem
          href={`/${locale}/apps/cweList`}
          icon={
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <path
                fill='#dfdede'
                d='M15 3h6v5h-2V5h-4zM9 3v2H5v3H3V3zm6 18v-2h4v-3h2v5zm-6 0H3v-5h2v3h4zM3 11h18v2H3z'
              />
            </svg>
          }
        >
          VulnFix-Hub
        </MenuItem>
        <MenuItem href={`/${locale}/apps/policies`} icon={<PolicyIcon />}>
          Policies
        </MenuItem>
        <MenuItem href={`/${locale}/apps/connectors`} icon={<IntegrationInstructionsIcon />}>
          Integrations
        </MenuItem>
        <MenuItem href={`/${locale}/apps/reports`} icon={<Assessment />}>
          Reports
        </MenuItem>
        {/* <SubMenu label={dictionary['navigation'].academy} icon={<i className='ri-graduation-cap-line' />}>
            <MenuItem href={`/${locale}/apps/academy/dashboard`}>{dictionary['navigation'].dashboard}</MenuItem>
            <MenuItem href={`/${locale}/apps/academy/course-details`}>
              {dictionary['navigation'].courseDetails}
            </MenuItem>
          </SubMenu> */}
        {/* <SubMenu label={dictionary['navigation'].logistics} icon={<i className='ri-car-line' />}>
            <MenuItem href={`/${locale}/apps/logistics/dashboard`}>{dictionary['navigation'].dashboard}</MenuItem>
            <MenuItem href={`/${locale}/apps/logistics/fleet`}>{dictionary['navigation'].fleet}</MenuItem>
          </SubMenu> */}
        {/* <MenuItem
            href={`/${locale}/apps/email`}
            exactMatch={false}
            activeUrl='/apps/email'
            icon={<i className='ri-mail-open-line' />}
          >
            {dictionary['navigation'].email}
          </MenuItem> */}
        {/* <MenuItem href={`/${locale}/apps/calendar`} icon={<i className='ri-calendar-line' />}>
            {dictionary['navigation'].calendar}
          </MenuItem> */}
        {/* <MenuItem href={`/${locale}/apps/kanban`} icon={<i className='ri-drag-drop-line' />}>
            {dictionary['navigation'].kanban}
          </MenuItem> */}
        {/* <SubMenu label={dictionary['navigation'].invoice} icon={<i className='ri-bill-line' />}>
            <MenuItem href={`/${locale}/apps/invoice/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem
              href={`/${locale}/apps/invoice/preview/4987`}
              exactMatch={false}
              activeUrl='/apps/invoice/preview'
            >
              {dictionary['navigation'].preview}
            </MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/edit/4987`} exactMatch={false} activeUrl='/apps/invoice/edit'>
              {dictionary['navigation'].edit}
            </MenuItem>
            <MenuItem href={`/${locale}/apps/invoice/add`}>{dictionary['navigation'].add}</MenuItem>
          </SubMenu> */}
        {/* <SubMenu label={dictionary['navigation'].user} icon={<i className='ri-user-line' />}>
          <MenuItem href={`/${locale}/apps/user/list`}>{dictionary['navigation'].list}</MenuItem>
          <MenuItem href={`/${locale}/apps/user/view`}>{dictionary['navigation'].view}</MenuItem>
        </SubMenu>
        <SubMenu label={dictionary['navigation'].rolesPermissions} icon={<i className='ri-lock-2-line' />}>
          <MenuItem href={`/${locale}/apps/roles`}>{dictionary['navigation'].roles}</MenuItem>
          <MenuItem href={`/${locale}/apps/permissions`}>{dictionary['navigation'].permissions}</MenuItem>
        </SubMenu> */}
        <SubMenu label={'Settings'} icon={<SettingsIcon />}>
          <MenuItem href={`/${locale}/apps/settings/auditLogs`}>Audit Logs</MenuItem>
          <MenuItem href={`/${locale}/apps/settings/userGroups`}>Users</MenuItem>
          <MenuItem href={`/${locale}/apps/settings/roles`}>Roles & Permissions</MenuItem>
          <MenuItem href={`/${locale}/apps/settings/notifications`}>Notifications & Alerts</MenuItem>
          <MenuItem href={`/${locale}/apps/settings/licence`}>Licence & Plan</MenuItem>
          <MenuItem href={`/${locale}/apps/settings/payments`}>Payments</MenuItem>
        </SubMenu>
        {/* <SubMenu label={dictionary['navigation'].pages} icon={<i className='ri-layout-left-line' />}>
            <MenuItem href={`/${locale}/pages/user-profile`}>{dictionary['navigation'].userProfile}</MenuItem>
            <MenuItem href={`/${locale}/pages/account-settings`}>{dictionary['navigation'].accountSettings}</MenuItem>
            <MenuItem href={`/${locale}/pages/faq`}>{dictionary['navigation'].faq}</MenuItem>
            <MenuItem href={`/${locale}/pages/pricing`}>{dictionary['navigation'].pricing}</MenuItem>
            <SubMenu label={dictionary['navigation'].miscellaneous}>
              <MenuItem href={`/${locale}/pages/misc/coming-soon`} target='_blank'>
                {dictionary['navigation'].comingSoon}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/under-maintenance`} target='_blank'>
                {dictionary['navigation'].underMaintenance}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/404-not-found`} target='_blank'>
                {dictionary['navigation'].pageNotFound404}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/misc/401-not-authorized`} target='_blank'>
                {dictionary['navigation'].notAuthorized401}
              </MenuItem>
            </SubMenu>
          </SubMenu> */}
        {/* <SubMenu label={dictionary['navigation'].authPages} icon={<i className='ri-shield-keyhole-line' />}>
            <SubMenu label={dictionary['navigation'].login}>
              <MenuItem href={`/${locale}/pages/auth/login-v1`} target='_blank'>
                {dictionary['navigation'].loginV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/login-v2`} target='_blank'>
                {dictionary['navigation'].loginV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].register}>
              <MenuItem href={`/${locale}/pages/auth/register-v1`} target='_blank'>
                {dictionary['navigation'].registerV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/register-v2`} target='_blank'>
                {dictionary['navigation'].registerV2}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/register-multi-steps`} target='_blank'>
                {dictionary['navigation'].registerMultiSteps}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].verifyEmail}>
              <MenuItem href={`/${locale}/pages/auth/verify-email-v1`} target='_blank'>
                {dictionary['navigation'].verifyEmailV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/verify-email-v2`} target='_blank'>
                {dictionary['navigation'].verifyEmailV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].forgotPassword}>
              <MenuItem href={`/${locale}/pages/auth/forgot-password-v1`} target='_blank'>
                {dictionary['navigation'].forgotPasswordV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/forgot-password-v2`} target='_blank'>
                {dictionary['navigation'].forgotPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].resetPassword}>
              <MenuItem href={`/${locale}/pages/auth/reset-password-v1`} target='_blank'>
                {dictionary['navigation'].resetPasswordV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/reset-password-v2`} target='_blank'>
                {dictionary['navigation'].resetPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].twoSteps}>
              <MenuItem href={`/${locale}/pages/auth/two-steps-v1`} target='_blank'>
                {dictionary['navigation'].twoStepsV1}
              </MenuItem>
              <MenuItem href={`/${locale}/pages/auth/two-steps-v2`} target='_blank'>
                {dictionary['navigation'].twoStepsV2}
              </MenuItem>
            </SubMenu>
          </SubMenu> */}
        {/* <SubMenu label={dictionary['navigation'].wizardExamples} icon={<i className='ri-git-commit-line' />}>
            <MenuItem href={`/${locale}/pages/wizard-examples/checkout`}>{dictionary['navigation'].checkout}</MenuItem>
            <MenuItem href={`/${locale}/pages/wizard-examples/property-listing`}>
              {dictionary['navigation'].propertyListing}
            </MenuItem>
            <MenuItem href={`/${locale}/pages/wizard-examples/create-deal`}>
              {dictionary['navigation'].createDeal}
            </MenuItem>
          </SubMenu>
          <MenuItem href={`/${locale}/pages/dialog-examples`} icon={<i className='ri-tv-2-line' />}>
            {dictionary['navigation'].dialogExamples}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].widgetExamples} icon={<i className='ri-bar-chart-box-line' />}>
            <MenuItem href={`/${locale}/pages/widget-examples/basic`}>{dictionary['navigation'].basic}</MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/advanced`}>{dictionary['navigation'].advanced}</MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/statistics`}>
              {dictionary['navigation'].statistics}
            </MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/charts`}>{dictionary['navigation'].charts}</MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/gamification`}>
              {dictionary['navigation'].gamification}
            </MenuItem>
            <MenuItem href={`/${locale}/pages/widget-examples/actions`}>{dictionary['navigation'].actions}</MenuItem>
          </SubMenu> */}
        {/* <MenuSection label={dictionary['navigation'].formsAndTables}>
          <MenuItem href={`/${locale}/forms/form-layouts`} icon={<i className='ri-layout-4-line' />}>
            {dictionary['navigation'].formLayouts}
          </MenuItem>
          <MenuItem href={`/${locale}/forms/form-validation`} icon={<i className='ri-checkbox-multiple-line' />}>
            {dictionary['navigation'].formValidation}
          </MenuItem>
          <MenuItem href={`/${locale}/forms/form-wizard`} icon={<i className='ri-git-commit-line' />}>
            {dictionary['navigation'].formWizard}
          </MenuItem>
          <MenuItem href={`/${locale}/react-table`} icon={<i className='ri-table-alt-line' />}>
            {dictionary['navigation'].reactTable}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-radio-button-line' />}
          >
            {dictionary['navigation'].formELements}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-table-2' />}
          >
            {dictionary['navigation'].muiTables}
          </MenuItem>
        </MenuSection> */}
        {/* <MenuSection label={dictionary['navigation'].chartsMisc}>
          <SubMenu label={dictionary['navigation'].charts} icon={<i className='ri-bar-chart-2-line' />}>
            <MenuItem href={`/${locale}/charts/apex-charts`}>{dictionary['navigation'].apex}</MenuItem>
            <MenuItem href={`/${locale}/charts/recharts`}>{dictionary['navigation'].recharts}</MenuItem>
          </SubMenu>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-pantone-line' />}
          >
            {dictionary['navigation'].foundation}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-toggle-line' />}
          >
            {dictionary['navigation'].components}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-menu-search-line' />}
          >
            {dictionary['navigation'].menuExamples}
          </MenuItem>
          <MenuItem
            href='https://themeselection.com/support'
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-lifebuoy-line' />}
          >
            {dictionary['navigation'].raiseSupport}
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}`}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
            icon={<i className='ri-book-line' />}
          >
            {dictionary['navigation'].documentation}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].others} icon={<i className='ri-more-line' />}>
            <MenuItem suffix={<Chip label='New' size='small' color='info' />}>
              {dictionary['navigation'].itemWithBadge}
            </MenuItem>
            <MenuItem
              href='https://mui.com/store/contributors/themeselection'
              target='_blank'
              suffix={<i className='ri-external-link-line text-xl' />}
            >
              {dictionary['navigation'].externalLink}
            </MenuItem>
            <SubMenu label={dictionary['navigation'].menuLevels}>
              <MenuItem>{dictionary['navigation'].menuLevel2}</MenuItem>
              <SubMenu label={dictionary['navigation'].menuLevel2}>
                <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
                <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem disabled>{dictionary['navigation'].disabledMenu}</MenuItem>
          </SubMenu>
        </MenuSection> */}
      </Menu>
      {/* <Menu
          popoutMenuOffset={{ mainAxis: 10 }}
          menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
          renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
          renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
          menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
        >
          <GenerateVerticalMenu menuData={menuData(dictionary)} />
        </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
