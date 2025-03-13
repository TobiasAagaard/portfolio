import { ReactNode, useEffect } from "react";

interface PageWrapperProps {
    title: string;
    description: string;
    children: ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ title, description, children }) => {
    useEffect(() => {
        document.title = title;

        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
           
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }
    }, [title, description]); 

    return (
            <div>{children}</div>
    );
};
