import styled from '@emotion/styled';

export const Container = styled.div(() => ({
    display: 'flex',   
    flexDirection: 'column' as const,
    marginLeft: '88px'
}));