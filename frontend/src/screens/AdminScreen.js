import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Col, Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import ProductForm from '../components/forms/ProductForm'
import ProductEditForm from '../components/forms/ProductEditForm'
import ProductExpanded from '../components/ProductExpanded'
import BigLoader from '../components/BigLoader'

const AdminScreen = () => {
    const { register, handleSubmit } = useForm()
    const [ tokenValue, giveValue ] = useState([])
    const [ addForm, setAddForm ] = useState(false)
    const [ updForm, setUpdForm ] = useState(false)
    const [ preloadedData, setPreloaded ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const onLoginSubmit = data => {
        axios.post(`${process.env.REACT_APP_API_URL}api/admin/login`, data)
        .then (res => {
            giveValue(res.data.token)
        })
        .catch(err => {
            alert(err)
        })
    }

    const getProduct = async (data) => {
        setPreloaded(null)
        setLoading(true)
        await axios.get(`${process.env.REACT_APP_API_URL}api/product/${data.id}`)
        .then(res => {
            setPreloaded(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div style={{transform: 'translateY(-3rem)'}}>
            {tokenValue.length === 0 && <> 
                <Col xs={12} md={10} lg={8} xl={6} className='p-3 bg-dark' style={{margin: 'auto', borderRadius: '13px', transform: 'translateY(0)'}}>
                <Form onSubmit={handleSubmit(onLoginSubmit)} className='d-flex flex-column justify-content-center'>
                    <Form.Control name="username" placeholder='Username' ref={register} className='p-2 mb-2' style={{margin: 'auto', borderRadius: '13px', width: '80%'}}/>
                    <Form.Control name="password" placeholder='Password' ref={register} className='p-2 mb-4' style={{margin: 'auto', borderRadius: '13px', width: '80%'}}/>
                    <Form.Control type="submit" className='btn btn-info' style={{width: '50%', margin: 'auto', borderRadius: '13px'}} />
                </Form>
                </Col>
            </>}
            {tokenValue.length !== 0 && <> 
                <Container className='mpara'>
                    <Button onClick={() => {setAddForm(!addForm); setUpdForm(false); setPreloaded(null)}}>Προσθήκη</Button>
                    <Button onClick={() => {setUpdForm(!updForm); setAddForm(false)}}>Διόρθωση</Button>
                </Container>
                {updForm && 
                <>
                    <Container className='update-menu mb-4'>
                        <Form onSubmit={handleSubmit(getProduct)}>
                            <Form.Label className='text-white'>Κωδικός Προιόντος "pid"</Form.Label>
                            <Form.Control type='text' name='id' ref={register}></Form.Control>
                            <Form.Control type='submit' className='btn-info' value='Ψάξε'></Form.Control>
                        </Form>
                        
                    </Container>
                    <Container className='text-center'>
                        {loading && <> 
                        <p>Κάτσε περίμενε ψάχνω...</p> 
                        <BigLoader />
                        </>}
                        {preloadedData !== null && <>
                            <ProductEditForm tokenValue={tokenValue} preloadedData={preloadedData} />
                            <ProductExpanded product={preloadedData} />
                        </>}
                    </Container>
                </>}
                    
                {addForm && <> 
                    <ProductForm tokenValue={tokenValue}/>
                </>} 
            </>}
             
            
        </div>
    )
}

export default AdminScreen
