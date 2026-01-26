"use client";

import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import imgHero from "@/assets/products/allplan-cloud-services/hero.png";
import imgDistribution from "@/assets/products/allplan-cloud-services/distribution.png";
import imgTeamworking from "@/assets/products/allplan-cloud-services/teamworking.jpg";
import imgOffice from "@/assets/products/allplan-cloud-services/office.jpg";
import imgModelViewer from "@/assets/products/allplan-cloud-services/model-viewer.jpg";
import imgBluebeam from "@/assets/products/allplan-cloud-services/bluebeam.jpg";
import imgBimplus from "@/assets/products/allplan-cloud-services/bimplus.png";
import imgAutoconverter from "@/assets/products/allplan-cloud-services/autoconverter.jpg";
import imgAiViz from "@/assets/products/allplan-cloud-services/ai-viz.jpg";
import imgAiAssistant from "@/assets/products/allplan-cloud-services/ai-assistant.jpg";

import SideImageSection from "@/components/sections/SideImageSection";
import SectionHeader from "@/components/sections/SectionHeader";
import imgServiceMap from "@/assets/products/allplan-cloud-services/cloud-service-map.jpg";

const whatIsInfoMedia = {
    title: "What is ALLPLAN Cloud?",
    descriptions: [
        "ALLPLAN Cloud is a consolidated solution, included by default in all ALLPLAN Subscriptions, that makes the most out of your data, while connecting ALLPLAN desktop and cloud applications.",
        "Benefit from a powerful cloud-based BIM collaboration platform, tools to work on projects in teams, to manage and distribute drawings/plans, and for efficient office teamworking.",
        "All this plus special cloud applications to exchange with structural analysis solutions, rapidly visualize IFC files, integrate 2D documentation.",
        "ALLPLAN Cloud will enhance your design-to-build workflows for optimal efficiency."
    ],
    videoUrl: "https://www.youtube.com/embed/DTSdM7tSBlU",
};

const benefitsItems = [
    {
        title: "Drawing and Plan Distribution",
        description: "ALLPLAN offers a web-based plan distribution tool specifically designed to manage the creation and distribution of various plan formats and provide automatic change notifications via email groups. The platform provides a 2D drawing download environment and tracks shipping and download activity for inclusion in an audit report.",
        image: imgDistribution
    },
    {
        title: "Project Teamworking",
        description: "The combination of ALLPLAN as well as a BIMPLUS account makes it possible to work together with planning partners around the world directly on one and the same ALLPLAN project. Project teamworking is based on the BIM platform BIMPLUS which offers you additional functions, such as the Model Viewer, the task management tool: Task Board or audit control and much more.",
        image: imgTeamworking
    },
    {
        title: "Office Teamworking",
        description: "ALLPLAN enables organization of CAD work stations in local networks (LAN) as well as via Internet. It creates clear synergy effects in medium-sized and large planning and construction firms. Work at an individual network work station is just as simple as work at a normal individual station.",
        image: imgOffice
    },
    {
        title: "ALLPLAN Model Viewer",
        description: "The ALLPLAN Model Viewer incorporates state-of-the-art technology allowing users to rapidly visualize an IFC file. Rather than uploading and waiting for large IFC files, users can now quickly preview a new file, view, and check IFC models visually before fully uploading and creating a revision in Bimplus.",
        image: imgModelViewer
    },
    {
        title: "ALLPLAN - Bluebeam Connection",
        description: "For enhanced design to build workflows and to aid the digital delivery process there is now a connection with Bluebeam. Users will be able to bring 2D documentation into ALLPLAN workflows from within the Bluebeam Studio Project environment.",
        image: imgBluebeam
    },
    {
        title: "BIMPLUS",
        description: "BIMPLUS is the open model-based data and information management collaboration platform for all disciplines involved in construction projects. ALLPLAN cloud technology ensures interoperability across various software tools during the entire project lifecycle from design to build, into operation, fostering efficient collaboration among all project stakeholders.",
        image: imgBimplus,
        link: "/products/allplan-bimplus",
        buttonText: "Read more"
    },
    {
        title: "Autoconverter",
        description: "When working with structural engineers, BIMPLUS offers an advantage through the AutoConverter. Improved and accelerated communication with structural designers has a direct influence on a faster review and decision. The export and import of SAF files including revision comparison is breaking down barriers in the collaboration between architecture and structural analysis, as neither architects or structural engineers need to rebuild their models.",
        image: imgAutoconverter,
        videoUrl: "https://youtu.be/twQPsbxq3QY",
        buttonText: "View Video"
    },
    {
        title: "AI-Based Visualization",
        description: "Connections for creating inspiring, detailed AI driven visualizations. Includes Nemetschek AI Visualizer and integration to EvolveLab's Veras AI Visualizer.",
        image: imgAiViz,
        videoUrl: "https://youtu.be/ldc4IjJDlwc",
        buttonText: "View Video"
    },
    {
        title: "AI Assistant",
        description: "The AI Assistant, available through the Connect platform, is a groundbreaking tool designed to transform the way you work with ALLPLAN software solutions (ALLPLAN, SCIA, FRILO, SDS2 and BIMPLUS). With expertise spanning architecture, engineering, fabrication, and collaboration, this intelligent assistant provides comprehensive support across all areas of the platform. Beyond its deep knowledge of ALLPLAN-specific topics, it also serves as a valuable resource for broader AEC industry standards and best practices.\n\nSupport of IRC standard for accurate and compliant bridge planning in India.",
        image: imgAiAssistant,
        link: "https://www.allplan.com/ai-assistant/",
        external: true,
        buttonText: "Learn more"
    }
];

export default function AllplanCloudServicesPage() {
    return (
        <ProductPageTemplate
            badge="CLOUD SERVICES"
            heroVariant="background"
            title="ALLPLAN Cloud services"
            subtitle="Benefit from instant access to tools boosting your collaboration to the next level."
            description="Discover the power of connected workflows. ALLPLAN Cloud brings your teams, data, and workflows together in one unified environment."
            heroImage={imgHero}
            quickActions={[
                { text: "View Editions", href: "https://www.allplan.com/package-overview/", external: true, variant: "outline" }
            ]}
            whatIsInfoMedia={whatIsInfoMedia}
            benefitsItems={benefitsItems}
            benefitsVariant="cards"
        >
            <SideImageSection
                imageSrc={imgServiceMap}
                imageAlt="ALLPLAN Cloud Services Process Map"
                imagePosition="left"
                title="ALLPLAN Cloud Services in each design phase"
                content="ALLPLAN Cloud incorporates the functionality of BIMPLUS, and former standalone products such as ALLPLAN Share, ALLPLAN Exchange and ALLPLAN Workgroup Manager. Also included are additional applications such as Autoconverter for integration with structural analysis solutions, ALLPLAN Model Viewer for rapid IFC model viewing, a Bluebeam Connection to integrate 2D documentation into ALLPLAN workflows. From conceptual design, through developed and detailed design into fabrication and construction execution, ALLPLAN Cloud supports superior and collaborative workflows across the lifecycle of your projects."
                backgroundColor="transparent"
                theme="dark" // Matches the dark mode generally used, or adjust if needed. Checking ProductPageTemplate theme.
            />
            <SectionHeader
                title="ALLPLAN Cloud Services includes:"
                align="center"
                className="pb-0" // Reduce bottom padding since it sits right above the grid
            />
        </ProductPageTemplate>
    );
}
