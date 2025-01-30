'use client'

import React, { useEffect, useState } from 'react'

import ReactMarkdown from 'react-markdown'

import remarkGfm from 'remark-gfm'

import rehypeHighlight from 'rehype-highlight'

import 'highlight.js/styles/github.css'

import { Modal, Box, IconButton, Typography, Skeleton } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

import { getAiFix } from '@/api/ai'

const SecurityReport = ({ open, handleClose, data }) => {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState('')
  const token = localStorage.getItem('authToken')

  const aiGeneratedFix = async () => {
    try {
      const response = await getAiFix(token, data)

      setLoading(false)
      setResult(response?.AIresponse)

      return data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (open) {
      aiGeneratedFix()
    }
  }, [open])

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby='security-report'>
      {loading ? (
        <Skeleton variant='rounded' width={'700'} height={'70vh'} />
      ) : (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            marginLeft: '8px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 3,
            borderRadius: '10px',
            maxHeight: '80vh',
            overflowY: 'auto',
            position: 'relative'
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: 'gray'
            }}
          >
            <CloseIcon />
          </IconButton>

          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {result}
          </ReactMarkdown>
        </Box>
      )}
    </Modal>
  )
}

export default SecurityReport
