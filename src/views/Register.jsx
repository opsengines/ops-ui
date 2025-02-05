'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

//axios
import axios from 'axios'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import { Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import Illustrations from '@components/Illustrations'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'
import { registerUrl } from '@/api/ApiConstanst'

const RegisterV2 = ({ mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [formData, setFormData] = useState({})
  const [open, setOpen] = useState(false)

  // Vars
  const darkImg = '/images/pages/auth-v2-mask-dark.png'
  const lightImg = '/images/pages/auth-v2-mask-light.png'
  const darkIllustration = '/images/illustrations/auth/v2-register-dark.png'
  const lightIllustration = '/images/illustrations/auth/v2-register-light.png'
  const borderedDarkIllustration = '/images/illustrations/auth/v2-register-dark-border.png'
  const borderedLightIllustration = '/images/illustrations/auth/v2-register-light-border.png'

  const registerUser = async () => {
    try {
      const response = await axios.post(`${registerUrl}`, formData)

      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  // Hooks
  const { lang: locale } = useParams()
  const authBackground = useImageVariant(mode, lightImg, darkImg)
  const { settings } = useSettings()

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  )

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const onSubmit = e => {
    e.preventDefault()
    registerUser()
    handleOpen()
    setFormData({
      name: '',
      email: '',
      reason: '',
      password: ''
    })
  }

  return (
    <div className='flex bs-full justify-center'>
      <div
        className={classnames(
          'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
          {
            'border-ie': settings.skin === 'bordered'
          }
        )}
      >
        <div className='plb-12 pis-12'>
          <img
            src={characterIllustration}
            alt='character-illustration'
            className='max-bs-[500px] max-is-full bs-auto'
          />
        </div>
        <Illustrations
          image1={{ src: '/images/illustrations/objects/tree-3.png' }}
          image2={null}
          maskImg={{ src: authBackground }}
        />
      </div>
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <Link
          href={getLocalizedUrl('/', locale)}
          className='absolute block-start-5 sm:block-start-[38px] inline-start-6 sm:inline-start-[38px]'
        >
          <Logo />
        </Link>

        <div className='flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]'>
          <div>
            <Typography variant='h4'>Adventure starts here 🚀</Typography>
            <Typography className='mbe-1'>Your all-in-one platform for product security</Typography>
          </div>
          <form autoComplete='off' onSubmit={onSubmit} className='flex flex-col gap-5'>
            <TextField
              required
              autoFocus
              fullWidth
              label='Full Name'
              value={formData?.name}
              onChange={event => setFormData(prev => ({ ...prev, full_name: event.target.value }))}
            />
            <TextField
              required
              fullWidth
              label='Email'
              value={formData?.email}
              onChange={event =>
                setFormData(prev => ({ ...prev, email: event.target.value, username: event.target.value }))
              }
            />
            <TextField
              required
              fullWidth
              label='Password'
              type={isPasswordShown ? 'text' : 'password'}
              onChange={event => setFormData(prev => ({ ...prev, password: event.target.value }))}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      size='small'
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={e => e.preventDefault()}
                    >
                      <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            {/* <div className='flex justify-between items-center gap-3'>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <>
                    <span>I agree to </span>
                    <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                      privacy policy & terms
                    </Link>
                  </>
                }
              />
            </div> */}
            <Button fullWidth variant='contained' type='submit'>
              Register
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
              <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <CheckCircleIcon sx={{ color: 'green', marginRight: 1, fontSize: '2rem' }} />
                  <Typography>Success</Typography>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Typography variant='body1' color='text.secondary' align='center'>
                  Thank You For Reaching Out, Our Team Will Review Your Application And Reach Out To You Soon.
                </Typography>
              </DialogContent>
              <DialogActions sx={{ justifyContent: 'flex-end', paddingRight: 2, paddingBottom: 2 }}>
                <Button variant='outlined' onClick={handleClose}>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            {/* <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Already have an account?</Typography>
              <Typography component={Link} href='/login' color='primary'>
                Sign in instead
              </Typography>
            </div> */}
            {/* <Divider className='gap-3'>or</Divider>
            <div className='flex justify-center items-center gap-2'>
              <IconButton size='small'>
                <i className='ri-facebook-fill text-facebook' />
              </IconButton>
              <IconButton size='small'>
                <i className='ri-twitter-fill text-twitter' />
              </IconButton>
              <IconButton size='small'>
                <i className='ri-github-fill text-github' />
              </IconButton>
              <IconButton size='small'>
                <i className='ri-google-fill text-googlePlus' />
              </IconButton>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterV2
