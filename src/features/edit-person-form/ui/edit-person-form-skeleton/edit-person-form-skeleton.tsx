import { Stack, SxProps, Theme } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

type EditPersonFormSkeletonProps = {
  sx?: SxProps<Theme>;
};

export const EditPersonFormSkeleton = ({ sx }: EditPersonFormSkeletonProps) => {
  const fieldItems = Array.from({ length: 3 }, (_, index) => index);

  return (
    <Stack spacing={2} sx={sx}>
      {fieldItems.map((item) => (
        <Skeleton key={item} width="100%" height={56} variant="rectangular" />
      ))}
      <Stack direction="row" spacing={1} justifyContent="center">
        <Skeleton width={68} height={36.5} variant="rectangular" />
        <Skeleton width={68} height={36.5} variant="rectangular" />
      </Stack>
    </Stack>
  );
};
