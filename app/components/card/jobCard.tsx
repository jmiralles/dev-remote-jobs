"use client";
import React from "react";
import type { Job } from "@/app/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const JobCard = ({
  title,
  company_name,
  company_logo_url,
  candidate_required_location,
  url,
  provider,
  location,
  publication_date,
}: Job) => {
  return (
    <Card>
      <div className="flex gap-3">
        {company_logo_url ? (
          <Image
            alt={company_name}
            height={40}
            radius="sm"
            src={company_logo_url}
            width={40}
          />
        ) : (
          <div>{company_name}</div>
        )}

        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
