import React from "react";
//Material Imports
import SystemUpdateAltRoundedIcon from "@material-ui/icons/SystemUpdateAltRounded";
import Tooltip from "@material-ui/core/Tooltip";
//React PDF Imports
import PDFComponent from "./PDFComponent";
import { PDFDownloadLink } from "@react-pdf/renderer";

function PDFDownload({ todos }) {
  return (
    <PDFDownloadLink
      document={<PDFComponent todos={todos} />}
      fileName="todos.pdf"
      className="export_pdf"
    >
      {({ loading }) =>
        loading ? (
          "Loading document..."
        ) : (
          <Tooltip title="Export as PDF" aria-label="add" placement="right">
            <SystemUpdateAltRoundedIcon />
          </Tooltip>
        )
      }
    </PDFDownloadLink>
  );
}

export default PDFDownload;
