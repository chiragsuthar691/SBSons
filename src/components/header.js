import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import { useFormik } from "formik";
import { changePasswordSchema } from "@/Schemas/AuthSchemas";
import User from "../assests/images/user-profile.jpg"
import { useDispatch } from "react-redux";
import Link from 'next/link';

let changePasswordValues = {
  old_password: "", new_password: "", confirm_password: "",
}

const Header = () => {
  const userMenu = useRef();
  const [changePasswordModal, setChangePasswordModal] = useState(false)
  const dispatch = useDispatch()

  const submitHandle = useCallback(
    async values => {
      let result;
      const payload = {
        ...values,
      };
      result = await dispatch(changePassword(payload));
      if (result) {
        useFormik.resetForm()
        setChangePasswordModal(false);
      }
    },
    [dispatch],
  );

  const { handleBlur, handleChange, errors, values, touched, handleSubmit, resetForm } =
    useFormik({
      enableReinitialize: true,
      initialValues: changePasswordValues,
      validationSchema: changePasswordSchema,
      onSubmit: submitHandle,
    });

  const menuItems = useMemo(() => [{
    template: (item, options) => {
      return (
        <>
          <Link href={"/profile"}>
            <span
              className="menu_item_wrap"
              onClick={e => options?.onClick(e)}
            >
              <i className="pi pi-user" style={{ marginRight: "5px" }}></i>
              <span>Profile</span>
            </span>
          </Link>
        </>
      );
    },
  }, {
    template: (item, options) => {
      return (
        <>

          <Link href={"/my-cart"}>
            <span
              className="menu_item_wrap"
              onClick={e => options?.onClick(e)}
            >
              <i className="pi pi-shopping-cart" style={{ marginRight: "5px" }}></i>
              <span>My Cart</span>
            </span>
          </Link>
        </>
      );
    },
  }], []);

  const start = <Image alt="logo" src={User} width={30} height={30} className="mr-2 rounded" onClick={(event) => userMenu.current?.toggle(event)} />
  const end = (
    <ul className="right_header">
      <li>
        <InputText placeholder="Search" className='search' />
      </li>
      <li>
        <Button >
          <i className="pi pi-search" style={{ color: "#322972", fontSize: "20px" }}></i>
        </Button>
      </li>
    </ul>
  );

  const items = [
    {
      command: () => {
        setChangePasswordModal(true)
      },
      template: (item, options) => {
        return (
          <button onClick={(e) => options.onClick(e)} className={'w-full p-link flex justify-start'}>
            <i className="pi pi-spin pi-cog" style={{ color: "#322972" }}></i>
            <div className="ml-2">Change Password</div>
          </button>
        )
      }
    }, {
      command: () => {
        setChangePasswordModal(true)
      },
      template: (item, options) => {
        return (
          <button onClick={(e) => options.onClick(e)} className={'w-full p-link flex justify-start'}>
            <i className="pi pi-spin pi-cog" style={{ color: "#322972" }}></i>
            <div className="ml-2">Settings</div>
          </button>
        )
      }
    }]

  return (
    <>
      <header>
        <div className="main_header">
          <div className="menu_wrapper">
            <Menubar model={menuItems} start={start} end={end} />
            <Menu model={items} popup ref={userMenu} className='usermenu' id="popup_menu_left" />
          </div>
        </div>

        {/* Profile pic popup */}
        <Dialog
          header="Change Password"
          visible={changePasswordModal}
          draggable={false}
          className="modal_Wrapper modal_small modal_no_padding"
          onHide={() => {
            setChangePasswordModal(false);
            resetForm()
          }}
        >
          <div className="stock_transfer_modal_wrapper">
            <div className="stock_transfer_top_wrap px-3">
              <div className="form_group mb-3">
                <label htmlFor="OldPassword">
                  Old Password <span className="text-red-500 ">*</span>
                </label>
                <InputText
                  type="password"
                  placeholder="Old Password"
                  name="old_password"
                  value={values?.old_password || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched?.old_password && errors?.old_password && (
                  <p className="text-red-500">{errors?.old_password}</p>
                )}
              </div>
              <div className="form_group mb-3">
                <label htmlFor="NewPassword">
                  New Password <span className="text-red-500 ">*</span>
                </label>
                <InputText
                  type="password"
                  placeholder="New Password"
                  name="new_password"
                  value={values?.new_password || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched?.new_password && errors?.new_password && (
                  <p className="text-red-500">{errors?.new_password}</p>
                )}
              </div>
              <div className="form_group mb-3">
                <label htmlFor="ConfirmPassword">
                  Confirm Password <span className="text-red-500 ">*</span>
                </label>
                <InputText
                  type="password"
                  placeholder="Confirm Password*"
                  name="confirm_password"
                  value={values?.confirm_password || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched?.confirm_password && errors?.confirm_password && (
                  <p className="text-red-500">{errors?.confirm_password}</p>
                )}
              </div>
            </div>
          </div>
          <div className="button_group d-flex justify-content-end px-3">
            <Button
              className="btn_primary ms-3"
              onClick={() => handleSubmit(values)}
            >
              Change Password
            </Button>
          </div>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
