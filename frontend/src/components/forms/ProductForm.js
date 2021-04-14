import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'


const ProductForm = ({tokenValue}) => {
    const { register, handleSubmit } = useForm()
    const [ isFood, setIsFood ] = useState(false)
    const [ isGenericSize, setIsGenericSize ] = useState(false)
    const [ hasColors, setHasColors ] = useState(false)
    let config = {
        headers: {
          Authorization: `Bearer ${tokenValue}`
        }
      }    
      let config2 = {
        headers: {
          Authorization: `Bearer ${tokenValue}`,
          'content-type': 'multipart/form-data'
        }
      }  
    const createProduct = async (data) => {
        const imgFormData = new FormData()
        imgFormData.append('pid', data.pid)
        for (let i = 0 ; i < data.images.length ; i++) {
            imgFormData.append("images", data.images[i]);
        }
        console.log(imgFormData)
        await axios.post(`${process.env.REACT_APP_API_URL}api/admin/addimg`, imgFormData, config2)
        .then (res => {
            alert(JSON.stringify(res.data))
            data.images = res.data
        })
        .catch(err => {
            alert(err)
        })
        await axios.post(`${process.env.REACT_APP_API_URL}api/admin/add`, data, config)
        .then (res => {
            console.log(data)
            alert(JSON.stringify(res.data))
        })
        .catch(err => {
            alert(err)
        })
    }

    function checkForSub(e) {
        let wtf = e.target.value
        switch(wtf) {
            case 'trofes':
                setIsFood(true)
                setIsGenericSize(true)
                break
            default:
                setIsFood(false)
                setIsGenericSize(true)
        }
    }
    return (
        <>
                <Col xs={12} md={10} lg={8} xl={6} className='p-3 bg-dark text-center text-white' style={{margin: 'auto', borderRadius: '13px'}}>
                    <Form onSubmit={handleSubmit(createProduct)} className='d-flex flex-column justify-content-center' >
                        <h5 className='text-white'>Ζώo</h5>    
                        <div className='d-flex justify-content-center pb-3'>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="gata" label='Γάτα'/>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="skylos" label='Σκύλος'/>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="pthno" label='Πτηνό'/>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="psari" label='Ψάρι'/>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="trwktiko" label='Τρωκτικό'/>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="erpeto" label='Ερπετό'/>
                        </div>
                        <Form.Label>Τίτλος</Form.Label>
                        <Form.Control type='text' name="name" ref={register}  className='form-control p-2 mb-2' style={{margin: 'auto', borderRadius: '13px', width: '88%'}}/>
                        <Form.Control type='text' name="pid" ref={register} placeholder='Κωδικός'  className='form-control p-2 mb-2' style={{margin: 'auto', borderRadius: '13px', width: '40%'}}/>
                        <Form.Control as="select" name='category' onChange={checkForSub} ref={register} className='mb-2' defaultValue='' style={{margin: 'auto', borderRadius: '13px', width: '40%'}}>
                            <option disabled hidden value=''>Κατηγορίες</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>Γενικές</option>
                            <option value='trofes'>Τροφές</option>
                            <option value='lixoudies'>Λιχουδιές</option>
                            <option value='paixnidia'>Παιχνίδια</option>
                            <option value='mpwl'>Μπωλ</option>
                            <option value='louria'>Λουριά</option>
                            <option value='xtenesampouan'>Χτένες - Σαμπουάν</option>
                            <option value='ygeia'>Είδη Υγιεινής</option>
                            <option value='travelcage'>Cage Μεταφοράς</option>
                            <option value='accessories'>Αξεσουάρ</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>Σκυλογάτα</option>
                            <option value='kokkala'>Κόκκαλα</option>
                            <option value='onyxodromia'>Ονυχοδρόμια</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>Ψάρια</option>
                            <option value='enydreia'>Ενυδρεία</option>
                            <option value='eksoplismos'>Εξοπλισμός Ενυδρείου</option>
                            <option value='diakosmhtika'>Διακοσμητικά Ενυδρείου</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>Τρωκτικό</option>
                            <option value='ypostrwmata'>Υποστρώματα</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>Ερπετό</option>
                            <option value='terrarium'>Terrarium</option>
                            <option value='symplhrwmata'>Συμπληρώματα Διατροφής</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>Πτηνά</option>
                            <option value='klouvia'>Κλουβιά</option>
                            <option value='taistres'>Ταίστρες</option>
                            <option value='potistres'>Ποτίστρες</option>
                            <option value='patithres'>Πατήθρες</option>
                            <option value='patoi'>Πάτοι Κλουβιών</option>
                            <option value='zevgarwma'>Είδη Ζευγαρώματος</option>
                        </Form.Control>
                        {isFood && <>
                            <Form.Control as='select' name='marka' ref={register} defaultValue='' style={{margin: 'auto', borderRadius: '13px', width: '40%'}}>
                                <option disabled hidden value=''>Μάρκες</option>
                                <option disabled style={{color: 'black', fontWeight: '800'}}>Μάρκες</option>
                                <option value='Flatazor Pro-Nutrition'>Flatazor Pro-Nutrition</option>
                                <option value='ROYAL CANIN'>ROYAL CANIN</option>
                            </Form.Control>
                            <div className='d-flex justify-content-center pb-3'>
                                <Form.Check
                                inline
                                type="radio"
                                label="Υγρή"
                                name="subcategory"
                                value='ygrh'
                                ref={register}
                                />
                                <Form.Check
                                inline
                                type="radio"
                                label="Ξηρά"
                                name="subcategory"
                                value='kshra'
                                ref={register}
                                />
                            </div>
                        </>}
                        {isGenericSize && <>
                            <Form.Label>Μεγέθη</Form.Label>
                            <Form.Control as='textarea' rows={2} ref={register} name='size' className='mb-4' style={{margin: 'auto', borderRadius: '13px', width: '40%'}}/>
                        </>}
                        <Button onClick={() => setHasColors(!hasColors)} style={{margin: 'auto', borderRadius: '13px', width: '30%'}}>Χρώματα</Button>
                        {hasColors && <> 
                            <div className='justify-content-center pb-3'>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="black" label='black'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="white" label='white'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="red" label='red'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="blue" label='blue'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="teal" label='tblue'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="yellow" label='yellow'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="purple" label='purple'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="orange" label='orange'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="lightgreen" label='lgreen'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="violet" label='violet'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="grey" label='grey'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="pink" label='pink'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="brown" label='brown'/>
                                <Form.Check  name='colors[]' ref={register} type="checkbox" value="lime" label='lime'/>
                                

                            </div>
                        </>}
                        <Form.Label>Περιγραφή</Form.Label>
                        <Form.Control as='textarea' rows={4} name='description' ref={register} style={{margin: 'auto', borderRadius: '13px', width: '90%'}} />
                        <Form.File name="images" ref={register} multiple style={{margin: 'auto', borderRadius: '13px'}}/>
                        <Button variant='info' type="submit" className='mt-4' style={{width: '30%', margin: 'auto', borderRadius: '13px'}}>Καταχώρηση</Button>
                    </Form>
                </Col>
        </>
    )
}

export default ProductForm
