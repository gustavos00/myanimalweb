import React, { useContext } from "react";
import FilesContext from "../../contexts/files";
import * as S from "./styles";

const FileList = () => {
  const { uploadedFiles: files, deleteFile } = useContext(FilesContext);

  return (
    <S.Container>
      {files.map((uploadedFile: any) => (
        <li key={uploadedFile.id}>
          <S.FileInfo>
            <S.Preview src={uploadedFile.preview} />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}
                <button onClick={(e) => deleteFile(uploadedFile.id)}>
                  Excluir
                </button>
              </span>
            </div>
          </S.FileInfo>
        </li>
      ))}
    </S.Container>
  );
};

export default FileList;
