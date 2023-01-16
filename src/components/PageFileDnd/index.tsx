import { CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import FileDnd from '../FileDnd';
import CustomCard from '../CustomCard';
import CustomCardHeader from '../CustomCardHeader';

interface PageFileDndProps {
  updateFile: (file: File) => void;
}

const PageFileDnd = ({ updateFile }: PageFileDndProps) => (
  <Grid xs={10} mdOffset={1}>
    <CustomCard>
      <CustomCardHeader
        title="Import a blueprint to be analyzed"
        titleTypographyProps={{
          // @ts-expect-error - MUI types are wrong for CardHeader.titleTypographyProps.component
          component: 'h2',
        }}
      />
      <CardContent>
        <FileDnd updateFile={updateFile} />
      </CardContent>
    </CustomCard>
  </Grid>
);

export default PageFileDnd;
