import React from "react";
import MainLayout from "./Layouts/main";
import ContentLayout from "./Layouts/contents";
import styled from "styled-components";

const LeftAside = styled.aside`
    flex: 1;
    height: 100%;
    background-color: gray;
    overflow-y: auto;
`;

const RightAside = styled.aside`
    flex: 1;
    height: 100%;
    background-color: gray;
    overflow-y: auto;
`;

const Main = styled.section`
    flex: 3;
    height: 100%;
    overflow-y: auto;
`;

const Home: React.FC = () => {
    return (
        <MainLayout>
            <ContentLayout>
                <LeftAside>left aside</LeftAside>
                <Main>section</Main>
                <RightAside>right aside</RightAside>
            </ContentLayout>
        </MainLayout>
    );
};

export default Home;
