import React, { useState, useEffect,ChangeEvent } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

import Menu from '../components/menu'

import './postagens.css'
import axios from 'axios'
import Footer from '../components/footer'
import { withStyles, makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import {AiOutlineSearch,AiOutlineUndo} from 'react-icons/ai'


const useStyles1 = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexShrink: 0,
            marginLeft: theme.spacing(2.5),
        },
    }),
);






interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

interface PostsResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}


const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
            fontSize: 17
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);





function TablePaginationActions1(props: TablePaginationActionsProps) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;



    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (

        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

function createData(id: number, title: string, body: string) {
    return { id, title, body };
}







const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});

const CustomPaginationActionsTable1 =() => {
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


    const [Posts, setPosts] = useState<PostsResponse[]>([])
    const [Array,setArray] = useState<PostsResponse[]>([])
    const [ID, setID] = useState<number>(0)
    const [IDzinho, setIDzinho] = useState<number>()
    const [IDEvent, setIDEvent] = useState<string>("")
    const [Refresh, setRefresh] = useState<number>(0)
    const [IDobj2, setIDobj2] = useState<PostsResponse>({userId:1,id:1,title:'czcxzc', body:'xvxcv'})
    
    useEffect(() => {
        if(ID == 0 ){
            return
        }else{
        axios.get<PostsResponse>(`https://jsonplaceholder.typicode.com/posts/${ID}`)
            .then(response => {

                if(ID == 0){
                    return
                }
            const obj = response.data
            const array = []

            array.push(obj)

            setPosts(array) 
            
              
            
             
              
               console.log(Array)
                
            })
        }
    }, [ID])

    useEffect(() => {
        axios.get<PostsResponse[]>('https://jsonplaceholder.typicode.com/posts')
            .then(response => {


                setPosts(response.data)
                
            })
    }, [Refresh])


    

    Posts.map(post => {
        createData(post.id, post.body, post.title)
    })


    const emptyRows = rowsPerPage - Math.min(rowsPerPage, Posts.length - page * rowsPerPage);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    function input(event:ChangeEvent<HTMLInputElement>){
       
         const value =   event.target.value
        //selecionando exatamente o valor selecionado no Select
        setIDEvent(value)
        
    }
function search(){
    console.log(IDEvent)
    if(IDEvent == ''){
       
        alert("Digite o ID desejado")
        
    }else{
       const value = parseInt(IDEvent)
    if (value <= 0 || value > 100){
        alert("Esse id não existe")
    }else{
        setID(value)
        
    }
       
    }
     
}

function RefreshBTN(){
    
    setRefresh(Refresh + 1)
    setIDEvent("")
   
    
}

    return (
        <div className="content">

            <header>
                <Link to="/">
                    <img src={logo} alt="Ecoleta" />
                </Link>
                
                <Menu op1="Albuns" op2="Todos"/>
                
            </header>



            <div id="page-create-point">
            
            <div className="subHeader">
                <h1>Tabela de Postagens </h1>

                <div className="search">
                <h3>Busca por ID</h3>
                <input id="txt" type="text" onChange={input} value={IDEvent}/>
            <button id="search" onClick={search}><AiOutlineSearch/></button>
            <button id="refresh" onClick={RefreshBTN}><AiOutlineUndo/></button>
            </div>
            </div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="left">Título</StyledTableCell>
                                <StyledTableCell align="left">Descrição</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? Posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : Posts
                            ).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell style={{ width: 300 }} align="left">
                                        {row.title}
                                    </TableCell>
                                    <TableCell style={{ width: 400 }} align="left">
                                        {row.body}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={Posts.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: { 'aria-label': 'rows per page' },
                                        native: true,
                                    }}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions1}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
            <Footer/>
        </div>
    );
}
export default CustomPaginationActionsTable1