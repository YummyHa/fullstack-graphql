import React from "react";
import Link from "./Link";

const LinkList = props => {
  const linksToRender = [
    {
      id: "1",
      description: "Prisma turns your database into a GraphQL API 😎",
      url: "https://www.prismagraphql.com"
    },
    {
      id: "2",
      description: "The best GraphQL client",
      url: "https://www.apollographql.com/docs/react/"
    }
  ];

  return (
    <div>
      {linksToRender.map(link => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;