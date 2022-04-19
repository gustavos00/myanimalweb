import FilesContext from "../../contexts/files";

import { useDropzone } from "react-dropzone";
import { useContext, useCallback } from "react";

import * as S from "./styles";

import FileList from "../FileList";

function UploadFiles() {
  const { handleUpload } = useContext(FilesContext);

  const onDrop = useCallback(
    (files) => {
      handleUpload(files);
    },
    [handleUpload]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: [
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "application/msword",
        "application/pdf",
      ],
      onDrop,
    });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <S.UploadMessage>Drag documents here...</S.UploadMessage>;
    }

    if (isDragReject) {
      return <S.UploadMessage>File type not supported</S.UploadMessage>;
    }

    return <S.UploadMessage>Drop the documents where</S.UploadMessage>;
  }, [isDragActive, isDragReject]);

  return (
    <div>
      <label htmlFor="reportFiles">Report Files</label>
      <S.DropContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {renderDragMessage()}
      </S.DropContainer>

      <FileList />
    </div>
  );
}

export default UploadFiles;
