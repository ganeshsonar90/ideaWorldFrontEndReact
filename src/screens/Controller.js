import React from "react";
import Home from "../screens/home/Home";
import {useEffect} from "../component";
import {Route} from "react-router-dom";
import Header from "../common/header/Header";
import LoadingIndicatorComponent from "../common/loader/loading-indicator-component";
import AppNotificationComponent from "../common/notification/app-notification-component";
import {Switch} from "../component/index"
import AuthenticationDialog from "./authentication/AuthenticationDialog";
import ParticlesBg from "particles-bg";

const Controller = () => {
    const baseUrl = "/api/v1/";

    useEffect(() => {
        document. title = "Idea World"
        }, [])

    return (
        <React.Fragment>
            <ParticlesBg type="circle" bg={true} />
            <LoadingIndicatorComponent></LoadingIndicatorComponent>
            <Header/>
            <Switch>


                <Route
                    exact
                    path="/"
                    render={(props) => <Home {...props} baseUrl={baseUrl}/>}
                />

                <Route path="/authentication">
                    <AuthenticationDialog/>
                </Route>


            </Switch>

            <AppNotificationComponent/>
        </React.Fragment>
    );
};

export default Controller;
