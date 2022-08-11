import { styled } from '@mui/material/styles';
import { Chip, ChipProps } from '@mui/material';

export const StyledChip = styled(Chip)<ChipProps>(() => ({
    borderRadius: 0,
    bottom: 0,
    position: "absolute",
    right: 0,
    backgroundColor: "#DED7FD59",
  '& .MuiChip-label': {
    color: "#906CF4",
    letterSpacing: 2.5,
    textTransform : "uppercase"
  },
}));

