import LinearProgress from '@mui/material/LinearProgress';

export default function LoadingLine({ index }) {
  return (
    <LinearProgress
      variant="indeterminate"
      sx={{
        height: 35,
        borderRadius: 2,
        marginBottom: 1,
        '& .MuiLinearProgress-bar': {
          animationDuration: '5s',
          animationDelay: `${index * 1}s`,
        },
      }}
    />
  );
}
