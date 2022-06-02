import React, { createContext, useState, useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import filesize from 'filesize';

export interface IFile {
  id: string;
  name: string;
  readableSize: string;
  preview: string;
  file: File | null;
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
    const file = files[0];
    setUploadedFiles((uploadedFiles) => [...(uploadedFiles ?? []), file as any]);
  }, []);

  const deleteFile = useCallback((id: string) => {
    setUploadedFiles((state) => state.filter((file) => file.id !== id));
  }, []);

  return <FilesContext.Provider value={{ handleUpload, uploadedFiles, deleteFile }}>{children}</FilesContext.Provider>;
};

export default FilesContext;
