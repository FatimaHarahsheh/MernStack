import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListComponents = () => {
    const [author,setauthor] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setauthor(res.data);
            });
    },[]);

           const classes = useStyles();
           
return (
    <>
  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="caption table">
      <caption>A basic table example with a caption</caption>
      <TableHead>
        <TableRow>
          <TableCell>Authors</TableCell>
          <TableCell >Action Avaliabale</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
        {author.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.Name}
            </TableCell>
            <TableCell >

            </TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
);
}

    


export default ListComponents
