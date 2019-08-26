import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class Items extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : ""
        }
    }
    delete = (i)=>{
        var data = this.state.data  
        data.splice(i, 1)
        localStorage.setItem('data', JSON.stringify(data))
        this.setState({
            data : JSON.parse(localStorage.getItem('data'))
        })

    }
    componentWillMount(){
        this.setState({
            data : JSON.parse(localStorage.getItem('data'))
        })
    }
    render(){
        
        return(
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <td>S.no</td>
                            <td>Name</td>
                            <td> <Link to = "/"><Button variant = "danger">back</Button></Link></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((value,index)=>{
                            return(
                                <tr key = {index}>
                                    <td>{index + 1}</td>
                                    <td>{value.value}</td>
                                    <td><Link to = "/"><Button variant = "secondary" name = {value.value} onClick={(ev)=>this.props.edit(ev,index)}>edit</Button></Link></td>
                                    <td><Button variant = "danger" onClick={(ev)=>this.delete(index)}>delete</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Items