import LinearProgress from '@mui/material/LinearProgress';

export default function LoadingLine({ index }) {
  return (
    <LinearProgress
      variant="indeterminate"
      sx={{
        height: 25,
        borderRadius: 2,
        marginBottom: 1,
        '& .MuiLinearProgress-bar': {
          animationDuration: '10s',
          animationDelay: `${index * 1}s`,
        },
      }}
    />
  );
}
