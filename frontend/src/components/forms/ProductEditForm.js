import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { Col, Form, Button, Row } from 'react-bootstrap'
import axios from 'axios'
import Loader from '../Loader'

const ProductForm = ({tokenValue, preloadedData}) => {
    const [ isFood, setIsFood ] = useState(false)
    const [ isGenericSize, setIsGenericSize ] = useState(false)
    const [ hasColors, setHasColors ] = useState(false)
    const [ loader, setLoader ] = useState(false)
    const [ loaderimg, setLoaderImg ] = useState(false)
    const { register, handleSubmit } = useForm({
        defaultValues: preloadedData
    })
    const { register: register2, handleSubmit: handleSubmit2 } = useForm()
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
    const updateProduct = async (data) => {
        setLoader(true)
        await axios.put(`${process.env.REACT_APP_API_URL}api/admin/upd`, data, config)
        .then (res => {
            console.log(data)
            alert(JSON.stringify(res.data))
        })
        .catch(err => {
            alert(err)
        })
        setLoader(false)
    }
    const updateProductImages = async (data) => {
        data.pid = preloadedData.pid
        const imgFormData = new FormData()
        imgFormData.append('pid', data.pid)
        for (let i = 0 ; i < data.images.length ; i++) {
            imgFormData.append("images", data.images[i]);
        }
        setLoaderImg(true)
        await axios.post(`${process.env.REACT_APP_API_URL}api/admin/delprev`, {pid: data.pid}, config)
        .then (res => {
            alert(JSON.stringify(res.data))
        })
        .catch(err => {
            alert(err)
        })
        await axios.post(`${process.env.REACT_APP_API_URL}api/admin/addimg`, imgFormData, config2)
        .then (res => {
            alert(JSON.stringify(res.data))
            data.images = res.data
        })
        .catch(err => {
            alert(err)
        })
        await axios.put(`${process.env.REACT_APP_API_URL}api/admin/upd`, data, config)
        .then(res => {
            alert(JSON.stringify(res.data))
        })
        .catch(err => {
            alert(err)
        })
        setLoaderImg(false)
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
    function checkForSubAuto(e) {
        let wtf = e
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
    useEffect(()=>{
        if(preloadedData !== null){
            checkForSubAuto(preloadedData.category)
            if(preloadedData.colors !== undefined){
                setHasColors(true)
            }
        }
    },[preloadedData])
    return (
        <>
                <Col xs={12} md={10} lg={8} xl={6} className='p-3 bg-dark text-center text-white' style={{margin: 'auto', borderRadius: '13px'}}>
                    <Form onSubmit={handleSubmit(updateProduct)} className='d-flex flex-column justify-content-center' >
                        <h5 className='text-white'>????o</h5>    
                        <div className='d-flex justify-content-center pb-3'>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="gata" label='????????'/>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="skylos" label='????????????'/>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="pthno" label='??????????'/>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="psari" label='????????'/>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="trwktiko" label='????????????????'/>
                            <Form.Check inline name='animal[]' ref={register} type="checkbox" value="erpeto" label='????????????'/>
                        </div>
                        <Form.Label>????????????</Form.Label>
                        <Form.Control type='text' name="name" ref={register}  className='form-control p-2 mb-2' style={{margin: 'auto', borderRadius: '13px', width: '88%'}}/>
                        <Form.Control type='text' name="pid" ref={register} placeholder='??????????????'  className='form-control p-2 mb-2' style={{margin: 'auto', borderRadius: '13px', width: '40%'}}/>
                        <Form.Control as="select" name='category' onChange={checkForSub} ref={register} className='mb-2' defaultValue='' style={{margin: 'auto', borderRadius: '13px', width: '40%'}}>
                            <option disabled hidden value=''>????????????????????</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>??????????????</option>
                            <option value='trofes'>????????????</option>
                            <option value='lixoudies'>??????????????????</option>
                            <option value='paixnidia'>??????????????????</option>
                            <option value='mpwl'>????????</option>
                            <option value='louria'>????????????</option>
                            <option value='xtenesampouan'>???????????? - ????????????????</option>
                            <option value='ygeia'>???????? ????????????????</option>
                            <option value='travelcage'>Cage ??????????????????</option>
                            <option value='accessories'>????????????????</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>??????????????????</option>
                            <option value='kokkala'>??????????????</option>
                            <option value='onyxodromia'>??????????????????????</option>
                            <option value='krevatia'>????????????????</option>
                            <option value='lekanes'>??????????????</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>??????????</option>
                            <option value='enydreia'>????????????????</option>
                            <option value='eksoplismos'>???????????????????? ??????????????????</option>
                            <option value='diakosmhtika'>???????????????????????? ??????????????????</option>
                            <option value='test'>????????</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>????????????????</option>
                            <option value='ypostrwmata'>??????????????????????</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>????????????</option>
                            <option value='terrarium'>Terrarium</option>
                            <option value='symplhrwmata'>???????????????????????? ??????????????????</option>
                            <option disabled style={{color: 'black', fontWeight: '800'}}>??????????</option>
                            <option value='klouvia'>??????????????</option>
                            <option value='taistres'>????????????????</option>
                            <option value='potistres'>??????????????????</option>
                            <option value='patithres'>????????????????</option>
                            <option value='patoi'>?????????? ????????????????</option>
                            <option value='zevgarwma'>???????? ????????????????????????</option>
                        </Form.Control>
                        {isFood && <>
                            <Form.Control as='select' name='marka' ref={register} defaultValue='' style={{margin: 'auto', borderRadius: '13px', width: '40%'}}>
                                <option disabled hidden value=''>????????????</option>
                                <option disabled style={{color: 'black', fontWeight: '800'}}>????????????</option>
                                <option value='Flatazor PureLife'>Flatazor PureLife</option>
                                <option value='Flatazor Prestige'>Flatazor Prestige</option>
                                <option value='ROYAL CANIN'>ROYAL CANIN</option>
                                <option value='Dingo'>Dingo</option>
                                <option value='Natura Diet'>Natura Diet</option>
                                <option value='Gemon'>Gemon</option>
                                <option value='Amity'>Amity</option>
                                <option value="Hill's">Hill's</option>
                                <option value="MANITOBA">MANITOBA</option>
                                <option value="DAJANA PET">DAJANA PET</option>
                                <option value="Flourish">Flourish</option>
                                <option value="OxBow">OxBow</option>
                                <option value='MIOGATTO'>MIOGATTO</option>
                                <option value='Mhims'>Mhims</option>
                                <option value='Vitapol'>Vitapol</option>
                                <option value='LOLO'>LOLO</option>
                                <option value='beaphar'>beaphar</option>
                                <option value='Tetra'>Tetra</option>
                                <option value='Puik'>Puik</option>
                                <option value='CHIPSI'>CHIPSI</option>
                                <option value='Tartafood'>Tartafood</option>
                            </Form.Control>
                            <div className='d-flex justify-content-center pb-3'>
                                <Form.Check
                                inline
                                type="radio"
                                label="????????"
                                name="subcategory"
                                value='ygrh'
                                ref={register}
                                />
                                <Form.Check
                                inline
                                type="radio"
                                label="????????"
                                name="subcategory"
                                value='kshra'
                                ref={register}
                                />
                                <Form.Check
                                inline
                                type="radio"
                                label="???????????????? ??????????????"
                                name="subcategory"
                                value='klinikes'
                                ref={register}
                                />
                            </div>
                        </>}
                        {isGenericSize && <>
                            <Form.Label>????????????</Form.Label>
                            <Form.Control as='textarea' rows={3} ref={register} name='size' className='mb-4' style={{margin: 'auto', borderRadius: '13px', width: '40%'}}/>
                        </>}
                        <Button onClick={() => setHasColors(!hasColors)} style={{margin: 'auto', borderRadius: '13px', width: '30%'}}>??????????????</Button>
                        {hasColors && <> 
                            <div className='pb-3'>
                                <Row xs={2}>
                                    <Col>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="black" label='black'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="white" label='white'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="red" label='red'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="blue" label='blue'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="teal" label='tblue'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="yellow" label='yellow'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="purple" label='purple'/>
                                    </Col>
                                    <Col>    
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="orange" label='orange'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="lightgreen" label='lgreen'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="violet" label='violet'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="grey" label='grey'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="pink" label='pink'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="brown" label='brown'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="lime" label='lime'/>
                                        <Form.Check  name='colors[]' ref={register} type="checkbox" value="LightSkyBlue" label='LightSkyBlue'/>
                                    </Col>
                                </Row>

                            </div>
                        </>}
                        <Form.Label>??????????????????</Form.Label>
                        <Form.Control as='textarea' rows={4} name='description' ref={register} style={{margin: 'auto', borderRadius: '13px', width: '90%'}} />
                        <Button variant='info' type="submit" className='mt-4' style={{width: '30%', margin: 'auto', borderRadius: '13px'}}>{loader && <Loader />}{!loader && <>????????????????</>}</Button>
                    </Form>
                    <Form className='image-update-form' onSubmit={handleSubmit2(updateProductImages)}>
                        <Form.Label>???????????? ??????????????????????</Form.Label>
                        <Form.File multiple name='images' ref={register2}/>
                        <Button variant='info' type='submit'>{loaderimg && <Loader />}{!loaderimg && <>????????????</>}</Button>
                    </Form>
                </Col>
        </>
    )
}

export default ProductForm
