import React, { useState } from "react";
import Products from "./Products";
import Testimonial from "./Testimonial";
import Learning from "./Learning";
import Info from "./Info";
import Element from "./Element";
import Contact from "./Contact";
import Footer from "./Footer";
const Search =() =>{

    const [search, setSearch] = useState();
    const [data, setData] =useState();

    const handleInput= (event) =>{
        console.log(event.target.value);
        setSearch(event.target.value);
    }

    const myFun =async()=>{
        const get= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        const jsonData=await get.json()
        console.log(jsonData);
        setData(jsonData[0]);
    }


    return(
        <>
                <section className="home">
                    <div className="hero">
                        <div className="container-fluid py-2">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="searchBar">
                                        <h1 className="fs-1 m-1 fw-bold text-white py-4 ">Library <br/> Education</h1>
                                        <p className="m-1 text-left text-white pb-4">Duis aute irure dolor in reprehenderit in voluptate velit <br/>esse cillum dolore eu fugiat nulla pariatur. Excepteur <br/>sint occaecat cupidatat non proident</p>
                                        <input type="text" placeholder="Search Words" onChange={handleInput} className="m-2"/>
                                        <button className="mx-2 text-center" onClick={myFun}>Search</button>
                                    </div>

                                    <div className="datas">
                                        {
                                            data ? 
                                            <div className="datas">
                                                <h2 className="text-white">Word: {data.word}</h2>
                                                <p className="text-white">Part Of Speech: {data.meanings[0].partOfSpeech}</p>
                                                <p className="text-white">Definitions: {data.meanings[0].definitions[0].definition}</p>
                                                <p className="text-white">Synonyms: {data.meanings[0].synonyms[0]}</p>
                                                <p className="text-white">Antonyms: {data.meanings[0].antonyms[0]}</p>
                                                <p className="text-white">Example: {data.meanings[0].definitions[0].example}</p>
                                                <button onClick={()=>window.open(data.sourceUrls[0], "_blank")}>Read More</button>


                                            </div>
                                            : ""
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-8">
                                <img src="../src/assets/images/hero1.png" className="w-100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Products/>
                    <Testimonial/>
                    <Info/>
                    <Learning/>
                    <Element/>
                    <Contact/>
                    
                                  
                </section>
        </>
    )
}

export default Search;