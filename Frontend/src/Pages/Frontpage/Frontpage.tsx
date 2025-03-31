import { Header } from "../../Components/Header/Header"
import { Tech } from "../../Components/Tech/Tech"
import { PageWrapper } from "../../Layout/PageWrapper/PageWrapper"


export const Frontend: React.FC = () => {
    return (
            <PageWrapper  title="Frontpage | Tobias Portfolio " description="Explore the portfolio of Tobias, a skilled full-stack developer specializing in C#, .NET, React, and network systems. See projects in web, mobile, and software development!">
            <Header />
            <Tech />
            </PageWrapper>
    )
}