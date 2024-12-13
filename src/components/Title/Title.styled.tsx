import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { colors } from '../../constants/colors';

export const Title = styled(Typography)(() => ({
    color: colors.black,
    textAlign: "right" as const,
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: "Raleway",
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
}));