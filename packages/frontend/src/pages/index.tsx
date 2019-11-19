import React, { FC, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { NextPage } from "next";
import Router from "next/router";
import withApollo from "../apollo/withApollo";
import redirect from "../lib/redirect";
import {
  colors,
  Input,
  Button,
  Icon,
  DropDown,
  HorizontalRule,
  Spinner,
  useTranslate
} from "@bitbloq/ui";
import LandingFooter from "../components/LandingFooter";
import LandingHeader from "../components/LandingHeader";
import LandingExamples from "../components/LandingExamples";
import Layout from "../components/Layout";
import OpenExerciseForm from "../components/OpenExerciseForm";
import OpenDocumentInput, {
  IOpenDocumentInputHandle
} from "../components/OpenDocumentInput";
import logoBetaImage from "../images/logo-beta.svg";
import { documentTypes } from "../config";
import studentStep1Image from "../images/student-step-1.svg";
import studentStep2Image from "../images/student-step-2.svg";
import heroImage from "../images/home_beta-decoration.svg";

const IndexPage: NextPage = () => {
  const t = useTranslate();

  const onNewDocument = (type: string) => {
    window.open(`/app/edit-document/local/${type}/new`);
  };

  const openDocumentRef = useRef<IOpenDocumentInputHandle>(null);

  const onOpenDocument = () => {
    if (openDocumentRef.current) {
      openDocumentRef.current.open();
    }
  };

  return (
    <>
      <LandingHeader />
      <Layout>
        <Section>
          <Hero>
            <h1>
              <img src={logoBetaImage} alt="Bitbloq Beta" />
            </h1>
            <p>
              La plataforma más completa para trabajar el diseño 3D, la
              programación y la robótica en el aula.
            </p>
          </Hero>
          <Tools>
            <h2>
              <Icon name="new-document" />
              Crea o abre un documento
            </h2>
            <ToolsList>
              {Object.keys(documentTypes)
                .map(id => ({ ...documentTypes[id], id }))
                .map(type => (
                  <Tool key={type.id}>
                    <ToolIcon color={type.color}>
                      <Icon name={type.icon} />
                    </ToolIcon>
                    <h3>{type.label}</h3>
                    <ToolLevel>{type.level}</ToolLevel>
                    <p>{type.landingText}</p>
                    {type.supported && (
                      <Button
                        {...{ [type.buttonType]: true }}
                        onClick={() => onNewDocument(type.id)}
                      >
                        <PlusIcon>
                          <Icon name="plus" />
                        </PlusIcon>
                        Nuevo documento
                      </Button>
                    )}
                    {!type.supported && <ComingSoon>Próximamente</ComingSoon>}
                  </Tool>
                ))}
              <OpenDocumentPanel>
                <OpenDocumentIcon color="white">
                  <Icon name="open-document" />
                </OpenDocumentIcon>
                <h3>Abrir documento desde archivo</h3>
                <p>
                  Abre cualquier documento de tipo .bitbloq que hayas guardado
                  en tu ordenador.
                </p>
                <OpenDocumentButton quaternary onClick={() => onOpenDocument()}>
                  <Icon name="open-document" />
                  Abrir documento
                </OpenDocumentButton>
              </OpenDocumentPanel>
            </ToolsList>
          </Tools>
        </Section>
        <Section>
          <OpenExercise>
            <OpenExerciseInfo>
              <h2>
                <Icon name="airplane-document" />
                Ir a un ejercicio
              </h2>
              <OpenExerciseSteps>
                <OpenExerciseStep>
                  <img src={studentStep1Image} />
                  <p>
                    1. Pide a tu profesor el código del ejercicio que quieres
                    hacer.
                  </p>
                </OpenExerciseStep>
                <OpenExerciseStep>
                  <img src={studentStep2Image} />
                  <p>2. Introduce el código y pulsa en “Empezar”.</p>
                </OpenExerciseStep>
              </OpenExerciseSteps>
            </OpenExerciseInfo>
            <OpenExercisePanel>
              <OpenExercisePanelTitle>Ir al ejercicio</OpenExercisePanelTitle>
              <HorizontalRule small />
              <OpenExercisePanelContent>
                <OpenExerciseForm openText="Empezar" />
              </OpenExercisePanelContent>
            </OpenExercisePanel>
          </OpenExercise>
        </Section>
        <Section>
          <LandingExamples />
        </Section>
      </Layout>
      <LandingFooter />
      <OpenDocumentInput ref={openDocumentRef} />
    </>
  );
};

export default withApollo(IndexPage, {
  requiresSession: false,
  onlyWithoutSession: true
});

/* styled components */

interface ILoadingProps {
  type?: string;
}

const Loading = styled(Spinner)<ILoadingProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props =>
    (props.type && documentTypes[props.type].color) || colors.gray1};
  color: ${props => (props.type ? "white" : "inherit")};
  display: flex;
