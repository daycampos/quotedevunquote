import React from 'react';
import styled from '@emotion/styled';




class Post extends React.PureComponent{
    render(){
        const Post = styled.p`
            font-size:1em;
            
            
        `
        const PostTitle = styled.h2`font-size:1.5em`
        const Wrapper = styled.div`margin-top:60px;`

        return(
            <Wrapper>
                <PostTitle>
                    O primeiro Lorem ipsum
                </PostTitle>
                <Post>
                    {this.props.text}
                </Post>
            </Wrapper>
        )
    }
}

export default Post;