import styled from "@emotion/styled";

export const OverlayDialog = styled.div(() => ({
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.30)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));