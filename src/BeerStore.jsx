import React from 'react'
import {create} from 'zustand';
import axios from "axios";

const useBeerStore = create((set,get) => ({
    dataBeers:[],
    dataNew:[],
    delArrid:[],
    pageState:0,
    firstCallApi:true,
    error:null,

    fetchData:  async (page) => {
        try {
            const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}`)
            set({ dataNew: await response.data })
            if (get().firstCallApi){    // якщо перший раз робить запит на сервер
                set( (state) => ({ 
                 dataBeers:state.dataNew.filter((item,index)=>{
                    if(index<15) return true                            //записує перші 15 елементів dataBeers
                }),
                dataNew: state.dataNew.filter(((val,index)=> index>=15)),  //видаляє перші 15 елементів dataNew
                firstCallApi:false,
                
            }))
        }
        set({pageState:page})    //запамятовує поточну сторінку
        console.log("DataNew", get().dataNew);
        console.log("Page", get().pageState);
        console.log(response.data); 
        }
        catch (err) {
            set( (state) => ({error: err})) 
        }
        
    },
    // fetchNewData:  async (element,page) => {
    //     const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${element}`)
    //     set({ dataNew: await response.data })
    //     console.log(response.data); 
        
    // },

    // видаляє обрані пива
    deleteData:()=>{
        set((state) => ({ 
           
            dataBeers:  state.dataBeers.filter((beer)=>{
                let flag=true;
                state.delArrid.forEach((id)=>{
                    // console.log(id);
                    // console.log(beer.id);
                    // console.log(id!=beer.id);
                    // console.log(state.dataBeers);
                    if (id==beer.id) flag=false;
                });
                return flag;
                
           })
        }))

    // якщо нових даних більще ніж видалено 
        if (get().dataNew.length >= get().delArrid.length ){
            set( (state) => ({ 
                dataBeers: [...state.dataBeers, ...state.dataNew.filter((val,index)=> index<state.delArrid.length) ],     //добавляє нові дані
                dataNew:state.dataNew.filter(((val,index)=> index>state.delArrid.length)),
                delArrid:[] 
           }))
        }
    // якщо нових даних менше ніж видалено потрібно добавити ті що залишилися 
        else{
            set( (state) => ({ 
                dataBeers: [...state.dataBeers, ...state.dataNew.slice(0) ],     //добавляє нові дані
                delArrid:state.delArrid.slice(0, state.delArrid.length - state.dataNew.length) 

           }))
    // новий запит даних
           get().fetchData(get().pageState+1).then(()=>{
                set( (state) => ({ 
                    dataBeers: [...state.dataBeers, ...state.dataNew.slice(0, state.delArrid.length) ],     //добавляє нові дані
                    dataNew:state.dataNew.filter(((val,index)=> index>state.delArrid.length)),              //видаляє дані які вже рендеряться
                    delArrid:[]                                                                             //очищує масив id видалених елементів
                }))
           })
           
        }
            
        
        
        
        
    },
    // добавляє id до вибраних перевіряючи чи не було внесено то id раніше
    addDelId:(id)=>{
        set((state) => ({
            delArrid: state.delArrid.includes(id) ? [...state.delArrid] : [...state.delArrid, id]
        }))
    },
    // видаляє id з вибраних 
    removeDelId:(id)=>{
        set((state) => ({
            delArrid: state.delArrid.filter((idArr)=> idArr!==id)
        }))
    },
    
}));

export default useBeerStore;
