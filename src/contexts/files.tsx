import React, { createContext, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import filesize from "filesize";

export interface IFile {
  id: string;
  name: string;
  readableSize: string;
  uploaded?: boolean;
  preview: string;
  file: File | null;
  progress?: number;
  error?: boolean;
  url: string;
}

interface IFileContextData {
  deleteFile(id: string): void;
  handleUpload(file: any): void;
  uploadedFiles: IFile[];
}

const FilesContext = createContext<IFileContextData>({} as IFileContextData);

export const FilesProvider: React.FC = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState<IFile[]>([]);

  const handleUpload = useCallback((files: File[]) => {
    const newUploadedFiles: IFile[] = files.map((file: File) => ({
      file,
      id: uuidv4(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: "",
    }));

    setUploadedFiles((state) => state.concat(newUploadedFiles));
    console.log(uploadedFiles);
  }, []);

  const deleteFile = useCallback((id: string) => {
    setUploadedFiles((state) => state.filter((file) => file.id !== id));
  }, []);

  return (
    <FilesContext.Provider value={{ handleUpload, uploadedFiles, deleteFile }}>
      {children}
    </FilesContext.Provider>
  );
};

export default FilesContext;
