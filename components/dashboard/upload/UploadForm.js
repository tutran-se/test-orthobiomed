import { Button, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

import {
  AiOutlineUpload,
  AiOutlineInfoCircle,
  AiOutlineDownload,
  AiOutlineFolderOpen,
} from "react-icons/ai";
const Container = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
`;

const UploadForm = () => {
  const [file, setFile] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [aliasName, setAliasName] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file);
    setErrorMessage("");
    if (
      file.type !==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setErrorMessage("Only accept .csv or .xlsx type file");
      return null;
    }
    // file size  > 10MB
    if (file.size > 10485760) {
      setErrorMessage("File size limit is 10 MB");
      return null;
    }
    setFile(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const uploadFile = () => {
    var formData = new FormData();
    formData.append("fileUpload", file);
    formData.append("aliasName", aliasName);
    for (var value of formData.values()) {
      console.log(value);
    }
    // call api
  };
  return (
    <Container>
      {errorMessage && (
        <Button
          variant="outlined"
          color="error"
          style={{ textTransform: "initial" }}
        >
          Error: {errorMessage}
        </Button>
      )}

      <h2>Upload a new file</h2>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex" }} {...getRootProps()}>
            <input
              {...getInputProps()}
              type="file"
              hidden
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
            <TextField
              color="primary"
              // focused
              id="outlined-required"
              label="File Name"
              value={file?.name || "sample.csv"}
            />
            &nbsp;&nbsp;
            <Button
              variant={isDragActive ? "contained" : "outlined"}
              startIcon={<AiOutlineUpload />}
              style={{ borderStyle: "dashed" }}
            >
              {isDragActive ? "Drop the files here" : " Upload + Drag/Drop"}
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="outlined"
              startIcon={<AiOutlineInfoCircle />}
              style={{ textTransform: "capitalize" }}
            >
              File size limit: 10MB
            </Button>
          </div>
          <br />
          <div>
            <TextField
              color="primary"
              id="outlined-required"
              label="Alias Name"
              value={aliasName}
              onChange={(e) => setAliasName(e.target.value)}
              required
            />
          </div>
          <br />
          <br />
          <div>
            <Button
              variant="contained"
              size="large"
              onClick={() => uploadFile()}
            >
              Upload File
            </Button>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div>Sample File</div>

          <div>
            <AiOutlineFolderOpen size={40} />
          </div>

          <div>
            <a href={"/assets/sample.xlsx"} download>
              <Button variant="outlined" startIcon={<AiOutlineDownload />}>
                Download
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UploadForm;
