import {
  FaGithub,
  FaRegKeyboard,
  FaTwitter,
  FaLinkedin,
  FaHashtag,
  FaTimes,
  FaRegEdit,
  FaUnlink,
  FaGripLines,
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
  BsListUl,
  BsListOl,
  BsQuote,
  BsCodeSlash,
  BsLink45Deg,
  BsTypeItalic,
  BsTable,
  BsCardImage,
  BsPlayBtnFill,
  BsCheck2Square,
  BsChevronDown,
} from "react-icons/bs";
import { CiAlignRight, CiAlignCenterV, CiAlignLeft } from "react-icons/ci";
import { BiUndo, BiRedo } from "react-icons/bi";

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

export const ArrowDownIcon = ({ style }: IconcType) => {
  return <BsChevronDown className={`${style}`} />;
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

export const BulletListIcon = ({ style }: IconcType) => {
  return <BsListUl className={`${style}`} />;
};

export const NumListIcon = ({ style }: IconcType) => {
  return <BsListOl className={`${style}`} />;
};

export const CheckListIcon = ({ style }: IconcType) => {
  return <BsCheck2Square className={`${style}`} />;
};

export const CodeIcon = ({ style }: IconcType) => {
  return <BsCodeSlash className={`${style}`} />;
};

export const BlockQuoteIcon = ({ style }: IconcType) => {
  return <BsQuote className={`${style}`} />;
};

export const AlignLeftIcon = ({ style }: IconcType) => {
  return <CiAlignLeft className={`${style}`} />;
};

export const AlignCenterIcon = ({ style }: IconcType) => {
  return <CiAlignCenterV className={`${style}`} />;
};

export const AlignRightIcon = ({ style }: IconcType) => {
  return <CiAlignRight className={`${style}`} />;
};

export const ItalicIcon = ({ style }: IconcType) => {
  return <BsTypeItalic className={`${style}`} />;
};

export const LinktIcon = ({ style }: IconcType) => {
  return <BsLink45Deg className={`${style}`} />;
};

export const UnLinktIcon = ({ style }: IconcType) => {
  return <FaUnlink className={`${style}`} />;
};

export const EditIcon = ({ style }: IconcType) => {
  return <FaRegEdit className={`${style}`} />;
};

export const TableIcon = ({ style }: IconcType) => {
  return <BsTable className={`${style}`} />;
};

export const ImageIcon = ({ style }: IconcType) => {
  return <BsCardImage className={`${style}`} />;
};

export const VideoIcon = ({ style }: IconcType) => {
  return <BsPlayBtnFill className={`${style}`} />;
};

export const HorizontalRuleIcon = ({ style }: IconcType) => {
  return <FaGripLines className={`${style}`} />;
};

export const UndoIcon = ({ style }: IconcType) => {
  return <BiUndo className={`${style}`} />;
};

export const RedoIcon = ({ style }: IconcType) => {
  return <BiRedo className={`${style}`} />;
};
