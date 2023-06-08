"use client";
import React, { useState, createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import { database } from "@/config/appwriteConfig";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../../../context/AuthContext";
import { useEditor } from "./EditorContext";

type TemplatesType = {
  $id: string;
  template: string;
  title: string;
  userId?: string;
}[];

type TemplateContextType = {
  publicTemplates: TemplatesType;
  userTemplates: TemplatesType;
  isLoading: boolean;
  getUserTemplates: () => void;
  saveUserTemplates: (title: string) => void;
  getPublicTemplates: () => void;
  updateUserTemplates: (docId: string) => void;
  deleteUserTemplates: (docId: string) => void;
};

type ChildrenType = {
  children: React.ReactNode;
};

export const TemplateContext = createContext<TemplateContextType | null>(null);
export const useTemplates = () => useContext(TemplateContext)!;

const TemplateContextProvider: React.FC<ChildrenType> = ({
  children,
}: ChildrenType) => {
  const [publicTemplates, setPublicTemplates] = useState<TemplatesType>([]);
  const [userTemplates, setUserTemplates] = useState<TemplatesType>([]);
  const [isLoading, setIsLoading] = useState(false);
  // custom hooks
  const { currentUser } = useAuth();
  const { editor } = useEditor();
  // enviroment variables
  const databaseId = `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`;
  const collectionId = `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID}`;

  const getPublicTemplates = async () => {
    try {
      setIsLoading(true);
      const getData: any = await database.listDocuments(
        `${process.env.NEXT_PUBLIC_APPWRITE_PUBLIC_DATABASE_ID}`,
        `${process.env.NEXT_PUBLIC_APPWRITE_PUBLIC_COLLECTION_ID}`
      );
      setPublicTemplates(getData.documents);
      setIsLoading(false);
    } catch (error) {
      toast.error("Something went wrong! 🤷‍♀️");
    }
  };

  const getUserTemplates = async () => {
    if (currentUser) {
      try {
        setIsLoading(true);
        const getData = await database.listDocuments(databaseId, collectionId);
        const filterTemplate: any = getData?.documents?.filter(
          (val) => val?.userId == currentUser?.$id
        );
        setUserTemplates(filterTemplate);
        setIsLoading(false);
      } catch (error) {
        toast.error("Something went wrong! 🤷‍♀️");
      }
    }
  };

  const saveUserTemplates = async (title: string) => {
    if (userTemplates.length >= 3) {
      toast.error("You reched your limit");
    } else {
      try {
        await database.createDocument(databaseId, collectionId, uuidv4(), {
          template: editor?.getHTML(), // attribute and value
          title: title,
          userId: `${currentUser?.$id}`,
        });
        toast.success("Save data successfully 👍");
        getUserTemplates();
      } catch (error) {
        toast.error("Something went wrong! 🤷‍♀️");
      }
    }
  };

  const updateUserTemplates = async (docId: string) => {
    try {
      await database.updateDocument(databaseId, collectionId, docId);
      getUserTemplates();
      toast.success("Template updated successfully");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const deleteUserTemplates = async (docId: string) => {
    try {
      await database.deleteDocument(databaseId, collectionId, docId);
      toast.success("Template deleted successfully");
      getUserTemplates();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const value: TemplateContextType = {
    publicTemplates,
    userTemplates,
    isLoading,
    getPublicTemplates,
    saveUserTemplates,
    getUserTemplates,
    updateUserTemplates,
    deleteUserTemplates,
  };

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateContextProvider;
