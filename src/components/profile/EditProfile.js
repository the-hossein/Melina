import React, { useRef, useState } from "react";
import { EditProfileStyle } from "./styleProfile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Input from "../../tools/Input/Input";
import { useTranslation } from "react-i18next";
import MainBtn from "../../tools/mainBtn/MainBtn";
import { validationPhone } from "../../tools/helper";
import callApi from "../../api/callApi";
import { UPDATE_PROFILE, UPLOAD_IMAGE } from "../../api/urls";
import { notify } from "../../tools/toast/toast";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  updateUserimg
} from "../../redux/register/userRegisterActions";
const EditProfile = () => {
  const user = useSelector((state) => state.stateRegister);
  const [newData, setNewData] = useState({
    name: user.data.user.name,
    family: user.data.user.family,
    email: user.data.user.email,

    img: ""
  });
  const [focus, setFocus] = useState(false);
  const [preload, setPreload] = useState(false);

  const inputEl = useRef(null);
  const { t } = useTranslation();
  const changeHandler = (e) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value
    });
  };
  const dispatch = useDispatch();
  const upload = async (e) => {
    e.preventDefault();
    setPreload(true);
    let userfile = e.target.files[0];
    let fileName = userfile.name;
    const regex = /\.(jpeg|png|svg|jpg)$/gim;
    const uploadReq = async () => {
      if (regex.test(fileName)) {
        let formdata = new FormData();
        formdata.append("File", userfile, fileName);
        const response = await callApi(UPLOAD_IMAGE, true, formdata, "POST");
        if (response.status === 200) {
          dispatch(updateUserimg(response.data.filePath, response.data.id));
          setNewData({ ...newData, img: response.data.filePath });
        } else {
          notify(t("failedUploadImg"), "error");
        }
        setPreload(false);
      } else {
        notify(t("incorrectFormatImg"), "error");
      }
    };
    uploadReq();
  };
  const choseHandler = () => {
    inputEl.current.click();
  };
  const updateData = () => {
    if (newData.name !== "" && newData.family !== "" && newData.email !== "") {
      const updateReq = async () => {
        var raw = JSON.stringify({
          id: user.userId,
          name: newData.name,
          family: newData.family,
          email: newData.email,
          profilepicid: user.userImg.id
        });
        const response = await callApi(UPDATE_PROFILE, true, raw, "POST");
        if (response.status === 200) {
          dispatch(getProfile(user.phone));
          notify(t("successUpdate"), "success");
        } else {
          notify(t("failedUpdate"), "warning");
        }
      };
      updateReq();
    } else {
      notify(t("compliteData"), "warning");
    }
  };
  return (
    <EditProfileStyle>
      <div className="userProfileImg">
        <img
          src={preload ? "/Assets/images/uploading.gif" : user.userImg.path}
          alt="profile Image"
        />
        <CameraAltIcon onClick={choseHandler} />
        <input
          type="file"
          id="uploadImage"
          accept="image/png, image/jpeg,"
          onChange={upload}
          ref={inputEl}
        />
      </div>
      <div className="updateForm">
        <Input
          styleInput="outline"
          placeHolder={t("enterName")}
          type="text"
          value={newData.name}
          name="name"
          label={t("userName") + " : "}
          id="name"
          change={changeHandler}
        />
        <Input
          styleInput="outline"
          placeHolder={t("enterFamily")}
          type="text"
          value={newData.family}
          name="family"
          label={t("userFamily") + " : "}
          id="family"
          change={changeHandler}
        />
        <Input
          styleInput="outline"
          placeHolder={t("enterEmail")}
          type="text"
          value={newData.email}
          name="email"
          label={t("email") + " : "}
          id="email"
          change={changeHandler}
        />
      </div>
      <MainBtn text={t("submit")} onClick={updateData} />
    </EditProfileStyle>
  );
};

export default EditProfile;
