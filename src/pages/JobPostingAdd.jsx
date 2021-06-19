import React ,{ useEffect, useState } from 'react'
import JobPostingService from "../services/jobPostingService";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";
import WorkTimeService from "../services/workTimeService";
import WorkPlaceService from "../services/workPlaceService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";

export default function JobPostingAdd() {

   const [cities, setCities] = useState([]);
   const [jobTitles, setJobTitles] = useState([]);
   const [workTimes,setWorkTimes] = useState([]);
   const [workPlaces, setWorkPlaces] = useState([]);

   let jobPostingService = new JobPostingService();

   useEffect(() => {
       let cityService= new CityService();
       let jobTitleService = new JobTitleService(); 
       let workTimeService = new WorkTimeService();
       let workPlaceService = new WorkPlaceService();

       cityService.getCities().then((result) => setCities(result.data.data));
       jobTitleService.getJobTitles().then((result) => setJobTitles(result.data.data));
       workTimeService.getWorkTimes().then((result) => setWorkTimes(result.data.data));
       workPlaceService.getWorkPlaces().then((result) => setWorkPlaces(result.data.data)); 



   },[])


   const getCities= cities.map((city,index)=> ({
       key:index,
       text:city.cityName,
       value:city.id,

   }));
   const getJobTitles = jobTitles.map((jobTitle,index) => ({
       key:index,
       text:jobTitle.title,
       value:jobTitle.id,


   }));

   const getWorkPlaces =workPlaces.map((workPlace,index) => ({
       key:index,
       text:workPlace.name,
       value:workPlace.id,
   }));


   const getWorkTimes = workTimes.map((workTime,index) =>({
        key:index,
        text:workTime.name,
        value:workTime.id,
   }));


   const formik= useFormik({
       initialValues:{
           jobTitleId:"",
           cityId:"",
           minSalary:"",
           maxSalary:"",
           openPositionCount:"",
           jobDescription: "",
           releaseDate:"",  //yayınlanma tarihi
           applicationDeadline:"",//son başvuru 
           workTimeId:"",
           workPlaceId:"",
           employerId:1,

       },

       validationSchema:Yup.object({
           jobTitleId:Yup.number().required("İş Pozisyonu Seçiniz"),
           cityId:Yup.string().required("Şehir Bilgisi Seçiniz"),
           openPositionCount:Yup.number().required("Alınacak Eleman Sayısı Boş Bırakılamaz"),
           jobDescription:  Yup.string().required("Açıklama Boş Bırakılamaz"),
           releaseDate:Yup.string().required("Yayınlanma Tarihi Boş Bırakılamaz"),
           applicationDeadline:Yup.string().required("Son Başvuru Tarihi Boş Bırakılamaz"),
           workTimeId:Yup.string().required("Çalışma Zaman Tipi Boş Bırakılamaz"),
           workPlaceId: Yup.string().required("Çalışma Tipi Boş Bırakılamaz"),




       }),

       onSubmit:(values) => {
           console.log(values);
           let jobPosting= {
               city:{id:values.cityId},
               releaseDate:values.releaseDate,
               employer:{id:values.employerId},
               jobTitle:{id:values.jobTitleId},
               minSalary:values.minSalary,
               maxSalary:values.maxSalary,
               openPositionCount:values.openPositionCount,
               jobDescription:values.jobDescription,
               workTime:{id:values.workTimeId},
               workPlace:{id:values.workPlaceId},

           };
           console.log(jobPosting);
           jobPostingService.add(jobPosting).then((result) => console.log(result.data.message))
       },


   });


    return (
        <div>
            <Card fluid>
                <Card.Content header='İş İlanı Ekle'/>
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field style ={{marginBottom: "1rem"}}>
                            <label>İş Pozisyonu</label>
                            <Dropdown
                               clearable
                               item
                               placeholder="İş Pozisyonu"
                               search
                               selection
                               options={getJobTitles}
                               onChange= {(event,data)=>
                                formik.setFieldValue("jobTitleId",data.value)
                            }
                            value={formik.values.jobTitleId}/>
                            {formik.errors.jobTitleId && formik.touched.jobTitleId && (
                                //   <div className={"ui pointing red basic label"}>
                                //   {formik.errors.jobPositionId}
                                // </div>
                                <p style={{ color: "red" }}>{formik.errors.jobTitleId}</p>

                              )}
                        </Form.Field>
                        <Form.Field>
                            <label>Şehir</label>
                            <Dropdown
                             clearable
                             item
                             placeholder="Şehir"
                             search
                             selection
                             options={getCities}
                             onChange ={(event,data ) => 
                                formik.setFieldValue("cityId" ,data.value)
                            }
                            value={formik.values.cityId} />
                              {formik.errors.cityId&& formik.touched.cityId && (
                                  <p style = {{color :"red"}} >{formik.errors.cityId}</p>
                              )}
                        </Form.Field>
                        <Form.Field>
                            <label>Çalışma Yeri</label>
                            <Dropdown
                             clearable
                             item
                             placeholder="Çalışma Yeri"
                             search
                             selection
                             options={getWorkPlaces}
                             onChange= {(event,data) =>
                                formik.setFieldValue("workPlaceId",data.value)
                            }
                            value  ={formik.values.workPlaceId} required/>
                            {formik.errors.workPlaceId && formik.touched.workPlaceId&& (
                               <p style ={{color :"red"}}>{formik.errors.workPlaceId}</p>

                            )}
                        </Form.Field>
                        <Form.Field>
                            <label >Çalışma Zamanı</label>
                            <Dropdown
                             clearable
                             item
                             placeholder="Çalışma Zamanı"
                             search
                             selection
                             options={getWorkTimes}
                             onChange={(event,data) =>
                                formik.setFieldValue("workTimeId" ,data.value)
                            }
                            value ={formik.values.workTimeId}/>
                            {formik.errors.workTimeId&&formik.touched.workTimeId&& (
                                <p style ={{color:"red"}}>{formik.errors.workTimeId}</p>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                <label style={{fontWeight: "bold"}}> Maaş Minimum</label>
                                <Input
                                 style ={{width: "100%" }}
                                 type ="number"
                                 placeholder="Maaş aralığı Minimum"
                                 value={formik.values.minSalary}
                                 name="minSalary"
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur} >
                                  
                                </Input>
                                {formik.errors.minSalary&&formik.touched.minSalary &&(
                                     <p style={{ color: "red" }}>{formik.errors.minSalary}</p>
                                )}

                                </Grid.Column>
                                <Grid.Column width={8}>
                                <label style={{fontWeight: "bold"}}> Maaş Maksimum</label>
                                <Input
                                 style ={{width: "100%" }}
                                 type ="number"
                                 placeholder="Maaş aralığı Maksimum"
                                 value={formik.values.maxSalary}
                                 name="maxSalary"
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur} >


                                </Input>
                                {formik.errors.maxSalary &&formik.touched.maxSalary&&(
                                     <p style={{ color: "red" }}>{formik.errors.maxSalary}</p>
                                )}
                                </Grid.Column>
                                
                            </Grid>
                        </Form.Field>
                        

                    </Form>
                </Card.Content>

            </Card>

            
        </div>
    )
}
