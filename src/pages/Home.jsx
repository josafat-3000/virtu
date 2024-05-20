import React, { useState, useEffect } from 'react';
import { Typography, Box, Paper, Grid, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { supabase } from './supa';
import * as XLSX from '../node-modules/xlsx';



function Home() {
  const [userName, setUserName] = useState(null);
  const [visitas, setVisitas] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUserName(user.user_metadata.username); // O el campo que desees mostrar
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    const fetchVisitas = async () => {
      try {
        const { data, error } = await supabase.from('visitas_registro').select('*');
        if (error) {
          throw error;
        }
        setVisitas(data || []);
      } catch (error) {
        console.error('Error fetching visitas:', error.message);
      }
    };

    fetchVisitas();
    fetchUserData();
  }, []);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(visitas);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Visitas');
    XLSX.writeFile(wb, 'visitas.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: '#visitas-table' });
    doc.save('visitas.pdf');
  };

  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Container>
            <Box sx={{ padding: 1 }}>
            <Typography variant="h4" gutterBottom>
                {`Bienvenido ${userName}` }
              </Typography>
              <Typography variant="h6" gutterBottom>
                Lista de Visitas
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {visitas.length > 0 && Object.keys(visitas[0]).map((key) => (
                        <TableCell key={key} sx={{ backgroundColor: '#00497E', color: '#fff', fontSize: '0.8rem' }}>{key}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {visitas.map((visita, index) => (
                      <TableRow key={index}>
                        {Object.values(visita).map((value, index) => (
                          <TableCell key={index} sx={{ fontSize: '0.75rem', color: '#000', padding: '4px' }}>{value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="contained" onClick={exportToExcel} style={{ marginLeft: '35%', marginTop: "30px", padding: '10px', backgroundColor: '#00497E'}}>Exportar a Excel</Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
