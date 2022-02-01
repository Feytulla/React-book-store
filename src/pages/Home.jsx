import React, { useEffect } from "react";
import Partners from "../components/home/Partners";
import About from "../components/home/About";
import Catalog from "../components/home/Catalog";
import HomeSlider from "../components/home/HomeSlider";
import Search from "../components/SearchComp";
import Books from "../components/home/Books";
import { useDispatch } from "react-redux";
import { valueClear } from '../store/search';

function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(valueClear())
    },[])
    return (
        <>
            <main>
                <div className="containers">
                    <div className="row">
                        <div className="col-6 col-sm-3">
                            <Catalog />
                        </div>
                        <div className="col-6 col-sm-9">
                            <HomeSlider />
                            <Search />
                            <Books />
                        </div>
                    </div>
                    <Partners />
                    <About />
                </div>
            </main>
        </>
    )
}

export default Home