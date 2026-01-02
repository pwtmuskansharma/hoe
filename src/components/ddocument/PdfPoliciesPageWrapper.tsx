import React from "react";
import { useParams } from "react-router-dom";
import PdfPoliciesPage from "./PdfPoliciesPage";

const PdfPoliciesPageWrapper: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug)
    return <div className="text-center mt-10">No category selected</div>;

  return <PdfPoliciesPage slug={slug} />;
};

export default PdfPoliciesPageWrapper;
