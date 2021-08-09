import {
    FacebookIcon,
    FacebookShareButton,
    HatenaIcon,
    HatenaShareButton,
    LineIcon,
    LineShareButton,
    TwitterIcon,
    TwitterShareButton
  } from 'react-share'
  
import React from 'react'
import styled from '@emotion/styled'
  
const Wrapper = styled.div`
    display: flex;
    padding-bottom: 24px;`
  
const ButtonWrapper = styled.div`
    padding-right: 12px;
  `



const ShareButtonList = ({title, url}) => {
    return (
      <Wrapper>
        <ButtonWrapper>
          <FacebookShareButton url={url} style={{height: "30px"}}>
            <FacebookIcon size={40} />
          </FacebookShareButton>
        </ButtonWrapper>
  
        <ButtonWrapper>
          <LineShareButton url={url} style={{height: "30px"}}>
            <LineIcon size={40} />
          </LineShareButton>
        </ButtonWrapper>
  
        <ButtonWrapper>
            <TwitterShareButton title={title} url={url} style={{height: "30px"}} >
                <TwitterIcon size={40} />        
            </TwitterShareButton>
        </ButtonWrapper>

        <ButtonWrapper>
          <HatenaShareButton url={url} style={{height: "30px"}} >
            <HatenaIcon size={40} />
          </HatenaShareButton>
        </ButtonWrapper>
      </Wrapper>
    )
}
  
export default ShareButtonList