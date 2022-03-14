import React from "react";
import styled from "styled-components";

const Row = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const ContentLayout: React.FC = ({ children }) => {
    return <Row>{children}</Row>;
};

export default ContentLayout;
