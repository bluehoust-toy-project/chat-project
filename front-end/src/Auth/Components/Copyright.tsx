import { Link, SxProps, Theme, Typography } from '@mui/material';

interface Props {
  sx?: SxProps<Theme>;
}

const Copyright = ({ sx = [] }: Props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={[...(Array.isArray(sx) ? sx : [sx])]}>
      {'Copyright © '}
      <Link color="inherit" href={window.location.href}>
        Chat App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
