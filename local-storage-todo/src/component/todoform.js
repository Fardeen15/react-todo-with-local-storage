import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
class Form1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
        }
    }

    value = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    submit = () => {
        if (this.state.value) {
            const obj = {
                value: this.state.value
            }
            var data = JSON.parse(localStorage.getItem('data'))
            if (data) {
                data.push(obj)
                localStorage.setItem('data', JSON.stringify(data))
                this.setState({
                    value: ""
                })
            } else {
                data = []
                data.push(obj)
                localStorage.setItem('data', JSON.stringify(data))
                this.setState({
                    value: ""
                })
            }
        } else {
            alert('plz check your filled')

        }


    }
    update = () => {
        var data = JSON.parse(localStorage.getItem('data'))
        console.log(this.props.index)
        const obj = {
            value: this.state.value
        }
        data.splice(this.props.index, 1, obj)
        localStorage.setItem('data', JSON.stringify(data))
        this.setState({
            value: ""
        })
        
    }
    componentWillMount() {
        if (this.props.value) {
            this.setState({
                value: this.props.value
            })
        }
    }
    render() {
        console.log(this.props)
        return (
            <div id ="FormDiv">
                <div id ="inputDiv">
                    <Form.Group md="4" controlId="validationCustom01">
                        <FormControl
                            required
                            type="text"
                            value={this.state.value} 
                            onChange={this.value}
                            placeholder="First name"
                        />
                    </Form.Group>
                    {/* <Form.Control  placeholder="name" /> */}
                </div>

                {this.props.value ?
                    <div>
                        <Button variant="secondary" size="lg" block onClick={()=>{
                            this.update()
                            this.props.clear123()
                            }}>update</Button><br/>
                    </div>
                    :
                    <div>
                        <Button variant="secondary" size="lg" block onClick={this.submit}>Submit</Button><br/>
                    </div>
                }
                <div>
                    <Link to="/list"><Button size="lg" block variant="primary" >view list</Button></Link>
                </div>
                {/* {this.state.submit ?
                    
                    : null} */}
            </div>
        )
    }
}
// export const
export default Form1