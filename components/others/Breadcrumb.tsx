import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbComponent = ({
  links,
  pageText,
}: {
  links: string[];
  pageText: string;
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={"/"}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        {links.map((link) => (
          <BreadcrumbItem key={link}>
             <BreadcrumbSeparator />
            <BreadcrumbLink href={link}>{link.slice(1)}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{pageText}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
