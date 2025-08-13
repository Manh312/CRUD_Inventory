import { Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      {/* <div style={{backgroundColor: 'red'}}>ABC</div> */}
      <Container sx={{ flex: 1, py: 3 }} maxWidth={false}>{children}</Container>
      <Footer />
    </Box>
  );
}
