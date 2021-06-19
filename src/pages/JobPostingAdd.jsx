import React ,{ useEffect, useState } from 'react'
import JobPostingService from "../services/jobPostingService";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";
import WorkTimeService from "../services/workTimeService";
import WorkPlaceService from "../services/workPlaceService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid ,Icon,Header} from "semantic-ui-react";

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
           workPlaceId: Yup.string().required("Çalışma Yeri Boş Bırakılamaz"),
           minSalary:Yup.number().min(0,"0 Dan az olamaz").required("Bu Alan Zorunludur"),
           maxSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu Alan Zorunludur")
        




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
               {/* <Card.Content  header='İş İlanı Ekle'/> */}
               <Header as="h2" color="orange">
                <Icon name="folder open" />
                    <Header.Content>İş İlanı Ekle</Header.Content>
                </Header>
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
                                  <div className={"ui pointing red basic label"}>
                                  {formik.errors.jobTitleId}
                                </div>
                               

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
                                    <div className={"ui pointing red basic label"}>
                                    {formik.errors.cityId}
                                  </div>
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
                                <div className={"ui pointing red basic label"}>
                                {formik.errors.workPlaceId}
                              </div>

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
                                 <div className={"ui pointing red basic label"}>{formik.errors.workTimeId}</div>
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
                                   
                                   <div className={"ui pointing red basic label"}>
                                   {formik.errors.minSalary}
                                 </div>
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
                                   
                                    <div className={"ui pointing red basic label"}>
                                    {formik.errors.maxSalary}
                                     </div>
                                )}
                                </Grid.Column>
                                
                            </Grid>
                        </Form.Field>
                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column  width={8}>
                                <label style={{fontWeight: "bold"}}>Açık Posisyon sayısı</label>
                                <Input
                                    style={{ width: "100%" }}
                                    id="openPositionCount"
                                    name="openPositionCount"
                                    onChange={formik.handleChange}
                                    value={formik.values.openPositionCount}
                                    onBlur={formik.handleBlur}
                                    type="number"
                                    placeholder="Açık Posisyon sayısı"
                                >
                                </Input>
                                {formik.errors.openPositionCount && formik.touched.openPositionCount&& (
                                   <div className={"ui pointing red basic label"}>
                                   {formik.errors.openPositionCount}
                                 </div>
                                )}

                                </Grid.Column>
                                <Grid.Column width={8}>
                                <label style={{fontWeight: "bold"}}>Son başvuru tarihi</label>
                                <Input
                                 style={{ width: "100%" }}
                                 type="date"
                                 onChange={formik.handleChange}
                                 value={formik.values.applicationDeadline}
                                 onBlur={formik.handleBlur}
                                 name="applicationDeadline"   
                                 placeholder="Son başvuru tarihi"/>
                                 {formik.errors.applicationDeadline&& formik.touched.applicationDeadline&& (
                                      <div className={"ui pointing red basic label"}>
                                      {formik.errors.applicationDeadline}
                                    </div>
                                )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>
                        <Form.Field>
                        <label>Açıklama</label>
                        <TextArea
                         placeholder="Açıklama"
                         style={{ minHeight: 100 }}
                         fluid
                         value={formik.values.jobDescription}
                         name="jobDescription"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}


                        />
                        {formik.errors.jobDescription && formik.touched.jobDescription &&(
                           <div className={"ui pointing red basic label"}>
                           {formik.errors.jobDescription}
                         </div>
                        )}



                        </Form.Field>
                        <Button
                        content="Ekle"
                        labelPosition="right"
                        color="orange"
                        icon="add"
                        //positive
                        type="submit"
                        style={{ marginLeft: "20px" }}

                        />
                        

                    </Form>
                </Card.Content>

            </Card>

            
        </div>
    )
}
