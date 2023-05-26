import {
  FaGithub,
  FaRegKeyboard,
  FaTwitter,
  FaLinkedin,
  FaHashtag,
  FaTimes,
} from "react-icons/fa";
import {
  BsFolderCheck,
  BsDownload,
  BsLayoutSidebarInset,
  BsThreeDotsVertical,
  BsSearch,
  BsTrash,
  BsFileEarmarkText,
  BsClipboard2,
} from "react-icons/bs";

type IconcType = {
  style?: string;
};

export const GithubIcon = ({ style }: IconcType) => {
  return <FaGithub className={`${style}`} />;
};

export const TwitterIcon = ({ style }: IconcType) => {
  return <FaTwitter className={`${style}`} />;
};

export const LinkedinIcon = ({ style }: IconcType) => {
  return <FaLinkedin className={`${style}`} />;
};

export const KeyboardIcon = ({ style }: IconcType) => {
  return <FaRegKeyboard className={`${style}`} />;
};

export const SaveIcon = ({ style }: IconcType) => {
  return <BsFolderCheck className={`${style}`} />;
};

export const DownloadIcon = ({ style }: IconcType) => {
  return <BsDownload className={`${style}`} />;
};

export const SlideIcon = ({ style }: IconcType) => {
  return <BsLayoutSidebarInset className={`${style}`} />;
};

export const DoteMenuIcon = ({ style }: IconcType) => {
  return <BsThreeDotsVertical className={`${style}`} />;
};

export const SearchIcon = ({ style }: IconcType) => {
  return <BsSearch className={`${style}`} />;
};

export const HashIcon = ({ style }: IconcType) => {
  return <FaHashtag className={`${style}`} />;
};

export const TrashIcon = ({ style }: IconcType) => {
  return <BsTrash className={`${style}`} />;
};

export const FileIcon = ({ style }: IconcType) => {
  return <BsFileEarmarkText className={`${style}`} />;
};

export const CopyIcon = ({ style }: IconcType) => {
  return <BsClipboard2 className={`${style}`} />;
};

export const CroseIcon = ({ style }: IconcType) => {
  return <FaTimes className={`${style}`} />;
};