`;

const Section = styled.div`
  :not(:last-of-type):after {
    border-bottom: 1px solid #e0e0e0;
    content: "";
    left: 0;
    position: absolute;
    width: 100vw;
  }
`;

const Hero = styled.div`
  padding: 0px 50px;
  box-sizing: border-box;
  background-color: #f1f1f1;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-position: right center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img {
    height: 90px;
    margin-bottom: 30px;
    margin-top: 125px;
  }

  p {
    font-size: 22px;
    font-weight: 300;
    line-height: 1.36;
    margin-bottom: 125px;
    max-width: 512px;
  }
`;

const Tools = styled.div`
  margin-top: 60px;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 20px;

    svg {
      height: 36px;
      margin-right: 10px;
    }
  }
`;

const ToolsList = styled.div`
  display: flex;
  width: 83.33%;
  margin-left: 8.33%;
  flex-wrap: wrap;
`;

const Tool = styled.div`
  width: 33%;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    line-height: 1.57;
    margin-bottom: 20px;
  }
`;

const OpenDocumentPanel = styled(Tool)`
  border-radius: 10px;
  background-color: #f1f1f1;
  align-self: flex-start;
`;

interface IToolIconProps {
  color: string;
}

const ToolIcon = styled.div<IToolIconProps>`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;

  svg {
    width: 40px;
  }
`;

const OpenDocumentIcon = styled(ToolIcon)`
  color: inherit;
  svg {
    width: 32px;
  }
`;

const OpenDocumentButton = styled(Button)`
  padding: 0px 20px;
  svg {
    width: 16px;
    margin-right: 6px;
  }
`;

const ToolLevel = styled.div`
  border: solid 1px #373b44;
  margin-bottom: 10px;
  padding: 0px 6px;
  font-weight: 300;
  font-size: 12px;
  height: 20px;
  display: inline-flex;
  text-transform: uppercase;
  align-items: center;
`;

const PlusIcon = styled.div`
  svg {
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
`;

const ComingSoon = styled.div`
  height: 40px;
  border-radius: 4px;
  background-color: #5d6069;
  display: inline-flex;
  align-items: center;
  padding: 0px 26px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
`;

const OpenExercise = styled.div`
  width: 83.33%;
  display: flex;
  margin: 80px 0px 80px 8.33%;
`;

const OpenExerciseInfo = styled.div`
  margin-bottom: 40px;
  width: 66%;

  h2 {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 40px;

    svg {
      height: 36px;
      margin-right: 10px;
    }
  }
`;

const OpenExerciseSteps = styled.div`
  display: flex;
`;

const OpenExerciseStep = styled.div`
  display: flex;
  flex: 1;
  padding-right: 20px;
  box-sizing: border-box;
  img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
  p {
    font-size: 14px;
    line-height: 1.57;
  }
`;

const OpenExercisePanel = styled.div`
  border-radius: 10px;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 33%;
`;

const OpenExercisePanelTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: 18px;
  font-weight: bold;
`;

const OpenExercisePanelContent = styled.div`
  padding: 30px;
`;
